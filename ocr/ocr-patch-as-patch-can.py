from more_itertools import windowed
from Levenshtein import distance
from math import log
from pprint import pprint as pp

def test():
  txt = "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried."

  ocr = "Nor if the winer of our discontent Ma de glorIous sommer in the is sun of York; And pll the douds that lour'd upon our houw In the deeq dosom of the oCean."

  correct = txt.split(' ')
  wrong = ocr.split(' ')
  patched = patch_list(correct, wrong)

  print('OCR ' + ocr)
  print('PCH ' + ' '.join(patched))
  print('TXT ' + ' '.join(correct))

def patch_list(source=[], target=[], window_size=3):
  windows = windowed(source, window_size)

  pidx = 0
  tidx = 0

  finished = False

  patches = []
  potential = []

  while not finished:
    if len(source) < pidx:
      # end of patch list
      finished = True
      continue

    patch = tuple(source[pidx:pidx+window_size])
    candidate = tuple(target[tidx:tidx+window_size])

    if len(patch) != len(candidate):
      # end of tokens, advance patch, start again from last match
      pidx = tidx = tidx+1
      patch = tuple(source[pidx:pidx+window_size])
      candidate = tuple(target[tidx:tidx+window_size])
      continue

    if patch == candidate:
      # exact match, advance next patch window
      tidx = pidx = pidx+1
      continue


    set_diff = len(set(patch) - set(candidate))
    if set_diff == window_size:
      # too different
      tidx = pidx = pidx+1
      continue

    potential.append((candidate,patch))

    cpre,cword,cpost = [c.lower() for c in candidate]
    ppre,pword,ppost = [p.lower() for p in patch]

    if cword == pword:
      # advance the patch window, compare same candidate window
      pidx = pidx+1
      continue

    word_close_enough = distance(cword, pword) <= 2 # round(log(len(cword)))
    pre_close_enough = distance(cpre, ppre) <= 1
    post_close_enough = distance(cpost, ppost) <= 1


    if word_close_enough and (pre_close_enough and post_close_enough):
      target[tidx+1] = source[pidx+1]
      patches.append((tidx+1,pidx+1))
      continue

    tidx = tidx+1

  return target, patches

def cli():
  import argparse
  parser = argparse.ArgumentParser()
  parser.add_argument('--ocr', help='the ocr tokens file')
  parser.add_argument('--pdf', help='the pdf tokens file')

  args = parser.parse_args()
  ocr = []
  pdf = []
  with open(args.ocr,'r') as o:
    for line in o:
        ocr = list([w.split('|') for w in line.split()])
  with open(args.pdf,'r') as p:
    pdf_txt = p.read().replace('\n', ' ')
    pdf = list([w for w in pdf_txt.split()])
  ocr_tokens = list([o[0] for o in ocr])
  patched, patches = patch_list(pdf, ocr_tokens)
  final = ' '.join(['{}|{}'.format(*i) for i in zip(patched, [o[1] for o in ocr])])
  print(final)

if __name__ == "__main__":
  cli()

