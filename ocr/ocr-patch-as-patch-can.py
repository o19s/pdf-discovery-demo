from more_itertools import windowed
from Levenshtein import distance
from math import log
from pprint import pprint as pp

def test():
  txt = "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried."

  ocr = "Nor if the winer of our discontent Ma de glorIous sommer in the is sun of York; And pll the douds that lour'd upon our houw In the deeq dosom of the oCean."

  l1 = txt.split(' ')

  l2 = ocr.split(' ')
  l3 = ocr.split(' ')

  window_size = 3
  windows = windowed(l1, window_size)

  pidx = 0
  tidx = 0

  finished = False

  patches = []
  potential = []

  while not finished:
    if len(l1) < pidx:
      # end of patch list
      print('FINISHED')
      finished = True
      continue

    patch = tuple(l1[pidx:pidx+window_size])
    candidate = tuple(l2[tidx:tidx+window_size])
    print('COMPARING {}:{}'.format(candidate, patch))

    if len(patch) != len(candidate):
      print('REACHED LAST PATCH {}:{}'.format(candidate, patch))
      # end of tokens, advance patch, start again from last match
      pidx = tidx = tidx+1
      patch = tuple(l1[pidx:pidx+window_size])
      candidate = tuple(l2[tidx:tidx+window_size])
      print('Starting over at {}:{}'.format(candidate, patch))
      continue

    if patch == candidate:
      # exact match, advance next patch window
      print('EXACT {}:{}'.format(candidate, patch))
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
      l2[tidx+1] = l1[pidx+1]
      patches.append((cword,pword))
      print('PATCHED {}:{}'.format(cword, pword))
      continue

    print('MISMATCH {}:{}'.format(candidate, patch))
    tidx = tidx+1


  print('OCR ' + ' '.join(l3))
  print('PCH ' + ' '.join(l2))
  print('TXT ' + ' '.join(l1))
  pp(patches)
  pp(potential)
  # for window in windows:
  #   for i, t in enumerate(l2):
  #     patch_index = i
  #     span = tuple(l2[i:i+window_size])
  #     if span == window:
  #       # advance both
  #       patch_index = patch_index
  #     print('{}:{}'.format(span, window))


if __name__ == "__main__":
  test()
