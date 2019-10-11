#!/usr/bin/env bash

# Compare the output of Tesseract 3 (test) and Tesseract 4 (baseline) OCR
# test takes the run output of all files and compares the positional hOCR tokens to the text tokens

usage() { echo "Usage: $0 -t T3_EXTRACTS_DIR -c T4_EXTRACTS_DIR -o OUTPUT_PATH [-h]" 1>&2; exit 1; }

while getopts o:t:c:h: option; do
  case "${option}" in
    t) T3_EXTRACTS_DIR=${OPTARG} ;;
    c) T4_EXTRACTS_DIR=${OPTARG} ;;
    o) TEST_OUTPUT_DIR=${OPTARG} ;;
    h | [?]) usage ; exit;;
  esac
done
[ ! -e "$T3_EXTRACTS_DIR" ] && usage;
[ ! -e "$T4_EXTRACTS_DIR" ] && usage;

shift $((OPTIND-1))

if [ ! -d "$T4_EXTRACTS_DIR" ]; then
  echo "T4_EXTRACTS_DIR does not exist"
  exit 1
fi
if [ ! -d "$T3_EXTRACTS_DIR" ]; then
  echo "T3_EXTRACTS_DIR does not exist"
  exit 1
fi

mkdir -p $TEST_OUTPUT_DIR

# for each hocr file
for file in $T3_EXTRACTS_DIR/*.hocr; do
  # get the basename for matching other files
  # reverse the filename and take everything after the extension
  filename=$(basename $file | rev | cut -d. -f2- | rev)
  # set the corresponding txt file
  txt_file="$filename.txt"

  # make sure expected comparison files exist for file under test
  if [ ! -f $T3_EXTRACTS_DIR/$txt_file ]; then
    echo "Missing $T3_EXTRACTS_DIR/$txt_file for $file"
    exit 1
  fi
  if [ ! -f "$T4_EXTRACTS_DIR/$filename.hocr" ]; then
    echo "Missing $T4_EXTRACTS_DIR/$filename.hocr for $file"
    exit 1
  fi

  # split on whitespace, ignore bbox, strip the non alnum/hyphen and resulting blank lines
  tr -s ' ' '\n' < $file | \
    cut -d'|' -f1 | \
    tr -cd '[:alnum:]\n-' | \
    grep . > "$TEST_OUTPUT_DIR/${filename}_test_tokens"

  tr -s ' ' '\n' < $T3_EXTRACTS_DIR/$txt_file | \
    cut -d'|' -f1 | \
    tr -cd '[:alnum:]\n-' | \
    grep . > $TEST_OUTPUT_DIR/${filename}_txt_tokens

  tr -s ' ' '\n' < $T4_EXTRACTS_DIR/$filename.hocr | \
    cut -d'|' -f1 | \
    tr -cd '[:alnum:]\n-' | \
    grep . > $TEST_OUTPUT_DIR/${filename}_baseline_tokens

  T3_TOKENS=$TEST_OUTPUT_DIR/${filename}_test_tokens
  PDFBOX_TOKENS=$TEST_OUTPUT_DIR/${filename}_txt_tokens
  T4_TOKENS=$TEST_OUTPUT_DIR/${filename}_baseline_tokens

  DIFF_T3_PDFBOX=$TEST_OUTPUT_DIR/${filename}_diff_test_txt
  DIFF_T4_PDFBOX=$TEST_OUTPUT_DIR/${filename}_diff_txt_baseline
  DIFF_T3_T4=$TEST_OUTPUT_DIR/${filename}_diff_test_baseline

  # how different is the file under test from the text file?
  diff -iybwa --suppress-common-lines $T3_TOKENS $PDFBOX_TOKENS > $DIFF_T3_PDFBOX
  # how different is the baseline hocr from the text file?
  diff -iybwa --suppress-common-lines $T4_TOKENS $PDFBOX_TOKENS > $DIFF_T4_PDFBOX
  # how different is the file under test from the baseline hocr?
  diff -iybwa --suppress-common-lines $T3_TOKENS $T4_TOKENS > $DIFF_T3_T4

  # next steps to report each file
  TOTAL_T3_TOKENS=$(wc -l < $T3_TOKENS)
  TOTAL_PDFBOX_TOKENS=$(wc -l < $PDFBOX_TOKENS)
  TOTAL_T4_TOKENS=$(wc -l < $T4_TOKENS)

  TOTAL_DIFF_TOKENS_T3_PDFBOX=$(grep "|" $DIFF_T3_PDFBOX | wc -l)
  TOTAL_DIFF_TOKENS_T4_PDFBOX=$(grep "|" $DIFF_T4_PDFBOX | wc -l)
  TOTAL_DIFF_TOKENS_T3_T4=$(grep "|" $DIFF_T3_T4 | wc -l)

  TOTAL_MISS_TOKENS_T3_PDFBOX=$(grep ">" $DIFF_T3_PDFBOX | wc -l)
  TOTAL_MISS_TOKENS_T4_PDFBOX=$(grep ">" $DIFF_T4_PDFBOX | wc -l)
  TOTAL_MISS_TOKENS_T3_T4=$(grep ">" $DIFF_T3_T4 | wc -l)
  TOTAL_MISS_TOKENS_T4_T3=$(grep "<" $DIFF_T3_T4 | wc -l)

  # ignore suspected acronyms
  # ignore capitalized words
  # spellcheck and grep only spelling errors
  # take only uniques and output comma separated list

  # add all ground-truth words to hunspell dictionary first
  # compute as rate by div with token count
  SPELL_ERROR_T3=$(cat $T3_TOKENS | \
    egrep -v "[A-Z]{2,}" | \
    egrep -v "^[A-Z]" | \
    hunspell -a - | grep '^[#&]' | cut -d" " -f2 | \
    sort | uniq | sed 's/\(.*\)/"\1"/' | paste -s -d,)

  SPELL_ERROR_PDFBOX=$(cat $PDFBOX_TOKENS | \
    egrep -v "[A-Z]{2,}" | \
    egrep -v "^[A-Z]" | \
    hunspell -a - | grep '^[#&]' | cut -d" " -f2 | \
    sort | uniq | sed 's/\(.*\)/"\1"/' | paste -s -d,)

  SPELL_ERROR_T4=$(cat $T4_TOKENS | \
    egrep -v "[A-Z]{2,}" | \
    egrep -v "^[A-Z]" | \
    hunspell -a - | grep '^[#&]' | cut -d" " -f2 | \
    sort | uniq | sed 's/\(.*\)/"\1"/' | paste -s -d,)

  SPELL_ERROR_COUNT_T3=$(echo $SPELL_ERROR_T3 | tr "," " " | wc -w)
  SPELL_ERROR_COUNT_PDFBOX=$(echo $SPELL_ERROR_PDFBOX | tr "," " " | wc -w)
  SPELL_ERROR_COUNT_T4=$(echo $SPELL_ERROR_T4 | tr "," " " | wc -w)
  # I don't have to do hunspell line by line, I could parse the entire tokens and count the errors
  # but I kind of want an "expected X but got Y" report for line diffs
  # maybe just loop through each diff line and do the counts then
  # like $ERRORS++ or something, just to build them up in a loop.
  REPORT=$(cat <<EOF
{
  "pdfbox_file": "$TEST_EXTRACTS_DIR/$txt_file",
  "t3_file": "$file",
  "t4_file": "$T4_EXTRACTS_DIR/$filename.hocr",

  "total_pdfbox_tokens": $TOTAL_PDFBOX_TOKENS,
  "total_t3_tokens": $TOTAL_T3_TOKENS,
  "total_t4_tokens": $TOTAL_T4_TOKENS,

  "total_diff_tokens_t3_pdfbox": $TOTAL_DIFF_TOKENS_T3_PDFBOX,
  "total_diff_tokens_t4_pdfbox": $TOTAL_DIFF_TOKENS_T4_PDFBOX,
  "total_diff_tokens_t3_t4": $TOTAL_DIFF_TOKENS_T3_T4,

  "total_miss_tokens_t3_pdfbox": $TOTAL_MISS_TOKENS_T3_PDFBOX,
  "total_miss_tokens_t4_pdfbox": $TOTAL_MISS_TOKENS_T4_PDFBOX,
  "total_miss_tokens_t3_t4": $TOTAL_MISS_TOKENS_T3_T4,
  "total_miss_tokens_t4_t3": $TOTAL_MISS_TOKENS_T4_T3,

  "spell_error_pdfbox": [$SPELL_ERROR_PDFBOX],
  "spell_error_t3": [$SPELL_ERROR_T3],
  "spell_error_t4": [$SPELL_ERROR_T4],

  "spell_error_count_pdfbox": $SPELL_ERROR_COUNT_PDFBOX,
  "spell_error_count_t3": $SPELL_ERROR_COUNT_T3,
  "spell_error_count_t4": $SPELL_ERROR_COUNT_T4
}
EOF
  )

  printf "$REPORT\n"

  # for each of the diffs, how many lines of diff exist?
  # what is the baseline spelling error rate of the txt list?
  # for each word in the test and baseline, how many are spelling errors?
  # pull all data together in a json report
  # write out json in table format
done
