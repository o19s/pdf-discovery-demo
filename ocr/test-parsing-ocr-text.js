// Test file of parsing the text based HOCR format.
// Run as a console command using NPM: node test-parsing-ocr-text.js

var doc06creditcardspdf_page_x = `
image "/tmp/apache-tika-5853505197654815786.tmp"; bbox 0 0 1224 1584; ppageno 0
    ocr_carea block_1_1 bbox 1059 91 1102 105
     ocr_par ltr par_1_1 bbox 1059 91 1102 105
      ocr_line line_1_1 bbox 1059 91 1102 105; baseline 0 0; x_size 20; x_descenders 5; x_ascenders 5  ocrx_word word_1_1 bbox 1059 91 1102 105; x_wconf 81 eng ltr A109





    ocr_carea block_1_2 bbox 169 114 1102 115
     ocr_par ltr par_1_2 bbox 169 114 1102 115
      ocr_line line_1_2 bbox 169 114 1102 115; baseline 0 0; x_size 0.5; x_descenders -0.25; x_ascenders 0.25  ocrx_word word_1_2 bbox 169 114 1102 115; x_wconf 95 eng ltr





    ocr_carea block_1_3 bbox 170 235 1087 385
     ocr_par ltr par_1_3 bbox 170 235 1087 385
      ocr_line line_1_3 bbox 170 235 1018 275; baseline 0 -6; x_size 40; x_descenders 6; x_ascenders 11  ocrx_word word_1_3 bbox 170 235 291 269; x_wconf 86 eng ltr Credit   ocrx_word word_1_4 bbox 309 235 402 269; x_wconf 89 eng ltr Card   ocrx_word word_1_5 bbox 420 235 656 275; x_wconf 84 eng ltr Disclosures,   ocrx_word word_1_6 bbox 677 235 929 275; x_wconf 84 eng ltr Solicitations,   ocrx_word word_1_7 bbox 950 235 1018 269; x_wconf 85 eng ltr and

      ocr_line line_1_4 bbox 170 288 1087 332; baseline 0 -10; x_size 45; x_descenders 11; x_ascenders 11  ocrx_word word_1_8 bbox 170 288 317 332; x_wconf 85 eng ltr Privacy   ocrx_word word_1_9 bbox 335 288 493 322; x_wconf 89 eng ltr Notices:   ocrx_word word_1_10 bbox 516 288 651 332; x_wconf 85 eng ltr Survey   ocrx_word word_1_11 bbox 669 288 811 322; x_wconf 90 eng ltr Results   ocrx_word word_1_12 bbox 830 288 872 322; x_wconf 89 eng ltr of   ocrx_word word_1_13 bbox 887 288 1087 322; x_wconf 89 eng ltr Consumer

      ocr_line line_1_5 bbox 171 341 677 385; baseline 0 -11; x_size 44; x_descenders 11; x_ascenders 10  ocrx_word word_1_14 bbox 171 341 393 385; x_wconf 87 eng ltr Knowledge   ocrx_word word_1_15 bbox 412 341 481 375; x_wconf 88 eng ltr and   ocrx_word word_1_16 bbox 498 341 677 375; x_wconf 87 eng ltr Behavior





    ocr_carea block_1_4 bbox 169 397 1102 398
     ocr_par ltr par_1_4 bbox 169 397 1102 398
      ocr_line line_1_6 bbox 169 397 1102 398; baseline 0 0; x_size 0.5; x_descenders -0.25; x_ascenders 0.25  ocrx_word word_1_17 bbox 169 397 1102 398; x_wconf 95 eng ltr





    ocr_carea block_1_5 bbox 169 456 617 523
     ocr_par ltr par_1_5 bbox 169 456 617 523
      ocr_line line_1_7 bbox 170 456 617 475; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_18 bbox 170 456 254 471; x_wconf 75 eng ltr ThomasA,   ocrx_word word_1_19 bbox 260 456 322 473; x_wconf 76 eng ltr Durkln,   ocrx_word word_1_20 bbox 328 457 345 475; x_wconf 80 eng ltr of   ocrx_word word_1_21 bbox 349 457 373 471; x_wconf 76 eng ltr the   ocrx_word word_1_22 bbox 377 456 429 471; x_wconf 74 eng ltr Board   ocrx_word word_1_23 bbox 432 457 443 471; x_wconf 70 eng '5   ocrx_word word_1_24 bbox 447 457 517 471; x_wconf 68 eng ltr Division   ocrx_word word_1_25 bbox 522 457 538 475; x_wconf 68 eng 0/   ocrx_word word_1_26 bbox 541 457 604 471; x_wconf 73 eng ltr Resean   ocrx_word word_1_27 bbox 608 457 617 471; x_wconf 81 eng ltr h

      ocr_line line_1_8 bbox 169 480 614 499; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_28 bbox 169 480 201 495; x_wconf 74 eng ltr and   ocrx_word word_1_29 bbox 213 481 291 497; x_wconf 73 eng ltr SlaliSllCS,   ocrx_word word_1_30 bbox 305 481 382 499; x_wconf 66 eng ltr prepared   ocrx_word word_1_31 bbox 394 480 423 495; x_wconf 72 eng ltr this   ocrx_word word_1_32 bbox 436 481 494 495; x_wconf 76 eng ltr article,   ocrx_word word_1_33 bbox 510 480 586 495; x_wconf 76 eng ltr Chmitne   ocrx_word word_1_34 bbox 599 481 614 495; x_wconf 90 eng ltr  N

      ocr_line line_1_9 bbox 169 504 469 523; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_35 bbox 169 505 216 519; x_wconf 72 eng ltr Jones   ocrx_word word_1_36 bbox 221 504 297 523; x_wconf 73 eng ltr provided   ocrx_word word_1_37 bbox 303 504 373 519; x_wconf 68 eng ltr research   ocrx_word word_1_38 bbox 380 505 469 519; x_wconf 70 eng ltr assistance,





    ocr_carea block_1_6 bbox 169 546 618 1379
     ocr_par ltr par_1_6 bbox 169 546 618 709
      ocr_line line_1_10 bbox 169 546 617 565; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_39 bbox 169 546 201 561; x_wconf 93 eng ltr The   ocrx_word word_1_40 bbox 210 546 298 565; x_wconf 77 eng ltr mandatory   ocrx_word word_1_41 bbox 306 546 422 561; x_wconf 72 eng ltr dissemination   ocrx_word word_1_42 bbox 430 546 448 561; x_wconf 83 eng ltr of   ocrx_word word_1_43 bbox 455 549 511 561; x_wconf 89 eng ltr certain   ocrx_word word_1_44 bbox 520 546 617 561; x_wconf 86 eng ltr information

      ocr_line line_1_11 bbox 169 570 618 589; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_45 bbox 169 570 189 589; x_wconf 90 eng ltr by   ocrx_word word_1_46 bbox 198 570 268 585; x_wconf 78 eng ltr ﬁnancial   ocrx_word word_1_47 bbox 277 570 369 585; x_wconf 69 eng ltr institutions   ocrx_word word_1_48 bbox 378 575 390 585; x_wconf 87 eng ltr is   ocrx_word word_1_49 bbox 399 575 407 585; x_wconf 97 eng ltr a   ocrx_word word_1_50 bbox 415 570 444 589; x_wconf 87 eng ltr key   ocrx_word word_1_51 bbox 453 573 504 589; x_wconf 78 eng ltr aspect   ocrx_word word_1_52 bbox 512 570 530 585; x_wconf 90 eng ltr of   ocrx_word word_1_53 bbox 537 575 618 585; x_wconf 83 eng ltr consumer

      ocr_line line_1_12 bbox 169 594 618 613; baseline 0 -4; x_size 21.515648; x_descenders 5.5; x_ascenders 5.5  ocrx_word word_1_54 bbox 169 594 253 613; x_wconf 82 eng ltr protection   ocrx_word word_1_55 bbox 259 594 288 609; x_wconf 87 eng ltr law   ocrx_word word_1_56 bbox 298 595 310 609; x_wconf 91 eng ltr It   ocrx_word word_1_57 bbox 316 594 362 609; x_wconf 79 eng ltr offers   ocrx_word word_1_58 bbox 368 597 399 609; x_wconf 90 eng ltr two   ocrx_word word_1_59 bbox 405 594 491 613; x_wconf 75 eng ltr signiﬁcant   ocrx_word word_1_60 bbox 497 594 588 613; x_wconf 76 eng ltr advantages   ocrx_word word_1_61 bbox 594 594 618 609; x_wconf 91 eng ltr for

      ocr_line line_1_13 bbox 169 618 617 637; baseline 0 -4; x_size 21.515648; x_descenders 5.5; x_ascenders 5.5  ocrx_word word_1_62 bbox 169 623 250 633; x_wconf 80 eng ltr consumer   ocrx_word word_1_63 bbox 261 621 344 637; x_wconf 84 eng ltr protection   ocrx_word word_1_64 bbox 357 618 371 632; x_wconf 92 eng ltr in   ocrx_word word_1_65 bbox 383 618 407 633; x_wconf 87 eng ltr the   ocrx_word word_1_66 bbox 419 618 488 633; x_wconf 76 eng ltr ﬁnancial   ocrx_word word_1_67 bbox 501 623 535 633; x_wconf 87 eng ltr area   ocrx_word word_1_68 bbox 546 623 582 633; x_wconf 91 eng ltr over   ocrx_word word_1_69 bbox 593 618 617 633; x_wconf 86 eng ltr the

      ocr_line line_1_14 bbox 170 642 617 661; baseline -0.002 -4; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_70 bbox 170 642 257 657; x_wconf 79 eng ltr alternative   ocrx_word word_1_71 bbox 270 642 288 657; x_wconf 84 eng ltr of   ocrx_word word_1_72 bbox 300 642 347 657; x_wconf 88 eng ltr direct   ocrx_word word_1_73 bbox 360 645 459 661; x_wconf 74 eng ltr government   ocrx_word word_1_74 bbox 473 642 572 657; x_wconf 86 eng ltr intervention   ocrx_word word_1_75 bbox 587 642 617 657; x_wconf 87 eng ltr into

      ocr_line line_1_15 bbox 169 666 617 698; baseline -0.002 -17; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_76 bbox 169 666 233 685; x_wconf 80 eng ltr product   ocrx_word word_1_77 bbox 238 666 296 685; x_wconf 76 eng ltr pricing   ocrx_word word_1_78 bbox 303 666 332 692; x_wconf 88 eng ltr and   ocrx_word word_1_79 bbox 337 669 402 681; x_wconf 84 eng ltr content.   ocrx_word word_1_80 bbox 409 666 451 683; x_wconf 82 eng ltr First   ocrx_word word_1_81 bbox 458 666 555 681; x_wconf 72 eng ltr information   ocrx_word word_1_82 bbox 561 666 617 698; x_wconf 34 eng ltr discvlor

      ocr_line line_1_16 bbox 170 690 519 709; baseline -0.003 -4; x_size 19; x_descenders 5; x_ascenders 3  ocrx_word word_1_83 bbox 170 695 203 705; x_wconf 86 eng ltr sure   ocrx_word word_1_84 bbox 216 690 228 705; x_wconf 88 eng ltr is   ocrx_word word_1_85 bbox 345 690 381 704; x_wconf 89 eng ltr with   ocrx_word word_1_86 bbox 399 695 402 697; x_wconf 73 eng   _     ocrx_word word_1_87 bbox 430 703 437 709; x_wconf 59 eng ltr  r    ocrx_word word_1_88 bbox 511 695 519 704; x_wconf 90 eng ltr a




     ocr_par ltr par_1_7 bbox 169 714 618 1020
      ocr_line line_1_17 bbox 170 714 617 733; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 3  ocrx_word word_1_89 bbox 170 714 227 728; x_wconf 79 eng ltr market   ocrx_word word_1_90 bbox 233 714 275 728; x_wconf 84 eng ltr force   ocrx_word word_1_91 bbox 282 714 342 733; x_wconf 79 eng ltr already   ocrx_word word_1_92 bbox 349 717 363 728; x_wconf 91 eng ltr at   ocrx_word word_1_93 bbox 369 714 411 728; x_wconf 88 eng ltr work   ocrx_word word_1_94 bbox 418 717 433 728; x_wconf 79 eng ltr to   ocrx_word word_1_95 bbox 439 717 496 733; x_wconf 83 eng ltr protect   ocrx_word word_1_96 bbox 503 719 591 728; x_wconf 62 eng ltr consumers   ocrx_word word_1_97 bbox 598 714 617 733; x_wconf 86 eng ltr by

      ocr_line line_1_18 bbox 170 738 617 757; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_98 bbox 170 738 235 757; x_wconf 76 eng ltr keeping   ocrx_word word_1_99 bbox 241 738 282 757; x_wconf 86 eng ltr price   ocrx_word word_1_100 bbox 289 738 326 752; x_wconf 93 eng ltr rises   ocrx_word word_1_101 bbox 333 738 348 752; x_wconf 92 eng ltr in   ocrx_word word_1_102 bbox 355 738 407 752; x_wconf 67 eng ltr check,   ocrx_word word_1_103 bbox 415 738 483 752; x_wconf 89 eng ltr Because   ocrx_word word_1_104 bbox 490 738 508 752; x_wconf 94 eng ltr of   ocrx_word word_1_105 bbox 513 738 617 757; x_wconf 75 eng ltr competition,

      ocr_line line_1_19 bbox 170 762 618 781; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_106 bbox 170 762 261 776; x_wconf 76 eng ltr institutions   ocrx_word word_1_107 bbox 275 762 334 781; x_wconf 78 eng ltr already   ocrx_word word_1_108 bbox 348 762 386 776; x_wconf 91 eng ltr have   ocrx_word word_1_109 bbox 399 762 482 776; x_wconf 78 eng ltr incentives   ocrx_word word_1_110 bbox 496 764 510 776; x_wconf 90 eng ltr to   ocrx_word word_1_111 bbox 523 762 567 776; x_wconf 91 eng ltr make   ocrx_word word_1_112 bbox 580 762 618 776; x_wconf 83 eng ltr their

      ocr_line line_1_20 bbox 169 786 617 805; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_113 bbox 169 786 240 805; x_wconf 82 eng ltr products   ocrx_word word_1_114 bbox 255 786 315 803; x_wconf 90 eng ltr known,   ocrx_word word_1_115 bbox 330 788 345 800; x_wconf 90 eng ltr to   ocrx_word word_1_116 bbox 359 786 409 800; x_wconf 81 eng ltr reveal   ocrx_word word_1_117 bbox 424 786 502 800; x_wconf 82 eng ltr favorable   ocrx_word word_1_118 bbox 516 790 574 805; x_wconf 81 eng ltr pricing   ocrx_word word_1_119 bbox 589 786 617 800; x_wconf 91 eng ltr and

      ocr_line line_1_21 bbox 169 810 617 829; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_120 bbox 169 810 232 829; x_wconf 83 eng ltr product   ocrx_word word_1_121 bbox 244 810 314 826; x_wconf 85 eng ltr features,   ocrx_word word_1_122 bbox 326 810 355 824; x_wconf 85 eng ltr and   ocrx_word word_1_123 bbox 367 812 382 824; x_wconf 87 eng ltr to   ocrx_word word_1_124 bbox 394 812 430 824; x_wconf 83 eng ltr treat   ocrx_word word_1_125 bbox 441 814 530 824; x_wconf 83 eng ltr consumers   ocrx_word word_1_126 bbox 542 810 585 829; x_wconf 80 eng ltr fairly   ocrx_word word_1_127 bbox 597 810 617 828; x_wconf 92 eng ltr by

      ocr_line line_1_22 bbox 169 834 617 853; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_128 bbox 169 834 235 853; x_wconf 80 eng ltr keeping   ocrx_word word_1_129 bbox 246 834 287 848; x_wconf 85 eng ltr them   ocrx_word word_1_130 bbox 299 834 375 853; x_wconf 79 eng ltr generally   ocrx_word word_1_131 bbox 387 834 462 848; x_wconf 80 eng ltr informed   ocrx_word word_1_132 bbox 474 834 520 848; x_wconf 83 eng ltr about   ocrx_word word_1_133 bbox 531 834 571 848; x_wconf 90 eng ltr what   ocrx_word word_1_134 bbox 583 834 617 852; x_wconf 88 eng ltr they

      ocr_line line_1_23 bbox 170 858 617 872; baseline 0 0; x_size 19.230301; x_descenders 5.2303004; x_ascenders 4  ocrx_word word_1_135 bbox 170 860 209 872; x_wconf 87 eng ltr want   ocrx_word word_1_136 bbox 217 858 246 872; x_wconf 82 eng ltr and   ocrx_word word_1_137 bbox 254 858 293 872; x_wconf 89 eng ltr need   ocrx_word word_1_138 bbox 301 860 316 872; x_wconf 88 eng ltr to   ocrx_word word_1_139 bbox 324 858 369 872; x_wconf 90 eng ltr know   ocrx_word word_1_140 bbox 381 858 430 872; x_wconf 89 eng ltr When   ocrx_word word_1_141 bbox 438 862 446 872; x_wconf 78 eng ltr a   ocrx_word word_1_142 bbox 455 858 525 872; x_wconf 86 eng ltr ﬁnancial   ocrx_word word_1_143 bbox 534 858 617 872; x_wconf 88 eng ltr institution

      ocr_line line_1_24 bbox 169 882 617 900; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 4  ocrx_word word_1_144 bbox 169 882 239 900; x_wconf 86 eng ltr employs   ocrx_word word_1_145 bbox 246 882 288 896; x_wconf 87 eng ltr these   ocrx_word word_1_146 bbox 295 884 377 900; x_wconf 70 eng ltr strategies,   ocrx_word word_1_147 bbox 384 884 395 896; x_wconf 96 eng ltr it   ocrx_word word_1_148 bbox 401 884 479 900; x_wconf 78 eng ltr generates   ocrx_word word_1_149 bbox 486 886 494 896; x_wconf 92 eng ltr a   ocrx_word word_1_150 bbox 500 882 541 900; x_wconf 83 eng ltr good   ocrx_word word_1_151 bbox 547 882 617 896; x_wconf 87 eng ltr business

      ocr_line line_1_25 bbox 169 905 617 924; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 4  ocrx_word word_1_152 bbox 169 908 253 924; x_wconf 77 eng ltr reputation   ocrx_word word_1_153 bbox 261 906 292 920; x_wconf 80 eng ltr that   ocrx_word word_1_154 bbox 299 906 330 920; x_wconf 88 eng ltr Will   ocrx_word word_1_155 bbox 338 906 405 924; x_wconf 87 eng ltr produce   ocrx_word word_1_156 bbox 412 905 481 920; x_wconf 79 eng ltr referrals   ocrx_word word_1_157 bbox 489 906 518 920; x_wconf 91 eng ltr and   ocrx_word word_1_158 bbox 526 908 576 924; x_wconf 86 eng ltr repeat   ocrx_word word_1_159 bbox 584 910 617 920; x_wconf 88 eng ltr cus-

      ocr_line line_1_26 bbox 169 929 617 948; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_160 bbox 169 932 230 944; x_wconf 90 eng ltr tomers,   ocrx_word word_1_161 bbox 240 930 304 944; x_wconf 84 eng ltr Actions   ocrx_word word_1_162 bbox 314 929 345 944; x_wconf 86 eng ltr that   ocrx_word word_1_163 bbox 356 929 397 944; x_wconf 86 eng ltr ﬁrms   ocrx_word word_1_164 bbox 408 934 434 944; x_wconf 90 eng ltr use   ocrx_word word_1_165 bbox 445 932 460 944; x_wconf 94 eng ltr to   ocrx_word word_1_166 bbox 471 929 565 948; x_wconf 86 eng ltr accomplish   ocrx_word word_1_167 bbox 575 929 617 944; x_wconf 86 eng ltr these

      ocr_line line_1_27 bbox 170 953 617 972; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_168 bbox 170 953 212 972; x_wconf 78 eng ltr goals   ocrx_word word_1_169 bbox 222 953 282 968; x_wconf 90 eng ltr include   ocrx_word word_1_170 bbox 292 954 383 972; x_wconf 80 eng ltr advertising   ocrx_word word_1_171 bbox 393 954 431 968; x_wconf 86 eng ltr their   ocrx_word word_1_172 bbox 439 958 488 972; x_wconf 87 eng ltr prices   ocrx_word word_1_173 bbox 498 954 527 968; x_wconf 85 eng ltr and   ocrx_word word_1_174 bbox 536 953 617 972; x_wconf 80 eng ltr supplying

      ocr_line line_1_28 bbox 169 977 617 996; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_175 bbox 169 977 223 992; x_wconf 88 eng ltr clients   ocrx_word word_1_176 bbox 232 978 261 992; x_wconf 91 eng ltr and   ocrx_word word_1_177 bbox 269 977 341 996; x_wconf 86 eng ltr potential   ocrx_word word_1_178 bbox 350 980 433 992; x_wconf 89 eng ltr customers   ocrx_word word_1_179 bbox 442 977 478 992; x_wconf 92 eng ltr with   ocrx_word word_1_180 bbox 487 977 536 992; x_wconf 86 eng ltr useful   ocrx_word word_1_181 bbox 545 977 617 992; x_wconf 91 eng ltr informa-

      ocr_line line_1_29 bbox 169 1001 492 1020; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_182 bbox 169 1004 201 1016; x_wconf 93 eng ltr tion   ocrx_word word_1_183 bbox 208 1001 254 1016; x_wconf 87 eng ltr about   ocrx_word word_1_184 bbox 261 1001 324 1020; x_wconf 88 eng ltr product   ocrx_word word_1_185 bbox 330 1006 379 1020; x_wconf 85 eng ltr prices   ocrx_word word_1_186 bbox 387 1001 416 1016; x_wconf 91 eng ltr and   ocrx_word word_1_187 bbox 423 1001 492 1016; x_wconf 89 eng ltr features,




     ocr_par ltr par_1_8 bbox 169 1025 618 1379
      ocr_line line_1_30 bbox 190 1025 617 1044; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_188 bbox 190 1025 222 1040; x_wconf 87 eng ltr The   ocrx_word word_1_189 bbox 237 1028 344 1044; x_wconf 91 eng ltr requirements   ocrx_word word_1_190 bbox 360 1025 383 1040; x_wconf 88 eng ltr for   ocrx_word word_1_191 bbox 397 1025 489 1040; x_wconf 86 eng ltr disclosures   ocrx_word word_1_192 bbox 504 1025 549 1040; x_wconf 89 eng ltr assist   ocrx_word word_1_193 bbox 563 1025 578 1040; x_wconf 95 eng ltr in   ocrx_word word_1_194 bbox 593 1025 617 1040; x_wconf 88 eng ltr the

      ocr_line line_1_31 bbox 169 1049 617 1068; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_195 bbox 169 1049 285 1064; x_wconf 88 eng ltr dissemination   ocrx_word word_1_196 bbox 295 1049 313 1064; x_wconf 89 eng ltr of   ocrx_word word_1_197 bbox 322 1049 392 1064; x_wconf 85 eng ltr ﬁnancial   ocrx_word word_1_198 bbox 403 1049 500 1064; x_wconf 76 eng ltr information   ocrx_word word_1_199 bbox 510 1049 530 1068; x_wconf 87 eng ltr by   ocrx_word word_1_200 bbox 541 1049 617 1064; x_wconf 40 eng ltr standards

      ocr_line line_1_32 bbox 170 1073 617 1092; baseline 0.002 -5; x_size 21.515648; x_descenders 5.5; x_ascenders 5.5  ocrx_word word_1_201 bbox 170 1073 210 1092; x_wconf 84 eng ltr izing   ocrx_word word_1_202 bbox 219 1076 291 1092; x_wconf 86 eng ltr concepts   ocrx_word word_1_203 bbox 301 1073 330 1088; x_wconf 89 eng ltr and   ocrx_word word_1_204 bbox 339 1073 443 1092; x_wconf 79 eng ltr terminology,   ocrx_word word_1_205 bbox 453 1073 490 1088; x_wconf 91 eng ltr such   ocrx_word word_1_206 bbox 499 1078 515 1088; x_wconf 88 eng ltr as   ocrx_word word_1_207 bbox 525 1073 549 1088; x_wconf 89 eng ltr the   ocrx_word word_1_208 bbox 558 1073 617 1088; x_wconf 85 eng ltr ﬁnance

      ocr_line line_1_33 bbox 169 1097 617 1116; baseline -0.002 -4; x_size 21.515648; x_descenders 5.5; x_ascenders 5.5  ocrx_word word_1_209 bbox 169 1097 224 1116; x_wconf 77 eng ltr charge   ocrx_word word_1_210 bbox 231 1097 260 1112; x_wconf 83 eng ltr and   ocrx_word word_1_211 bbox 268 1097 321 1112; x_wconf 82 eng ltr annual   ocrx_word word_1_212 bbox 330 1100 420 1116; x_wconf 83 eng ltr percentage   ocrx_word word_1_213 bbox 427 1100 457 1112; x_wconf 90 eng ltr rate   ocrx_word word_1_214 bbox 464 1097 512 1112; x_wconf 91 eng ltr under   ocrx_word word_1_215 bbox 519 1097 543 1112; x_wconf 88 eng ltr the   ocrx_word word_1_216 bbox 550 1097 594 1112; x_wconf 86 eng ltr Truth   ocrx_word word_1_217 bbox 603 1102 617 1111; x_wconf 92 eng ltr in

      ocr_line line_1_34 bbox 170 1121 618 1140; baseline 0.002 -5; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_218 bbox 170 1121 238 1140; x_wconf 83 eng ltr Lending   ocrx_word word_1_219 bbox 247 1121 276 1136; x_wconf 89 eng ltr Act   ocrx_word word_1_220 bbox 285 1121 314 1136; x_wconf 87 eng ltr and   ocrx_word word_1_221 bbox 324 1121 348 1136; x_wconf 92 eng ltr the   ocrx_word word_1_222 bbox 358 1121 411 1136; x_wconf 79 eng ltr annual   ocrx_word word_1_223 bbox 421 1124 511 1140; x_wconf 81 eng ltr percentage   ocrx_word word_1_224 bbox 521 1121 562 1140; x_wconf 84 eng ltr yield   ocrx_word word_1_225 bbox 571 1121 618 1136; x_wconf 88 eng ltr under

      ocr_line line_1_35 bbox 170 1145 617 1164; baseline 0.002 -5; x_size 20; x_descenders 5; x_ascenders 4  ocrx_word word_1_226 bbox 170 1145 194 1160; x_wconf 92 eng ltr the   ocrx_word word_1_227 bbox 204 1145 248 1159; x_wconf 91 eng ltr Truth   ocrx_word word_1_228 bbox 259 1145 274 1159; x_wconf 93 eng ltr in   ocrx_word word_1_229 bbox 285 1145 349 1164; x_wconf 84 eng ltr Savings   ocrx_word word_1_230 bbox 359 1145 392 1160; x_wconf 81 eng ltr Act.   ocrx_word word_1_231 bbox 404 1145 444 1160; x_wconf 87 eng ltr Such   ocrx_word word_1_232 bbox 455 1145 529 1160; x_wconf 85 eng ltr standardi   ocrx_word word_1_233 bbox 550 1145 581 1160; x_wconf 85 eng ltr tion   ocrx_word word_1_234 bbox 592 1145 617 1160; x_wconf 41 eng ltr ads

      ocr_line line_1_36 bbox 170 1169 617 1188; baseline 0 -5; x_size 26.32242; x_descenders 5; x_ascenders 7.3224206  ocrx_word word_1_235 bbox 170 1174 225 1183; x_wconf 82 eng ltr vanccs   ocrx_word word_1_236 bbox 240 1169 334 1183; x_wconf 65 eng ltr ctinsunicts'   ocrx_word word_1_237 bbox 350 1169 441 1188; x_wconf 79 eng ltr knowledge   ocrx_word word_1_238 bbox 456 1169 501 1183; x_wconf 80 eng ltr about   ocrx_word word_1_239 bbox 515 1174 574 1188; x_wconf 72 eng ltr pricing   ocrx_word word_1_240 bbox 588 1169 617 1183; x_wconf 66 eng ltr and

      ocr_line line_1_37 bbox 170 1193 617 1212; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_241 bbox 170 1193 234 1207; x_wconf 77 eng ltr features   ocrx_word word_1_242 bbox 248 1193 265 1207; x_wconf 91 eng ltr of   ocrx_word word_1_243 bbox 278 1193 302 1207; x_wconf 88 eng ltr the   ocrx_word word_1_244 bbox 316 1193 385 1207; x_wconf 80 eng ltr ﬁnancial   ocrx_word word_1_245 bbox 399 1193 470 1212; x_wconf 83 eng ltr products   ocrx_word word_1_246 bbox 483 1193 512 1207; x_wconf 88 eng ltr and   ocrx_word word_1_247 bbox 526 1193 617 1207; x_wconf 71 eng ltr institutions

      ocr_line line_1_38 bbox 170 1217 617 1236; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_248 bbox 170 1217 199 1231; x_wconf 89 eng ltr and   ocrx_word word_1_249 bbox 207 1217 261 1231; x_wconf 89 eng ltr lowers   ocrx_word word_1_250 bbox 269 1217 363 1231; x_wconf 73 eng ltr consumers’   ocrx_word word_1_251 bbox 373 1217 471 1231; x_wconf 89 eng ltr transactions   ocrx_word word_1_252 bbox 479 1219 520 1231; x_wconf 84 eng ltr costs   ocrx_word word_1_253 bbox 528 1217 547 1236; x_wconf 88 eng ltr by   ocrx_word word_1_254 bbox 556 1217 617 1236; x_wconf 82 eng ltr making

      ocr_line line_1_39 bbox 170 1241 617 1260; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_255 bbox 170 1241 245 1260; x_wconf 80 eng ltr shopping   ocrx_word word_1_256 bbox 258 1245 309 1255; x_wconf 87 eng ltr easier.   ocrx_word word_1_257 bbox 323 1241 355 1255; x_wconf 88 eng ltr The   ocrx_word word_1_258 bbox 368 1241 438 1255; x_wconf 85 eng ltr standard   ocrx_word word_1_259 bbox 452 1241 506 1255; x_wconf 84 eng ltr format   ocrx_word word_1_260 bbox 519 1241 537 1255; x_wconf 91 eng ltr of   ocrx_word word_1_261 bbox 549 1241 617 1260; x_wconf 82 eng ltr required

      ocr_line line_1_40 bbox 169 1265 617 1284; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_262 bbox 169 1265 261 1279; x_wconf 80 eng ltr disclosures   ocrx_word word_1_263 bbox 273 1265 316 1284; x_wconf 84 eng ltr helps   ocrx_word word_1_264 bbox 327 1265 402 1284; x_wconf 82 eng ltr highlight   ocrx_word word_1_265 bbox 414 1265 438 1279; x_wconf 92 eng ltr the   ocrx_word word_1_266 bbox 449 1265 554 1284; x_wconf 82 eng ltr performance   ocrx_word word_1_267 bbox 565 1265 583 1279; x_wconf 90 eng ltr of   ocrx_word word_1_268 bbox 593 1265 617 1279; x_wconf 90 eng ltr the

      ocr_line line_1_41 bbox 169 1289 617 1308; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_269 bbox 169 1289 202 1303; x_wconf 87 eng ltr best   ocrx_word word_1_270 bbox 210 1289 302 1303; x_wconf 87 eng ltr institutions   ocrx_word word_1_271 bbox 311 1289 339 1303; x_wconf 91 eng ltr and   ocrx_word word_1_272 bbox 347 1293 412 1308; x_wconf 84 eng ltr exposes   ocrx_word word_1_273 bbox 421 1289 445 1303; x_wconf 91 eng ltr the   ocrx_word word_1_274 bbox 454 1289 560 1308; x_wconf 79 eng ltr iiladequaCies   ocrx_word word_1_275 bbox 569 1289 586 1303; x_wconf 83 eng ltr of   ocrx_word word_1_276 bbox 593 1289 617 1303; x_wconf 89 eng ltr the

      ocr_line line_1_42 bbox 169 1313 617 1332; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_277 bbox 169 1317 223 1332; x_wconf 89 eng ltr poorer   ocrx_word word_1_278 bbox 231 1317 272 1327; x_wconf 86 eng ltr ones.   ocrx_word word_1_279 bbox 280 1313 402 1327; x_wconf 87 eng ltr Well-infoimed   ocrx_word word_1_280 bbox 410 1313 483 1332; x_wconf 87 eng ltr shoppers   ocrx_word word_1_281 bbox 491 1313 526 1332; x_wconf 87 eng ltr help   ocrx_word word_1_282 bbox 533 1313 572 1332; x_wconf 89 eng ltr keep   ocrx_word word_1_283 bbox 580 1317 617 1327; x_wconf 91 eng ltr mar-

      ocr_line line_1_43 bbox 169 1336 617 1355; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 4  ocrx_word word_1_284 bbox 169 1337 202 1351; x_wconf 89 eng ltr kets   ocrx_word word_1_285 bbox 211 1339 314 1355; x_wconf 70 eng ltr competitive,   ocrx_word word_1_286 bbox 324 1337 374 1351; x_wconf 88 eng ltr which   ocrx_word word_1_287 bbox 383 1336 447 1351; x_wconf 88 eng ltr beneﬁts   ocrx_word word_1_288 bbox 456 1337 511 1355; x_wconf 88 eng ltr buyers   ocrx_word word_1_289 bbox 521 1337 538 1351; x_wconf 81 eng ltr of   ocrx_word word_1_290 bbox 546 1337 617 1355; x_wconf 88 eng ltr products

      ocr_line line_1_44 bbox 170 1361 617 1379; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 4  ocrx_word word_1_291 bbox 170 1361 199 1375; x_wconf 90 eng ltr and   ocrx_word word_1_292 bbox 214 1365 280 1375; x_wconf 90 eng ltr services   ocrx_word word_1_293 bbox 295 1361 315 1379; x_wconf 88 eng ltr by   ocrx_word word_1_294 bbox 330 1365 425 1379; x_wconf 87 eng ltr minimizing   ocrx_word word_1_295 bbox 441 1361 465 1375; x_wconf 85 eng ltr the   ocrx_word word_1_296 bbox 481 1361 534 1379; x_wconf 89 eng ltr spread   ocrx_word word_1_297 bbox 549 1361 617 1375; x_wconf 90 eng ltr between





    ocr_carea block_1_7 bbox 532 1150 549 1160
     ocr_par ltr par_1_9 bbox 532 1150 549 1160
      ocr_line line_1_45 bbox 532 1150 549 1160; baseline 0 424; x_size 20; x_descenders 5; x_ascenders 5  ocrx_word word_1_298 bbox 532 1150 549 1160; x_wconf 95 eng ltr





    ocr_carea block_1_8 bbox 654 457 1103 806
     ocr_par ltr par_1_10 bbox 654 457 1055 475
      ocr_line line_1_46 bbox 654 457 1055 475; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 4  ocrx_word word_1_299 bbox 654 457 741 475; x_wconf 79 eng ltr producers'   ocrx_word word_1_300 bbox 752 457 841 475; x_wconf 89 eng ltr production   ocrx_word word_1_301 bbox 850 459 891 471; x_wconf 85 eng ltr costs   ocrx_word word_1_302 bbox 900 457 929 471; x_wconf 92 eng ltr and   ocrx_word word_1_303 bbox 938 457 995 471; x_wconf 89 eng ltr market   ocrx_word word_1_304 bbox 1003 461 1044 475; x_wconf 89 eng ltr price   ocrx_word word_1_305 bbox 1052 457 1055 465; x_wconf 91 eng ‘




     ocr_par ltr par_1_11 bbox 654 480 1103 806
      ocr_line line_1_47 bbox 675 480 1102 499; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_306 bbox 675 480 707 495; x_wconf 91 eng ltr The   ocrx_word word_1_307 bbox 719 481 775 495; x_wconf 89 eng ltr second   ocrx_word word_1_308 bbox 787 481 870 499; x_wconf 84 eng ltr advantage   ocrx_word word_1_309 bbox 882 480 899 495; x_wconf 87 eng ltr of   ocrx_word word_1_310 bbox 910 480 1007 495; x_wconf 81 eng ltr information   ocrx_word word_1_311 bbox 1018 480 1102 495; x_wconf 89 eng ltr disclosure

      ocr_line line_1_48 bbox 654 504 1102 523; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_312 bbox 654 509 691 519; x_wconf 88 eng ltr over   ocrx_word word_1_313 bbox 701 504 748 519; x_wconf 92 eng ltr direct   ocrx_word word_1_314 bbox 758 507 857 519; x_wconf 84 eng ltr intervention   ocrx_word word_1_315 bbox 868 504 932 523; x_wconf 88 eng ltr through   ocrx_word word_1_316 bbox 942 505 1029 523; x_wconf 86 eng ltr mandating   ocrx_word word_1_317 bbox 1040 504 1102 523; x_wconf 90 eng ltr speciﬁc

      ocr_line line_1_49 bbox 654 528 1103 547; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_318 bbox 654 529 718 547; x_wconf 90 eng ltr product   ocrx_word word_1_319 bbox 729 533 787 547; x_wconf 82 eng ltr pricing   ocrx_word word_1_320 bbox 798 533 815 543; x_wconf 88 eng ltr or   ocrx_word word_1_321 bbox 826 528 890 543; x_wconf 81 eng ltr features   ocrx_word word_1_322 bbox 902 533 914 543; x_wconf 96 eng ltr is   ocrx_word word_1_323 bbox 926 529 957 543; x_wconf 89 eng ltr that   ocrx_word word_1_324 bbox 968 528 992 543; x_wconf 86 eng ltr the   ocrx_word word_1_325 bbox 1004 531 1103 547; x_wconf 90 eng ltr government

      ocr_line line_1_50 bbox 655 552 1103 571; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_326 bbox 655 552 693 567; x_wconf 92 eng ltr need   ocrx_word word_1_327 bbox 705 555 731 567; x_wconf 88 eng ltr not   ocrx_word word_1_328 bbox 743 552 791 569; x_wconf 91 eng ltr know,   ocrx_word word_1_329 bbox 804 557 821 567; x_wconf 89 eng ltr or   ocrx_word word_1_330 bbox 832 557 902 571; x_wconf 90 eng ltr presume   ocrx_word word_1_331 bbox 914 555 929 567; x_wconf 95 eng ltr to   ocrx_word word_1_332 bbox 941 552 990 569; x_wconf 85 eng ltr know,   ocrx_word word_1_333 bbox 1003 552 1027 567; x_wconf 96 eng ltr the   ocrx_word word_1_334 bbox 1039 552 1103 571; x_wconf 90 eng ltr product

      ocr_line line_1_51 bbox 654 576 1103 595; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_335 bbox 654 576 711 591; x_wconf 84 eng ltr feature   ocrx_word word_1_336 bbox 720 576 816 595; x_wconf 83 eng ltr preferences   ocrx_word word_1_337 bbox 825 576 843 591; x_wconf 93 eng ltr of   ocrx_word word_1_338 bbox 851 576 870 591; x_wconf 97 eng ltr all   ocrx_word word_1_339 bbox 880 581 972 591; x_wconf 86 eng ltr consumers.   ocrx_word word_1_340 bbox 982 576 1022 591; x_wconf 93 eng ltr With   ocrx_word word_1_341 bbox 1031 576 1103 591; x_wconf 82 eng ltr effective

      ocr_line line_1_52 bbox 654 600 1102 619; baseline 0 -4; x_size 21.50518; x_descenders 5.5; x_ascenders 5.5  ocrx_word word_1_342 bbox 654 600 751 617; x_wconf 84 eng ltr disclosures,   ocrx_word word_1_343 bbox 760 605 848 615; x_wconf 80 eng ltr consumers   ocrx_word word_1_344 bbox 856 605 884 615; x_wconf 89 eng ltr can   ocrx_word word_1_345 bbox 892 600 946 615; x_wconf 89 eng ltr decide   ocrx_word word_1_346 bbox 954 600 994 615; x_wconf 89 eng ltr what   ocrx_word word_1_347 bbox 1002 600 1039 615; x_wconf 92 eng ltr their   ocrx_word word_1_348 bbox 1047 600 1102 619; x_wconf 63 eng ltr prefer

      ocr_line line_1_53 bbox 654 624 1103 643; baseline 0 -4; x_size 21.50518; x_descenders 5.5; x_ascenders 5.5  ocrx_word word_1_349 bbox 654 629 699 639; x_wconf 89 eng ltr ences   ocrx_word word_1_350 bbox 709 629 733 639; x_wconf 80 eng ltr are   ocrx_word word_1_351 bbox 743 629 757 638; x_wconf 92 eng ltr in   ocrx_word word_1_352 bbox 767 624 791 639; x_wconf 86 eng ltr the   ocrx_word word_1_353 bbox 800 624 866 639; x_wconf 88 eng ltr tradeoff   ocrx_word word_1_354 bbox 874 624 942 639; x_wconf 81 eng ltr between   ocrx_word word_1_355 bbox 951 624 992 643; x_wconf 87 eng ltr price   ocrx_word word_1_356 bbox 1002 624 1031 639; x_wconf 88 eng ltr and   ocrx_word word_1_357 bbox 1040 624 1103 643; x_wconf 85 eng ltr product

      ocr_line line_1_54 bbox 654 648 1102 667; baseline 0 -4; x_size 21.50518; x_descenders 5.5; x_ascenders 5.5  ocrx_word word_1_358 bbox 654 648 725 665; x_wconf 82 eng ltr features;   ocrx_word word_1_359 bbox 736 648 761 663; x_wconf 87 eng ltr the   ocrx_word word_1_360 bbox 772 653 833 663; x_wconf 71 eng ltr success   ocrx_word word_1_361 bbox 844 648 862 663; x_wconf 90 eng ltr of   ocrx_word word_1_362 bbox 871 648 895 663; x_wconf 90 eng ltr the   ocrx_word word_1_363 bbox 906 648 990 663; x_wconf 83 eng ltr disclosure   ocrx_word word_1_364 bbox 1001 648 1076 667; x_wconf 82 eng ltr approach   ocrx_word word_1_365 bbox 1087 651 1102 663; x_wconf 87 eng ltr to

      ocr_line line_1_55 bbox 654 672 1100 691; baseline 0 -4; x_size 21.50518; x_descenders 5.5; x_ascenders 5.5  ocrx_word word_1_366 bbox 654 677 735 687; x_wconf 78 eng ltr consumer   ocrx_word word_1_367 bbox 742 672 826 691; x_wconf 81 eng ltr protection   ocrx_word word_1_368 bbox 834 672 871 687; x_wconf 77 eng ltr does   ocrx_word word_1_369 bbox 879 675 905 687; x_wconf 81 eng ltr not   ocrx_word word_1_370 bbox 912 672 972 691; x_wconf 83 eng ltr depend   ocrx_word word_1_371 bbox 979 677 999 687; x_wconf 90 eng ltr on   ocrx_word word_1_372 bbox 1007 672 1100 687; x_wconf 60 eng ltr consumers"

      ocr_line line_1_56 bbox 758 696 1102 715; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 3  ocrx_word word_1_373 bbox 758 696 803 715; x_wconf 76 eng ltr being   ocrx_word word_1_374 bbox 811 696 835 710; x_wconf 90 eng ltr the   ocrx_word word_1_375 bbox 851 701 889 711; x_wconf 82 eng ltr ame.   ocrx_word word_1_376 bbox 898 696 912 710; x_wconf 93 eng ltr D   ocrx_word word_1_377 bbox 937 696 951 711; x_wconf 91 eng ltr lo   ocrx_word word_1_378 bbox 957 701 986 711; x_wconf 90 eng ltr ure   ocrx_word word_1_379 bbox 994 699 1102 715; x_wconf 80 eng ltr requirements

      ocr_line line_1_57 bbox 655 720 1102 739; baseline 0 -5; x_size 26.329716; x_descenders 5; x_ascenders 7.3297162  ocrx_word word_1_380 bbox 655 725 689 739; x_wconf 76 eng ltr may   ocrx_word word_1_381 bbox 700 720 732 734; x_wconf 78 eng ltr also   ocrx_word word_1_382 bbox 742 720 761 734; x_wconf 82 eng ltr be   ocrx_word word_1_383 bbox 772 720 801 734; x_wconf 81 eng ltr less   ocrx_word word_1_384 bbox 811 720 860 739; x_wconf 80 eng ltr costly   ocrx_word word_1_385 bbox 871 720 894 734; x_wconf 85 eng ltr for   ocrx_word word_1_386 bbox 904 720 974 734; x_wconf 84 eng ltr ﬁnancial   ocrx_word word_1_387 bbox 985 720 1077 734; x_wconf 74 eng ltr institutions   ocrx_word word_1_388 bbox 1087 722 1102 734; x_wconf 91 eng ltr to

      ocr_line line_1_58 bbox 655 744 1102 763; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_389 bbox 655 744 743 763; x_wconf 90 eng ltr implement   ocrx_word word_1_390 bbox 753 744 782 758; x_wconf 88 eng ltr and   ocrx_word word_1_391 bbox 793 744 814 758; x_wconf 86 eng ltr fot   ocrx_word word_1_392 bbox 826 744 851 758; x_wconf 90 eng ltr the   ocrx_word word_1_393 bbox 861 746 960 763; x_wconf 83 eng ltr government   ocrx_word word_1_394 bbox 970 746 985 758; x_wconf 90 eng ltr to   ocrx_word word_1_395 bbox 995 744 1057 758; x_wconf 86 eng ltr enforce   ocrx_word word_1_396 bbox 1068 744 1102 758; x_wconf 89 eng ltr than

      ocr_line line_1_59 bbox 654 768 1102 787; baseline 0 -5; x_size 19; x_descenders 5; x_ascenders 4  ocrx_word word_1_397 bbox 654 772 735 782; x_wconf 82 eng ltr consumer   ocrx_word word_1_398 bbox 746 768 830 787; x_wconf 89 eng ltr piotection   ocrx_word word_1_399 bbox 842 768 935 787; x_wconf 89 eng ltr approaches   ocrx_word word_1_400 bbox 947 768 977 782; x_wconf 88 eng ltr that   ocrx_word word_1_401 bbox 989 768 1028 782; x_wconf 90 eng ltr limit   ocrx_word word_1_402 bbox 1039 768 1102 787; x_wconf 91 eng ltr product

      ocr_line line_1_60 bbox 655 792 724 806; baseline 0 0; x_size 19.235512; x_descenders 5.2355118; x_ascenders 4  ocrx_word word_1_403 bbox 655 792 724 806; x_wconf 69 eng ltr features,





    ocr_carea block_1_9 bbox 913 696 935 710
     ocr_par ltr par_1_12 bbox 913 696 935 710
      ocr_line line_1_61 bbox 913 696 935 710; baseline 0 874; x_size 20; x_descenders 5; x_ascenders 5  ocrx_word word_1_404 bbox 913 696 935 710; x_wconf 95 eng ltr





    ocr_carea block_1_10 bbox 654 879 1103 1378
     ocr_par ltr par_1_13 bbox 654 879 1103 1378
      ocr_line line_1_62 bbox 672 879 1102 893; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_405 bbox 672 879 675 890; x_wconf 97 eng ltr i   ocrx_word word_1_406 bbox 687 879 763 890; x_wconf 70 eng ltr Roicatolictt   ocrx_word word_1_407 bbox 769 879 798 890; x_wconf 77 eng ltr have   ocrx_word word_1_408 bbox 804 879 865 893; x_wconf 75 eng ltr publishotl   ocrx_word word_1_409 bbox 871 882 877 890; x_wconf 86 eng ltr a   ocrx_word word_1_410 bbox 883 879 948 893; x_wconf 69 eng ltr Stgmﬁcanl   ocrx_word word_1_411 bbox 954 879 984 893; x_wconf 85 eng ltr body   ocrx_word word_1_412 bbox 990 879 1003 890; x_wconf 88 eng ltr oi   ocrx_word word_1_413 bbox 1008 879 1075 890; x_wconf 71 eng ltr thcotctitni   ocrx_word word_1_414 bbox 1080 879 1102 890; x_wconf 73 eng ltr and

      ocr_line line_1_63 bbox 654 897 1102 911; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_415 bbox 654 897 714 911; x_wconf 69 eng ltr cinpincni   ocrx_word word_1_416 bbox 720 897 751 908; x_wconf 73 eng ltr woit   ocrx_word word_1_417 bbox 757 900 772 908; x_wconf 82 eng ltr on   ocrx_word word_1_418 bbox 778 897 796 908; x_wconf 90 eng ltr the   ocrx_word word_1_419 bbox 802 897 851 908; x_wconf 58 eng ltr tenths   ocrx_word word_1_420 bbox 857 897 870 908; x_wconf 87 eng ltr of   ocrx_word word_1_421 bbox 875 897 949 908; x_wconf 72 eng ltr intotmntion   ocrx_word word_1_422 bbox 955 897 977 908; x_wconf 73 eng ltr tintt   ocrx_word word_1_423 bbox 983 897 1046 908; x_wconf 68 eng ltr tlisolotutc   ocrx_word word_1_424 bbox 1056 897 1102 911; x_wconf 79 eng ltr Among

      ocr_line line_1_64 bbox 654 915 1103 929; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_425 bbox 654 915 673 926; x_wconf 78 eng ltr the   ocrx_word word_1_426 bbox 678 917 738 929; x_wconf 75 eng ltr important   ocrx_word word_1_427 bbox 744 915 788 926; x_wconf 77 eng ltr attiolcs   ocrx_word word_1_428 bbox 793 918 812 926; x_wconf 71 eng ltr ato   ocrx_word word_1_429 bbox 816 915 872 929; x_wconf 71 eng ltr George!   ocrx_word word_1_430 bbox 881 915 972 929; x_wconf 71 eng ltr Stiglcrtl9éll,   ocrx_word word_1_431 bbox 979 915 1010 926; x_wconf 69 eng ltr "The   ocrx_word word_1_432 bbox 1016 915 1085 926; x_wconf 72 eng ltr Economics   ocrx_word word_1_433 bbox 1090 915 1103 926; x_wconf 83 eng ltr or

      ocr_line line_1_65 bbox 655 933 1103 947; baseline -0.002 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_434 bbox 655 933 742 945; x_wconf 68 eng ltr inromiation."   ocrx_word word_1_435 bbox 747 933 797 944; x_wconf 73 eng ltr Journal   ocrx_word word_1_436 bbox 802 933 816 947; x_wconf 73 eng (1/   ocrx_word word_1_437 bbox 819 933 874 944; x_wconf 67 eng ltr Political   ocrx_word word_1_438 bbox 879 933 941 947; x_wconf 67 eng ltr Ezrmrmiy,   ocrx_word word_1_439 bbox 948 933 967 944; x_wconf 80 eng ltr vol   ocrx_word word_1_440 bbox 977 933 992 944; x_wconf 73 eng 59   ocrx_word word_1_441 bbox 998 933 1040 946; x_wconf 65 eng ltr (lune),   ocrx_word word_1_442 bbox 1046 936 1062 947; x_wconf 79 eng ltr pp   ocrx_word word_1_443 bbox 1072 933 1103 944; x_wconf 38 eng 213,

      ocr_line line_1_66 bbox 655 951 1101 965; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_444 bbox 655 951 673 963; x_wconf 76 eng 25,   ocrx_word word_1_445 bbox 682 951 723 965; x_wconf 82 eng ltr Phillip   ocrx_word word_1_446 bbox 731 951 776 962; x_wconf 81 eng ltr Nelson   ocrx_word word_1_447 bbox 784 951 829 964; x_wconf 75 eng (1970),   ocrx_word word_1_448 bbox 838 951 922 962; x_wconf 71 eng ltr "lllfom'tauoll   ocrx_word word_1_449 bbox 930 951 952 962; x_wconf 83 eng ltr and   ocrx_word word_1_450 bbox 959 951 1024 962; x_wconf 78 eng ltr Consumct   ocrx_word word_1_451 bbox 1032 951 1101 963; x_wconf 66 eng ltr Behavior,"

      ocr_line line_1_67 bbox 654 969 1102 983; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_452 bbox 654 969 703 980; x_wconf 62 eng ltr [titlrtmi   ocrx_word word_1_453 bbox 711 969 725 983; x_wconf 69 eng ltr of   ocrx_word word_1_454 bbox 731 969 786 980; x_wconf 64 eng ltr Poltltull   ocrx_word word_1_455 bbox 793 969 855 981; x_wconf 63 eng ltr Erminmt,   ocrx_word word_1_456 bbox 864 969 883 980; x_wconf 85 eng ltr vol   ocrx_word word_1_457 bbox 896 969 910 980; x_wconf 68 eng 73   ocrx_word word_1_458 bbox 919 969 1016 983; x_wconf 44 eng ltr (MatchrApnl),   ocrx_word word_1_459 bbox 1024 972 1039 983; x_wconf 88 eng ltr pp   ocrx_word word_1_460 bbox 1052 969 1072 980; x_wconf 74 eng 311   ocrx_word word_1_461 bbox 1091 969 1102 982; x_wconf 84 eng 0,

      ocr_line line_1_68 bbox 654 987 1102 1001; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_462 bbox 654 987 700 1001; x_wconf 68 eng ltr George   ocrx_word word_1_463 bbox 705 987 754 998; x_wconf 80 eng ltr Akcrlof   ocrx_word word_1_464 bbox 759 987 804 1000; x_wconf 65 eng (1970),   ocrx_word word_1_465 bbox 812 987 843 998; x_wconf 73 eng ltr “The   ocrx_word word_1_466 bbox 849 987 894 998; x_wconf 69 eng ltr Matltct   ocrx_word word_1_467 bbox 900 987 918 998; x_wconf 77 eng ltr rot   ocrx_word word_1_468 bbox 923 987 974 998; x_wconf 76 eng ltr Lemons   ocrx_word word_1_469 bbox 984 987 1054 1000; x_wconf 78 eng ltr Qualitatlvt:   ocrx_word word_1_470 bbox 1060 987 1102 998; x_wconf 75 eng ltr Uncer-

      ocr_line line_1_69 bbox 654 1005 1102 1019; baseline 0.002 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_471 bbox 654 1007 690 1019; x_wconf 78 eng ltr tainty   ocrx_word word_1_472 bbox 696 1005 718 1016; x_wconf 83 eng ltr and   ocrx_word word_1_473 bbox 723 1005 742 1016; x_wconf 78 eng ltr tht:   ocrx_word word_1_474 bbox 748 1005 793 1016; x_wconf 76 eng ltr Market   ocrx_word word_1_475 bbox 798 1005 884 1017; x_wconf 65 eng ltr Mechanism,"   ocrx_word word_1_476 bbox 890 1005 952 1019; x_wconf 70 eng ltr Qtlttr/L'rlv   ocrx_word word_1_477 bbox 957 1005 984 1016; x_wconf 69 eng ltr 10w   ocrx_word word_1_478 bbox 987 1005 1007 1016; x_wconf 79 eng ltr mil   ocrx_word word_1_479 bbox 1012 1005 1024 1019; x_wconf 75 eng ltr of   ocrx_word word_1_480 bbox 1029 1005 1102 1017; x_wconf 73 eng ltr Economics.

      ocr_line line_1_70 bbox 654 1023 1102 1037; baseline 0.002 -4; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_481 bbox 654 1023 673 1034; x_wconf 67 eng ltr Vol   ocrx_word word_1_482 bbox 688 1023 702 1034; x_wconf 62 eng 34   ocrx_word word_1_483 bbox 712 1023 771 1037; x_wconf 77 eng ltr (August),   ocrx_word word_1_484 bbox 781 1026 796 1037; x_wconf 85 eng ltr pp   ocrx_word word_1_485 bbox 809 1023 868 1035; x_wconf 44 eng 488500,   ocrx_word word_1_486 bbox 878 1023 929 1034; x_wconf 74 eng ltr Michacl   ocrx_word word_1_487 bbox 938 1023 949 1034; x_wconf 77 eng ltr A   ocrx_word word_1_488 bbox 962 1023 1007 1037; x_wconf 69 eng ltr Spence   ocrx_word word_1_489 bbox 1017 1023 1062 1035; x_wconf 75 eng (1973).   ocrx_word word_1_490 bbox 1073 1023 1102 1034; x_wconf 77 eng ltr “Job

      ocr_line line_1_71 bbox 654 1041 1102 1055; baseline 0.002 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_491 bbox 654 1041 776 1055; x_wconf 69 eng ltr Marketsigiiiiling,"   ocrx_word word_1_492 bbox 782 1041 841 1055; x_wconf 68 eng ltr Qumlwl)   ocrx_word word_1_493 bbox 847 1041 913 1055; x_wconf 65 eng ltr foul/MIN]   ocrx_word word_1_494 bbox 917 1041 990 1053; x_wconf 68 eng ltr ELtI/XmlIILS,   ocrx_word word_1_495 bbox 995 1041 1014 1052; x_wconf 75 eng ltr vol   ocrx_word word_1_496 bbox 1023 1041 1038 1052; x_wconf 65 eng 37   ocrx_word word_1_497 bbox 1043 1041 1102 1055; x_wconf 79 eng ltr (August),

      ocr_line line_1_72 bbox 654 1059 1102 1073; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_498 bbox 654 1062 669 1073; x_wconf 90 eng ltr pp   ocrx_word word_1_499 bbox 680 1059 730 1071; x_wconf 33 eng 355774,   ocrx_word word_1_500 bbox 737 1059 788 1070; x_wconf 81 eng ltr Michael   ocrx_word word_1_501 bbox 795 1059 863 1070; x_wconf 73 eng ltr Rothschild   ocrx_word word_1_502 bbox 870 1059 911 1072; x_wconf 70 eng 11973)   ocrx_word word_1_503 bbox 923 1059 978 1070; x_wconf 78 eng ltr “Models   ocrx_word word_1_504 bbox 984 1059 996 1070; x_wconf 85 eng ltr ot   ocrx_word word_1_505 bbox 1003 1059 1048 1070; x_wconf 79 eng ltr Market   ocrx_word word_1_506 bbox 1054 1059 1102 1073; x_wconf 49 eng ltr Olgam'

      ocr_line line_1_73 bbox 655 1077 1103 1091; baseline 0 -4; x_size 13.213323; x_descenders 3.2133224; x_ascenders 3.3333335  ocrx_word word_1_507 bbox 655 1079 692 1088; x_wconf 66 eng ltr “tion   ocrx_word word_1_508 bbox 700 1077 728 1088; x_wconf 74 eng ltr with   ocrx_word word_1_509 bbox 736 1077 797 1091; x_wconf 77 eng ltr lmpclfect   ocrx_word word_1_510 bbox 805 1077 880 1088; x_wconf 79 eng ltr Information   ocrx_word word_1_511 bbox 892 1077 902 1087; x_wconf 86 eng ltr A   ocrx_word word_1_512 bbox 909 1077 964 1091; x_wconf 56 eng ltr Survey,"   ocrx_word word_1_513 bbox 972 1077 1021 1088; x_wconf 67 eng ltr Ioilmul   ocrx_word word_1_514 bbox 1029 1077 1041 1091; x_wconf 54 eng (3/   ocrx_word word_1_515 bbox 1049 1077 1103 1088; x_wconf 69 eng ltr Polmcul

      ocr_line line_1_74 bbox 654 1094 1102 1109; baseline 0.004 -4; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_516 bbox 654 1095 716 1107; x_wconf 66 eng ltr Eta/twin,   ocrx_word word_1_517 bbox 728 1094 747 1106; x_wconf 69 eng ltr ml   ocrx_word word_1_518 bbox 762 1095 774 1105; x_wconf 62 eng ltr at)   ocrx_word word_1_519 bbox 788 1095 868 1108; x_wconf 58 eng ltr (November),   ocrx_word word_1_520 bbox 879 1098 895 1109; x_wconf 85 eng ltr pp   ocrx_word word_1_521 bbox 912 1095 984 1107; x_wconf 63 eng ltr |Zt£343tlttz   ocrx_word word_1_522 bbox 996 1095 1046 1106; x_wconf 73 eng ltr Howard   ocrx_word word_1_523 bbox 1058 1095 1102 1107; x_wconf 77 eng ltr Beales,

      ocr_line line_1_75 bbox 655 1112 1102 1127; baseline 0 -4; x_size 13.213323; x_descenders 3.2133224; x_ascenders 3.3333335  ocrx_word word_1_524 bbox 655 1113 704 1124; x_wconf 80 eng ltr Richald   ocrx_word word_1_525 bbox 710 1112 769 1125; x_wconf 76 eng ltr Ctnswell,   ocrx_word word_1_526 bbox 776 1113 798 1124; x_wconf 78 eng ltr and   ocrx_word word_1_527 bbox 804 1113 846 1124; x_wconf 70 eng ltr Steven   ocrx_word word_1_528 bbox 853 1112 862 1124; x_wconf 74 eng ltr  C    ocrx_word word_1_529 bbox 881 1113 908 1127; x_wconf 75 eng ltr alop   ocrx_word word_1_530 bbox 914 1112 959 1126; x_wconf 59 eng ltr U93”,   ocrx_word word_1_531 bbox 975 1113 999 1123; x_wconf 86 eng ltr The   ocrx_word word_1_532 bbox 1006 1112 1059 1124; x_wconf 73 eng ltr Efﬁcient   ocrx_word word_1_533 bbox 1065 1113 1102 1127; x_wconf 46 eng ltr Regur

      ocr_line line_1_76 bbox 655 1130 1102 1144; baseline 0 -3; x_size 13.213323; x_descenders 3.2133224; x_ascenders 3.3333335  ocrx_word word_1_534 bbox 655 1131 673 1141; x_wconf 76 eng ltr Intl   ocrx_word word_1_535 bbox 686 1134 690 1141; x_wconf 81 eng ltr i   ocrx_word word_1_536 bbox 698 1130 711 1142; x_wconf 80 eng ltr of   ocrx_word word_1_537 bbox 718 1130 782 1142; x_wconf 82 eng ltr Consumet   ocrx_word word_1_538 bbox 792 1130 870 1143; x_wconf 77 eng ltr lnfnmiahon,   ocrx_word word_1_539 bbox 886 1130 936 1142; x_wconf 69 eng ltr Journal   ocrx_word word_1_540 bbox 944 1131 956 1144; x_wconf 60 eng ltr a!   ocrx_word word_1_541 bbox 963 1131 990 1141; x_wconf 72 eng ltr law   ocrx_word word_1_542 bbox 998 1130 1022 1141; x_wconf 69 eng ltr {17th   ocrx_word word_1_543 bbox 1029 1131 1039 1141; x_wconf 67 eng ltr I"   ocrx_word word_1_544 bbox 1050 1134 1102 1143; x_wconf 66 eng ltr )lXIHHILK,

      ocr_line line_1_77 bbox 654 1148 1032 1163; baseline 0.003 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_545 bbox 654 1148 673 1159; x_wconf 79 eng ltr vol   ocrx_word word_1_546 bbox 683 1148 801 1163; x_wconf 65 eng ltr Z4(|)ecemhei),pp   ocrx_word word_1_547 bbox 809 1148 841 1160; x_wconf 34 eng 4917   ocrx_word word_1_548 bbox 857 1148 929 1163; x_wconf 70 eng ltr 9.]osephl:   ocrx_word word_1_549 bbox 938 1148 1032 1163; x_wconf 67 eng ltr stiglit/(IQttsl,

      ocr_line line_1_78 bbox 655 1166 1102 1181; baseline 0 -4; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_550 bbox 655 1169 678 1177; x_wconf 79 eng ltr [inn   ocrx_word word_1_551 bbox 683 1166 705 1177; x_wconf 61 eng ltr and   ocrx_word word_1_552 bbox 710 1167 773 1177; x_wconf 71 eng ltr Economic   ocrx_word word_1_553 bbox 778 1166 825 1181; x_wconf 67 eng ltr Aimiyti   ocrx_word word_1_554 bbox 850 1166 872 1177; x_wconf 72 eng ltr The   ocrx_word word_1_555 bbox 877 1167 889 1177; x_wconf 70 eng ltr E)   ocrx_word word_1_556 bbox 894 1170 936 1177; x_wconf 69 eng ltr nnnmii   ocrx_word word_1_557 bbox 944 1166 997 1179; x_wconf 71 eng ltr Journal,   ocrx_word word_1_558 bbox 1002 1166 1021 1177; x_wconf 82 eng ltr vol   ocrx_word word_1_559 bbox 1030 1166 1049 1179; x_wconf 60 eng ltr as,   ocrx_word word_1_560 bbox 1054 1166 1102 1181; x_wconf 62 eng ltr supple

      ocr_line line_1_79 bbox 654 1184 1098 1199; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_561 bbox 654 1186 685 1195; x_wconf 79 eng ltr meiit   ocrx_word word_1_562 bbox 696 1184 769 1195; x_wconf 71 eng ltr Cunietence   ocrx_word word_1_563 bbox 776 1185 817 1199; x_wconf 69 eng ltr Papeis   ocrx_word word_1_564 bbox 830 1184 858 1195; x_wconf 67 eng 1985   ocrx_word word_1_565 bbox 866 1184 920 1197; x_wconf 66 eng ltr (Match),   ocrx_word word_1_566 bbox 927 1188 942 1199; x_wconf 84 eng ltr pp   ocrx_word word_1_567 bbox 953 1184 996 1197; x_wconf 43 eng 2141,   ocrx_word word_1_568 bbox 1003 1184 1025 1195; x_wconf 65 eng ltr and   ocrx_word word_1_569 bbox 1032 1184 1078 1195; x_wconf 70 eng ltr Pauline   ocrx_word word_1_570 bbox 1086 1185 1098 1195; x_wconf 94 eng ltr M

      ocr_line line_1_80 bbox 655 1202 1102 1217; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 5  ocrx_word word_1_571 bbox 655 1202 704 1217; x_wconf 81 eng ltr lppoltm   ocrx_word word_1_572 bbox 711 1202 756 1216; x_wconf 63 eng ltr (19m),   ocrx_word word_1_573 bbox 769 1202 796 1213; x_wconf 76 eng ltr ‘l'he   ocrx_word word_1_574 bbox 804 1203 873 1213; x_wconf 67 eng ltr Economics   ocrx_word word_1_575 bbox 880 1202 894 1213; x_wconf 82 eng ltr of   ocrx_word word_1_576 bbox 900 1202 975 1213; x_wconf 70 eng ltr liifotmiitinii   ocrx_word word_1_577 bbox 982 1206 993 1213; x_wconf 90 eng ltr in   ocrx_word word_1_578 bbox 1000 1202 1064 1213; x_wconf 74 eng ltr Cniisiimoi   ocrx_word word_1_579 bbox 1072 1203 1102 1213; x_wconf 39 eng ltr Mare

      ocr_line line_1_81 bbox 654 1220 1102 1231; baseline 0 0; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_580 bbox 654 1220 679 1231; x_wconf 77 eng ltr kets   ocrx_word word_1_581 bbox 689 1220 723 1231; x_wconf 71 eng ltr What   ocrx_word word_1_582 bbox 729 1220 747 1231; x_wconf 77 eng ltr Do   ocrx_word word_1_583 bbox 753 1220 772 1231; x_wconf 74 eng ltr We   ocrx_word word_1_584 bbox 779 1220 824 1231; x_wconf 70 eng ltr Know"   ocrx_word word_1_585 bbox 829 1220 863 1231; x_wconf 84 eng ltr What   ocrx_word word_1_586 bbox 869 1220 888 1231; x_wconf 82 eng ltr Do   ocrx_word word_1_587 bbox 893 1220 913 1231; x_wconf 83 eng ltr We   ocrx_word word_1_588 bbox 919 1220 952 1231; x_wconf 78 eng ltr Need   ocrx_word word_1_589 bbox 958 1222 969 1231; x_wconf 83 eng ltr to   ocrx_word word_1_590 bbox 976 1220 1028 1231; x_wconf 57 eng ltr knotw“   ocrx_word word_1_591 bbox 1035 1224 1046 1231; x_wconf 86 eng ltr in   ocrx_word word_1_592 bbox 1052 1220 1061 1231; x_wconf 91 eng ltr E   ocrx_word word_1_593 bbox 1071 1220 1102 1231; x_wconf 77 eng ltr Scott

      ocr_line line_1_82 bbox 655 1238 1103 1252; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_594 bbox 655 1238 707 1252; x_wconf 72 eng ltr Muynes,   ocrx_word word_1_595 bbox 717 1238 738 1251; x_wconf 70 eng ltr ed,   ocrx_word word_1_596 bbox 748 1238 770 1249; x_wconf 71 eng ltr The   ocrx_word word_1_597 bbox 779 1239 838 1249; x_wconf 57 eng ltr human   ocrx_word word_1_598 bbox 847 1238 861 1252; x_wconf 68 eng 0/   ocrx_word word_1_599 bbox 867 1238 925 1249; x_wconf 61 eng ltr Renard:   ocrx_word word_1_600 bbox 934 1242 945 1249; x_wconf 77 eng ltr in   ocrx_word word_1_601 bbox 954 1238 973 1249; x_wconf 62 eng ltr mi»   ocrx_word word_1_602 bbox 982 1238 1044 1249; x_wconf 58 eng ltr Contain?)   ocrx_word word_1_603 bbox 1055 1239 1103 1249; x_wconf 64 eng ltr Intern!

      ocr_line line_1_83 bbox 655 1256 1103 1271; baseline -0.004 -2; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_604 bbox 655 1256 725 1269; x_wconf 78 eng ltr (Columbia,   ocrx_word word_1_605 bbox 731 1256 756 1267; x_wconf 84 eng ltr MO   ocrx_word word_1_606 bbox 765 1256 827 1267; x_wconf 65 eng ltr Amonoin   ocrx_word word_1_607 bbox 833 1256 882 1267; x_wconf 85 eng ltr Council   ocrx_word word_1_608 bbox 888 1260 903 1267; x_wconf 80 eng ltr on   ocrx_word word_1_609 bbox 908 1256 972 1267; x_wconf 69 eng ltr Coniuinoi   ocrx_word word_1_610 bbox 979 1256 1041 1269; x_wconf 71 eng ltr intoiotts),   ocrx_word word_1_611 bbox 1047 1260 1062 1271; x_wconf 86 eng ltr pp   ocrx_word word_1_612 bbox 1072 1256 1103 1267; x_wconf 33 eng 2357

      ocr_line line_1_84 bbox 654 1274 1102 1289; baseline 0 -4; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_613 bbox 654 1274 669 1285; x_wconf 76 eng 63   ocrx_word word_1_614 bbox 679 1274 741 1289; x_wconf 81 eng ltr impottunt   ocrx_word word_1_615 bbox 747 1276 822 1289; x_wconf 71 eng ltr government   ocrx_word word_1_616 bbox 828 1276 871 1289; x_wconf 67 eng ltr iopottt   ocrx_word word_1_617 bbox 877 1274 923 1285; x_wconf 80 eng ltr include   ocrx_word word_1_618 bbox 929 1274 976 1285; x_wconf 70 eng ltr rotioiil   ocrx_word word_1_619 bbox 981 1274 1017 1285; x_wconf 69 eng ltr Trade   ocrx_word word_1_620 bbox 1023 1274 1102 1285; x_wconf 81 eng ltr Commission

      ocr_line line_1_85 bbox 655 1292 1102 1306; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_621 bbox 655 1292 685 1303; x_wconf 72 eng ltr sun   ocrx_word word_1_622 bbox 690 1292 735 1305; x_wconf 81 eng (1979),   ocrx_word word_1_623 bbox 742 1292 807 1303; x_wconf 66 eng ltr Consumer   ocrx_word word_1_624 bbox 812 1292 887 1306; x_wconf 70 eng ltr Infomtttlmn   ocrx_word word_1_625 bbox 893 1292 953 1303; x_wconf 60 eng ltr chieaict   ocrx_word word_1_626 bbox 959 1292 999 1304; x_wconf 71 eng ltr Pnltcl‘   ocrx_word word_1_627 bbox 1005 1292 1052 1303; x_wconf 62 eng ltr remit   ocrx_word word_1_628 bbox 1058 1292 1102 1305; x_wconf 32 eng ltr twithr

      ocr_line line_1_86 bbox 655 1310 1102 1324; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_629 bbox 655 1312 694 1324; x_wconf 72 eng ltr Ingtun   ocrx_word word_1_630 bbox 706 1310 752 1321; x_wconf 76 eng ltr Federal   ocrx_word word_1_631 bbox 759 1310 795 1321; x_wconf 64 eng ltr Trade   ocrx_word word_1_632 bbox 802 1310 891 1323; x_wconf 68 eng ltr Commission),   ocrx_word word_1_633 bbox 898 1310 920 1321; x_wconf 55 eng ltr and   ocrx_word word_1_634 bbox 927 1310 965 1321; x_wconf 76 eng ltr Bouiil   ocrx_word word_1_635 bbox 972 1310 985 1321; x_wconf 80 eng ltr of   ocrx_word word_1_636 bbox 991 1310 1057 1321; x_wconf 62 eng ltr Governor:   ocrx_word word_1_637 bbox 1065 1310 1078 1321; x_wconf 88 eng ltr of   ocrx_word word_1_638 bbox 1084 1310 1102 1321; x_wconf 77 eng ltr the

      ocr_line line_1_87 bbox 654 1328 1102 1342; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_639 bbox 654 1328 701 1339; x_wconf 85 eng ltr Federal   ocrx_word word_1_640 bbox 707 1328 757 1339; x_wconf 65 eng ltr RcsL‘H’C   ocrx_word word_1_641 bbox 763 1328 809 1342; x_wconf 66 eng ltr System   ocrx_word word_1_642 bbox 815 1328 860 1341; x_wconf 68 eng (1937).   ocrx_word word_1_643 bbox 865 1328 911 1339; x_wconf 62 eng ltr Annual   ocrx_word word_1_644 bbox 916 1328 987 1342; x_wconf 57 eng ltr Pcictumiie   ocrx_word word_1_645 bbox 993 1328 1021 1339; x_wconf 67 eng ltr Rim   ocrx_word word_1_646 bbox 1027 1328 1102 1339; x_wconf 57 eng ltr Dl‘mtmalnk

      ocr_line line_1_88 bbox 655 1346 1102 1360; baseline 0 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_647 bbox 655 1348 678 1357; x_wconf 71 eng ltr (inn   ocrx_word word_1_648 bbox 683 1346 730 1360; x_wconf 62 eng ltr Project   ocrx_word word_1_649 bbox 735 1346 815 1360; x_wconf 81 eng ltr (Washington   ocrx_word word_1_650 bbox 825 1346 863 1357; x_wconf 70 eng ltr Board   ocrx_word word_1_651 bbox 868 1346 881 1357; x_wconf 83 eng ltr or   ocrx_word word_1_652 bbox 886 1346 952 1357; x_wconf 70 eng ltr oovctnois   ocrx_word word_1_653 bbox 958 1346 971 1357; x_wconf 87 eng ltr of   ocrx_word word_1_654 bbox 976 1346 994 1357; x_wconf 69 eng ltr tlio   ocrx_word word_1_655 bbox 1000 1346 1046 1357; x_wconf 70 eng ltr Fctlotil   ocrx_word word_1_656 bbox 1052 1346 1102 1357; x_wconf 74 eng ltr Reserve

      ocr_line line_1_89 bbox 655 1364 705 1378; baseline 0.04 -3; x_size 22.616241; x_descenders 5.5; x_ascenders 5.7054138  ocrx_word word_1_657 bbox 655 1364 705 1378; x_wconf 72 eng ltr System)





    ocr_carea block_1_11 bbox 1075 976 1082 977
     ocr_par ltr par_1_14 bbox 1075 976 1082 977
      ocr_line line_1_90 bbox 1075 976 1082 977; baseline 0 0; x_size 0.5; x_descenders -0.25; x_ascenders 0.25  ocrx_word word_1_658 bbox 1075 976 1082 977; x_wconf 95 eng ltr





    ocr_carea block_1_12 bbox 872 1117 879 1134
     ocr_par ltr par_1_15 bbox 872 1117 879 1134
      ocr_line line_1_91 bbox 872 1117 879 1134; baseline 0 450; x_size 22.5; x_descenders 5.625; x_ascenders 5.625  ocrx_word word_1_659 bbox 872 1117 879 1134; x_wconf 95 eng ltr





    ocr_carea block_1_13 bbox 842 1145 1054 1163
     ocr_par ltr par_1_16 bbox 842 1145 1054 1163
      ocr_line line_1_92 bbox 842 1145 1054 1163; baseline 0 -4; x_size 19.5; x_descenders 5.5; x_ascenders 3  ocrx_word word_1_660 bbox 842 1149 847 1159; x_wconf 95 eng ltr     ocrx_word word_1_661 bbox 850 1148 855 1159; x_wconf 95 eng ltr     ocrx_word word_1_662 bbox 1043 1145 1054 1163; x_wconf 95 eng ltr





    ocr_carea block_1_14 bbox 1052 1148 1102 1159
     ocr_par ltr par_1_17 bbox 1052 1148 1102 1159
      ocr_line line_1_93 bbox 1052 1148 1102 1159; baseline 0 0; x_size 20; x_descenders 5; x_ascenders 5  ocrx_word word_1_663 bbox 1052 1148 1102 1159; x_wconf 47 eng ltr nfm’mnr





    ocr_carea block_1_15 bbox 827 1167 846 1179
     ocr_par ltr par_1_18 bbox 827 1167 846 1179
      ocr_line line_1_94 bbox 827 1167 846 1179; baseline 0 405; x_size 20; x_descenders 5; x_ascenders 5  ocrx_word word_1_664 bbox 827 1167 846 1179; x_wconf 95 eng ltr





    ocr_carea block_1_16 bbox 765 1203 781 1206
     ocr_par ltr par_1_19 bbox 765 1203 781 1206
      ocr_line line_1_95 bbox 765 1203 781 1206; baseline 0 0; x_size 1.5; x_descenders -0.75; x_ascenders 0.75  ocrx_word word_1_665 bbox 765 1203 781 1206; x_wconf 95 eng ltr










 page
 TRUTH IN LENDING ACT AND DISCLOSURES

 The Congress in May 1968 passed the Truth in
Lending Act, the first in a series of federal consumer
protection laws that addressed primarily financial
disclosures.2 This act was designed to protect con-
sumers in credit transactions by requiring clear disclo-
sure of key terms of the credit arrangement and all
credit costs. The law was implemented in 1969 by the
Federal Reserve Board through Regulation Z, which
prescribes uniform methods for computing the cost of
credit, for disclosing credit terms, and for resolving
errors on certain types of credit accounts. In 1976, the
Congress amended the act to cover consumer leasing,
and the Federal Reserve implemented Regulation M,
which covers the rules of all consumer leasing trans-
actions and includes disclosure of leasing terms.

 Credit cards are the most widely used method of
generating consumer credit. The credit card industry
estimates that more than 1 billion credit cards were in
the hands of customers in the United States at the end
of 2004.3 When they use their cards, consumers
receive monthly account statements that contain dis-
closures about credit use, costs, and obligations for
payments. Elsewhere on the monthly statements,
consumers receive disclosures concerning such items
as grace periods, membership fees, minimum finance
charges, and procedures for questioning and resolving
billing errors. In addition, consumers frequently re-
ceive mailed solicitations for new accounts, and these
mailings carry disclosures. In recent years, consumers
have also begun receiving privacy notices from their
financial institutions, and these notices contain disclo-
sures outlining the institutions’ privacy policies and
information on how customers can ‘‘opt out’’ of
certain kinds of information sharing among institu-
tions.

 The content, format, and number of disclosures
have evolved and changed since passage of the Truth
in Lending Act.4 As these mandatory disclosures have

 taken their place in the financial marketplace and as
consumer financial services have expanded and
evolved, researchers and other observers have been
interested in whether consumers use the disclosures
they receive and, if so, how they use them. One way
to examine consumer knowledge and use of the
disclosures is through surveys. For this reason, the
Federal Reserve Board has conducted and analyzed
targeted, nationally representative consumer surveys
in this area since a before-and-after study of the
original implementation of the Truth in Lending Act.5

 Nationally representative surveys provide informa-
tion about consumers’ impressions and experiences to
supplement institutional knowledge from public com-
ments generated through the regulatory process. Tar-
geted consumer surveys help reduce the need to rely
unduly on opinions of interested parties or anecdotal

 2. Other statutes that focus on financial disclosure are the Real
Estate Settlement Procedures Act (1974), the Consumer Leasing Act
(1976), and the Truth in Savings Act (1991). The main intent of these
laws is to protect consumers by the mandatory disclosure of certain
information. Other consumer protection laws also contain important
requirements for disclosures, though they are not primarily disclosure
statutes; examples include the Fair Credit Reporting Act (1971), the
Equal Credit Opportunity Act (1974), and the Electronic Fund Trans-
fer Act (1978).

 3. Thomson Financial Media (2005), Card Industry Directory, 17th
ed. (New York: Thomson Financial Media), p. 16.

 4. Various recent legislative and regulatory initiatives concerning
credit cards have continued to underscore interest in what consumers
know about their accounts, how they use disclosure information, what
they think is important in the disclosures, and what information they

 want to receive. In the legislative area, the Fair and Accurate Credit
Transactions (FACT) Act of 2003, which amended the Fair Credit
Reporting Act of 1971, provided for additional disclosures to consum-
ers about how they could more easily take their names off solicitation
lists for new or additional credit cards, a removal process sometimes
also referred to as opting out. This act also required the Federal
Reserve Board to undertake a study of credit card solicitations, which
the Board completed in December 2004. In April 2005, the Bank-
ruptcy Abuse Prevention and Consumer Protection Act mandated new
provisions for the Truth in Lending Act concerning open-end con-
sumer credit, and it required further Board studies of consumers and
their credit.

 On the regulatory front, in December 2004 the Federal Reserve
Board began formal review and updating of Regulation Z, the rule that
implements Truth in Lending. The first step in the review process was
an Advance Notice of Proposed Rulemaking (ANPR), which asked for
comments on a lengthy list of questions about open-end consumer
credit. The full review process will take some time and will likely raise
many additional questions about how well consumers understand
credit products and how they use them, including credit cards. In
October 2005, the Federal Reserve reopened the ANPR comment
period, asking for public comment on issues raised by Truth in
Lending Act amendments in the bankruptcy reform legislation that
year. Interagency initiatives to revise privacy notification rules for
financial accounts, including credit card accounts, are also under way.
In each of these efforts, what consumers know and want to know have
been important questions.

 5. Robert P. Shay and Milton P. Schober (1973), Consumer Aware-
ness of Annual Percentage Rates of Charge in Consumer Installment
Credit: Before and After Truth in Lending Became Effective, vol. 1.:
Technical Studies of the National Commission on Consumer Finance
(Washington: Government Printing Office). For later survey results,
refer to Thomas A. Durkin and Gregory E. Elliehausen (1978), The
1977 Consumer Credit Survey (Washington: Board of Governors of
the Federal Reserve System); Anthony W. Cyrnak and Glenn B.
Canner (1986), ‘‘Consumer Experiences with Credit Insurance: Some
New Evidence,’’ Federal Reserve Bank of San Francisco Economic
Review (Summer), pp. 5–20; Gregory E. Elliehausen and Barbara R.
Lowrey (1997), The Cost of Implementing Consumer Financial Regu-
lations: An Analysis of Experience with the Truth in Savings Act, Staff
Study 170 (Washington: Board of Governors of the Federal Reserve
System); Thomas A. Durkin (2000), ‘‘Credit Cards: Use and Con-
sumer Attitudes, 1970–2000,’’ Federal Reserve Bulletin, vol. 86
(September), pp. 623–34; and Thomas A. Durkin (2002), ‘‘Consumers
and Credit Disclosures: Credit Cards and Credit Insurance,’’ Federal
Reserve Bulletin, vol. 88 (April), pp. 201–13.

 A110 Federal Reserve Bulletin h 2006

 ocr








`


// 129bearstearnsacquisitionloan.pdf
var text = `

  date 2009-02-18T20:21:54Z
  pdf:PDFVersion 1.4
  pdf:docinfo:title Report Pursuant to Section 129 of the Emergency Economic Stabilization Act of 2008: Loan To Facilitate the Acquisition of The Bear Stearns Companies, Inc. by JPMorgan Chase & Co.
  stream_content_type application/pdf
  access_permission:modify_annotations true
  access_permission:can_print_degraded true
  dc:creator Federal Reserve Board
  dcterms:created 2009-02-18T15:02:09Z
  Last-Modified 2009-02-18T20:21:54Z
  dcterms:modified 2009-02-18T20:21:54Z
  dc:format application/pdf; version=1.4
  xmpMM:DocumentID uuid:de6cc024-2be3-4546-a87c-cb2f9360f596
  Last-Save-Date 2009-02-18T20:21:54Z
  access_permission:fill_in_form true
  pdf:docinfo:modified 2009-02-18T20:21:54Z
  stream_name 129bearstearnsacquisitionloan.pdf
  meta:save-date 2009-02-18T20:21:54Z
  pdf:encrypted false
  dc:title Report Pursuant to Section 129 of the Emergency Economic Stabilization Act of 2008: Loan To Facilitate the Acquisition of The Bear Stearns Companies, Inc. by JPMorgan Chase & Co.
  modified 2009-02-18T20:21:54Z
  Content-Type application/pdf
  stream_size 83495
  pdf:docinfo:creator Federal Reserve Board
  X-Parsed-By org.apache.tika.parser.DefaultParser
  X-Parsed-By org.apache.tika.parser.pdf.PDFParser
  X-Parsed-By class org.apache.tika.parser.ocr.TesseractOCRParser
  creator Federal Reserve Board
  meta:author Federal Reserve Board
  meta:creation-date 2009-02-18T15:02:09Z
  stream_source_info myfile
  created Wed Feb 18 15:02:09 UTC 2009
  access_permission:extract_for_accessibility true
  access_permission:assemble_document true
  xmpTPg:NPages 7
  Creation-Date 2009-02-18T15:02:09Z
  access_permission:extract_content true
  access_permission:can_print true
  Author Federal Reserve Board
  producer ABBYY FineReader 8.0 Professional Edition
  access_permission:can_modify true
  pdf:docinfo:producer ABBYY FineReader 8.0 Professional Edition
  pdf:docinfo:created 2009-02-18T15:02:09Z
  Report Pursuant to Section 129 of the Emergency Economic Stabilization Act of 2008: Loan To Facilitate the Acquisition of The Bear Stearns Companies, Inc. by JPMorgan Chase & Co.

   page
  Report Pursuant to Section 129 of the
 Emergency Economic Stabilization Act of 2008:

  Loan To Facilitate the Acquisition of The Bear Stearns
 Companies, Inc. by JPMorgan Chase & Co.

  Overview

  On Sunday, March 16, 2008. the Board of Governors of the Federal
 Reserve System (Board), with the support of the Secretary of the Treasury
 and by unanimous vote of its five members, authorized under section 13(3)
 of the Federal Reserve Act (12 U.S.C. § 343) the Federal Reserve Bank of
 New York (FRBNY) to make a non-recourse loan to a limited liability
 company (Maiden Lane LLC (“Maiden Lane”)) that would acquire $30
 billion of identified, less liquid assets of The Bear Stearns Companies, Inc.
 (Bear Stearns). The loan would be repaid from the proceeds of the orderly
 disposition of these assets over time. The purpose of the loan was to
 facilitate the acquisition by JPMorgan Chase & Co. (JPMC) of Bear Stearns,
 which at the time was facing severe liquidity pressure that threatened to
 cause the default and bankruptcy of the company, with resulting risk to
 significantly stressed financial markets. The credit is secured by all of the
 assets acquired by Maiden Lane and by a subordinated loan of $1.1 billion
 from JPMC to Maiden Lane that would absorb any initial losses on the
 assets by that amount.

  Background

  In March 2008, Bear Stearns was one of the largest securities firms in
 the country. As of February 29, 2008, Bear Stearns reported total
 consolidated assets of approximately $399 billion. Bear Stearns engaged in
 a broad range of activities, including investment banking, securities and
 derivatives trading and clearing, brokerage services, and originating and
 securitizing commercial and residential mortgage loans. As a result of these
 activities, Bear Stearns maintained a large portfolio of mortgage-related
 securities and other debt instruments. Like most large securities firms, the
 company heavily financed itself in the short-term securities repurchase
 market.

  ocr







    ocr_page page_1 image "/tmp/apache-tika-64011249295012294.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 287 150 939 273
      ocr_par ltr par_1_1 bbox 287 150 939 273
       ocr_line line_1_1 bbox 390 150 836 176; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_1 bbox 390 151 470 176; x_wconf 87 eng ltr Report   ocrx_word word_1_2 bbox 480 151 587 171; x_wconf 82 eng ltr Pursuant   ocrx_word word_1_3 bbox 596 152 618 171; x_wconf 91 eng ltr to   ocrx_word word_1_4 bbox 627 150 711 171; x_wconf 87 eng ltr Section   ocrx_word word_1_5 bbox 722 151 761 171; x_wconf 86 eng 129   ocrx_word word_1_6 bbox 770 150 791 171; x_wconf 91 eng ltr of   ocrx_word word_1_7 bbox 800 150 836 171; x_wconf 87 eng ltr the

       ocr_line line_1_2 bbox 329 182 895 208; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_8 bbox 329 183 460 208; x_wconf 85 eng ltr Emergency   ocrx_word word_1_9 bbox 472 182 586 202; x_wconf 86 eng ltr Economic   ocrx_word word_1_10 bbox 596 182 742 202; x_wconf 86 eng ltr Stabilization   ocrx_word word_1_11 bbox 753 183 794 202; x_wconf 89 eng ltr Act   ocrx_word word_1_12 bbox 802 182 823 202; x_wconf 93 eng ltr of   ocrx_word word_1_13 bbox 833 183 895 202; x_wconf 93 eng 2008:

       ocr_line line_1_3 bbox 287 214 939 241; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_14 bbox 287 215 344 235; x_wconf 90 eng ltr Loan   ocrx_word word_1_15 bbox 354 215 385 235; x_wconf 88 eng ltr To   ocrx_word word_1_16 bbox 396 214 503 235; x_wconf 84 eng ltr Facilitate   ocrx_word word_1_17 bbox 513 214 548 235; x_wconf 86 eng ltr the   ocrx_word word_1_18 bbox 557 214 691 241; x_wconf 85 eng ltr Acquisition   ocrx_word word_1_19 bbox 702 214 723 235; x_wconf 91 eng ltr of   ocrx_word word_1_20 bbox 732 214 776 235; x_wconf 92 eng ltr The   ocrx_word word_1_21 bbox 786 215 841 235; x_wconf 88 eng ltr Bear   ocrx_word word_1_22 bbox 851 215 939 235; x_wconf 83 eng ltr Stearns

       ocr_line line_1_4 bbox 352 247 872 273; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_23 bbox 352 247 489 273; x_wconf 71 eng ltr Companies,   ocrx_word word_1_24 bbox 502 248 542 267; x_wconf 92 eng ltr Inc.   ocrx_word word_1_25 bbox 553 247 580 273; x_wconf 88 eng ltr by   ocrx_word word_1_26 bbox 588 248 712 273; x_wconf 83 eng ltr JPMorgan   ocrx_word word_1_27 bbox 723 247 793 267; x_wconf 90 eng ltr Chase   ocrx_word word_1_28 bbox 803 248 825 267; x_wconf 81 eng  &    ocrx_word word_1_29 bbox 833 247 872 267; x_wconf 89 eng ltr Co.





     ocr_carea block_1_2 bbox 181 343 294 364
      ocr_par ltr par_1_2 bbox 181 343 294 364
       ocr_line line_1_5 bbox 181 343 294 364; baseline -0.009 0; x_size 25.32258; x_descenders 5.3225803; x_ascenders 5  ocrx_word word_1_30 bbox 181 343 294 364; x_wconf 87 eng ltr Overview





     ocr_carea block_1_3 bbox 180 407 1038 916
      ocr_par ltr par_1_3 bbox 180 407 1038 916
       ocr_line line_1_6 bbox 253 407 1009 433; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_31 bbox 253 408 284 428; x_wconf 96 eng ltr On   ocrx_word word_1_32 bbox 294 407 382 433; x_wconf 84 eng ltr Sunday,   ocrx_word word_1_33 bbox 394 407 462 428; x_wconf 90 eng ltr March   ocrx_word word_1_34 bbox 473 408 505 431; x_wconf 87 eng 16,   ocrx_word word_1_35 bbox 514 408 576 428; x_wconf 88 eng 2008.   ocrx_word word_1_36 bbox 583 407 616 428; x_wconf 85 eng ltr the   ocrx_word word_1_37 bbox 626 407 690 428; x_wconf 90 eng ltr Board   ocrx_word word_1_38 bbox 701 407 721 428; x_wconf 83 eng ltr of   ocrx_word word_1_39 bbox 731 408 847 428; x_wconf 86 eng ltr Governors   ocrx_word word_1_40 bbox 856 407 877 428; x_wconf 92 eng ltr of   ocrx_word word_1_41 bbox 886 407 919 428; x_wconf 89 eng ltr the   ocrx_word word_1_42 bbox 930 407 1009 428; x_wconf 87 eng ltr Federal

       ocr_line line_1_7 bbox 182 439 1011 465; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_43 bbox 182 440 269 460; x_wconf 88 eng ltr Reserve   ocrx_word word_1_44 bbox 278 440 357 465; x_wconf 85 eng ltr System   ocrx_word word_1_45 bbox 368 439 460 465; x_wconf 88 eng ltr (Board),   ocrx_word word_1_46 bbox 468 439 515 460; x_wconf 84 eng ltr with   ocrx_word word_1_47 bbox 525 439 558 460; x_wconf 89 eng ltr the   ocrx_word word_1_48 bbox 566 441 648 465; x_wconf 88 eng ltr support   ocrx_word word_1_49 bbox 658 439 678 460; x_wconf 88 eng ltr of   ocrx_word word_1_50 bbox 687 439 720 460; x_wconf 89 eng ltr the   ocrx_word word_1_51 bbox 729 440 832 465; x_wconf 88 eng ltr Secretary   ocrx_word word_1_52 bbox 842 439 862 460; x_wconf 89 eng ltr of   ocrx_word word_1_53 bbox 871 439 904 460; x_wconf 87 eng ltr the   ocrx_word word_1_54 bbox 914 440 1011 465; x_wconf 88 eng ltr Treasury

       ocr_line line_1_8 bbox 181 471 1020 497; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_55 bbox 181 471 218 492; x_wconf 89 eng ltr and   ocrx_word word_1_56 bbox 229 471 255 497; x_wconf 95 eng ltr by   ocrx_word word_1_57 bbox 264 471 384 492; x_wconf 89 eng ltr unanimous   ocrx_word word_1_58 bbox 392 473 439 492; x_wconf 87 eng ltr vote   ocrx_word word_1_59 bbox 448 471 469 492; x_wconf 91 eng ltr of   ocrx_word word_1_60 bbox 480 471 504 492; x_wconf 93 eng ltr its   ocrx_word word_1_61 bbox 512 471 552 492; x_wconf 91 eng ltr five   ocrx_word word_1_62 bbox 563 471 670 495; x_wconf 90 eng ltr members,   ocrx_word word_1_63 bbox 679 471 793 492; x_wconf 89 eng ltr authorized   ocrx_word word_1_64 bbox 805 471 866 492; x_wconf 91 eng ltr under   ocrx_word word_1_65 bbox 875 471 951 492; x_wconf 85 eng ltr section   ocrx_word word_1_66 bbox 963 471 1020 497; x_wconf 87 eng 13(3)

       ocr_line line_1_9 bbox 181 503 1009 530; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_67 bbox 181 503 202 524; x_wconf 91 eng ltr of   ocrx_word word_1_68 bbox 211 503 243 524; x_wconf 91 eng ltr the   ocrx_word word_1_69 bbox 253 503 332 524; x_wconf 88 eng ltr Federal   ocrx_word word_1_70 bbox 345 504 431 524; x_wconf 83 eng ltr Reserve   ocrx_word word_1_71 bbox 440 504 479 524; x_wconf 88 eng ltr Act   ocrx_word word_1_72 bbox 489 503 523 530; x_wconf 91 eng (12   ocrx_word word_1_73 bbox 533 504 606 524; x_wconf 84 eng ltr U.S.C.   ocrx_word word_1_74 bbox 615 503 626 526; x_wconf 81 eng §   ocrx_word word_1_75 bbox 635 503 684 530; x_wconf 86 eng 343)   ocrx_word word_1_76 bbox 693 503 726 524; x_wconf 88 eng ltr the   ocrx_word word_1_77 bbox 736 503 815 524; x_wconf 86 eng ltr Federal   ocrx_word word_1_78 bbox 827 504 914 524; x_wconf 87 eng ltr Reserve   ocrx_word word_1_79 bbox 925 503 980 524; x_wconf 88 eng ltr Bank   ocrx_word word_1_80 bbox 988 503 1009 524; x_wconf 91 eng ltr of

       ocr_line line_1_10 bbox 182 536 969 562; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_81 bbox 182 537 232 556; x_wconf 91 eng ltr New   ocrx_word word_1_82 bbox 241 536 296 556; x_wconf 94 eng ltr York   ocrx_word word_1_83 bbox 306 536 414 562; x_wconf 87 eng ltr (FRBNY)   ocrx_word word_1_84 bbox 424 538 444 556; x_wconf 93 eng ltr to   ocrx_word word_1_85 bbox 454 536 511 556; x_wconf 90 eng ltr make   ocrx_word word_1_86 bbox 520 541 532 556; x_wconf 92 eng ltr a   ocrx_word word_1_87 bbox 541 541 683 556; x_wconf 91 eng ltr non-recourse   ocrx_word word_1_88 bbox 695 536 738 556; x_wconf 87 eng ltr loan   ocrx_word word_1_89 bbox 748 538 768 556; x_wconf 93 eng ltr to   ocrx_word word_1_90 bbox 777 541 788 556; x_wconf 94 eng ltr a   ocrx_word word_1_91 bbox 798 536 872 556; x_wconf 91 eng ltr limited   ocrx_word word_1_92 bbox 885 536 969 562; x_wconf 91 eng ltr liability

       ocr_line line_1_11 bbox 181 567 980 594; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_93 bbox 181 573 281 594; x_wconf 91 eng ltr company   ocrx_word word_1_94 bbox 291 568 382 594; x_wconf 88 eng ltr (Maiden   ocrx_word word_1_95 bbox 394 569 446 588; x_wconf 94 eng ltr Lane   ocrx_word word_1_96 bbox 457 568 506 588; x_wconf 87 eng ltr LLC   ocrx_word word_1_97 bbox 516 568 619 594; x_wconf 91 eng ltr (”Maiden   ocrx_word word_1_98 bbox 631 568 714 594; x_wconf 93 eng ltr Lane”))   ocrx_word word_1_99 bbox 723 568 764 588; x_wconf 91 eng ltr that   ocrx_word word_1_100 bbox 772 568 839 588; x_wconf 91 eng ltr would   ocrx_word word_1_101 bbox 849 568 930 594; x_wconf 88 eng ltr acquire   ocrx_word word_1_102 bbox 939 567 980 590; x_wconf 82 eng $30

       ocr_line line_1_12 bbox 182 600 1017 626; baseline 0.001 -6; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_103 bbox 182 600 250 621; x_wconf 88 eng ltr billion   ocrx_word word_1_104 bbox 261 600 282 621; x_wconf 92 eng ltr of   ocrx_word word_1_105 bbox 293 600 400 624; x_wconf 91 eng ltr identified,   ocrx_word word_1_106 bbox 414 600 453 621; x_wconf 87 eng ltr less   ocrx_word word_1_107 bbox 463 600 523 626; x_wconf 91 eng ltr liquid   ocrx_word word_1_108 bbox 534 602 597 621; x_wconf 89 eng ltr assets   ocrx_word word_1_109 bbox 606 600 627 621; x_wconf 94 eng ltr of   ocrx_word word_1_110 bbox 636 600 678 621; x_wconf 87 eng ltr The   ocrx_word word_1_111 bbox 688 601 737 621; x_wconf 91 eng ltr Bear   ocrx_word word_1_112 bbox 747 601 827 621; x_wconf 87 eng ltr Stearns   ocrx_word word_1_113 bbox 836 600 966 626; x_wconf 74 eng ltr Companies,   ocrx_word word_1_114 bbox 978 601 1017 621; x_wconf 90 eng ltr Inc.

       ocr_line line_1_13 bbox 182 632 1016 658; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_115 bbox 182 632 241 658; x_wconf 87 eng ltr (Bear   ocrx_word word_1_116 bbox 250 632 347 658; x_wconf 88 eng ltr Stearns).   ocrx_word word_1_117 bbox 362 632 404 653; x_wconf 93 eng ltr The   ocrx_word word_1_118 bbox 415 632 458 653; x_wconf 92 eng ltr loan   ocrx_word word_1_119 bbox 468 632 535 653; x_wconf 88 eng ltr would   ocrx_word word_1_120 bbox 546 632 570 653; x_wconf 90 eng ltr be   ocrx_word word_1_121 bbox 580 632 645 658; x_wconf 89 eng ltr repaid   ocrx_word word_1_122 bbox 656 632 705 653; x_wconf 92 eng ltr from   ocrx_word word_1_123 bbox 717 632 750 653; x_wconf 90 eng ltr the   ocrx_word word_1_124 bbox 759 632 856 658; x_wconf 90 eng ltr proceeds   ocrx_word word_1_125 bbox 865 632 886 653; x_wconf 90 eng ltr of   ocrx_word word_1_126 bbox 895 632 928 653; x_wconf 89 eng ltr the   ocrx_word word_1_127 bbox 937 632 1016 658; x_wconf 91 eng ltr orderly

       ocr_line line_1_14 bbox 181 664 949 690; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_128 bbox 181 664 300 690; x_wconf 89 eng ltr disposition   ocrx_word word_1_129 bbox 311 664 331 685; x_wconf 87 eng ltr of   ocrx_word word_1_130 bbox 341 664 397 685; x_wconf 90 eng ltr these   ocrx_word word_1_131 bbox 405 666 469 685; x_wconf 88 eng ltr assets   ocrx_word word_1_132 bbox 478 669 525 685; x_wconf 91 eng ltr over   ocrx_word word_1_133 bbox 534 664 590 685; x_wconf 93 eng ltr time.   ocrx_word word_1_134 bbox 605 664 647 685; x_wconf 94 eng ltr The   ocrx_word word_1_135 bbox 657 669 742 690; x_wconf 91 eng ltr purpose   ocrx_word word_1_136 bbox 752 664 772 685; x_wconf 92 eng ltr of   ocrx_word word_1_137 bbox 781 664 814 685; x_wconf 91 eng ltr the   ocrx_word word_1_138 bbox 824 664 868 685; x_wconf 90 eng ltr loan   ocrx_word word_1_139 bbox 877 669 920 685; x_wconf 91 eng ltr was   ocrx_word word_1_140 bbox 928 666 949 685; x_wconf 93 eng ltr to

       ocr_line line_1_15 bbox 180 696 1038 723; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_141 bbox 180 696 275 717; x_wconf 89 eng ltr facilitate   ocrx_word word_1_142 bbox 285 696 318 717; x_wconf 92 eng ltr the   ocrx_word word_1_143 bbox 327 696 446 723; x_wconf 89 eng ltr acquisition   ocrx_word word_1_144 bbox 458 696 483 723; x_wconf 89 eng ltr by   ocrx_word word_1_145 bbox 491 697 603 723; x_wconf 82 eng ltr JPMorgan   ocrx_word word_1_146 bbox 614 696 680 717; x_wconf 89 eng ltr Chase   ocrx_word word_1_147 bbox 689 697 709 717; x_wconf 83 eng  &    ocrx_word word_1_148 bbox 718 697 756 717; x_wconf 87 eng ltr Co.   ocrx_word word_1_149 bbox 766 696 850 723; x_wconf 85 eng ltr (JPMC)   ocrx_word word_1_150 bbox 861 696 881 717; x_wconf 87 eng ltr of   ocrx_word word_1_151 bbox 892 697 941 717; x_wconf 91 eng ltr Bear   ocrx_word word_1_152 bbox 951 697 1038 720; x_wconf 82 eng ltr Stearns,

       ocr_line line_1_16 bbox 180 729 982 755; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_153 bbox 180 729 246 749; x_wconf 90 eng ltr which   ocrx_word word_1_154 bbox 256 731 275 749; x_wconf 92 eng ltr at   ocrx_word word_1_155 bbox 283 729 316 749; x_wconf 91 eng ltr the   ocrx_word word_1_156 bbox 324 729 372 749; x_wconf 93 eng ltr time   ocrx_word word_1_157 bbox 381 734 423 749; x_wconf 87 eng ltr was   ocrx_word word_1_158 bbox 431 729 497 755; x_wconf 87 eng ltr facing   ocrx_word word_1_159 bbox 509 734 578 749; x_wconf 92 eng ltr severe   ocrx_word word_1_160 bbox 589 729 680 755; x_wconf 92 eng ltr liquidity   ocrx_word word_1_161 bbox 690 734 780 755; x_wconf 89 eng ltr pressure   ocrx_word word_1_162 bbox 789 729 829 749; x_wconf 91 eng ltr that   ocrx_word word_1_163 bbox 838 729 951 749; x_wconf 88 eng ltr threatened   ocrx_word word_1_164 bbox 962 731 982 749; x_wconf 94 eng ltr to

       ocr_line line_1_17 bbox 181 761 976 787; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_165 bbox 181 766 241 781; x_wconf 93 eng ltr cause   ocrx_word word_1_166 bbox 249 761 282 781; x_wconf 93 eng ltr the   ocrx_word word_1_167 bbox 291 761 365 781; x_wconf 92 eng ltr default   ocrx_word word_1_168 bbox 376 761 413 781; x_wconf 92 eng ltr and   ocrx_word word_1_169 bbox 424 761 546 787; x_wconf 85 eng ltr bankruptcy   ocrx_word word_1_170 bbox 556 761 577 781; x_wconf 97 eng ltr of   ocrx_word word_1_171 bbox 586 761 619 781; x_wconf 90 eng ltr the   ocrx_word word_1_172 bbox 628 766 734 787; x_wconf 93 eng ltr company,   ocrx_word word_1_173 bbox 744 761 791 781; x_wconf 94 eng ltr with   ocrx_word word_1_174 bbox 802 761 896 787; x_wconf 87 eng ltr resulting   ocrx_word word_1_175 bbox 907 761 946 781; x_wconf 93 eng ltr risk   ocrx_word word_1_176 bbox 955 763 976 781; x_wconf 92 eng ltr to

       ocr_line line_1_18 bbox 181 793 1011 819; baseline 0.001 -6; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_177 bbox 181 793 316 819; x_wconf 89 eng ltr significantly   ocrx_word word_1_178 bbox 328 793 413 814; x_wconf 89 eng ltr stressed   ocrx_word word_1_179 bbox 423 793 516 814; x_wconf 86 eng ltr financial   ocrx_word word_1_180 bbox 529 793 622 814; x_wconf 86 eng ltr markets.   ocrx_word word_1_181 bbox 638 793 680 814; x_wconf 92 eng ltr The   ocrx_word word_1_182 bbox 689 793 750 814; x_wconf 89 eng ltr credit   ocrx_word word_1_183 bbox 761 793 776 814; x_wconf 88 eng ltr is   ocrx_word word_1_184 bbox 785 793 867 814; x_wconf 90 eng ltr secured   ocrx_word word_1_185 bbox 878 793 904 819; x_wconf 89 eng ltr by   ocrx_word word_1_186 bbox 912 793 937 814; x_wconf 90 eng ltr all   ocrx_word word_1_187 bbox 947 793 968 814; x_wconf 90 eng ltr of   ocrx_word word_1_188 bbox 978 793 1011 814; x_wconf 93 eng ltr the

       ocr_line line_1_19 bbox 181 825 1012 851; baseline -0.001 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_189 bbox 181 827 244 846; x_wconf 88 eng ltr assets   ocrx_word word_1_190 bbox 253 825 346 851; x_wconf 90 eng ltr acquired   ocrx_word word_1_191 bbox 357 825 383 851; x_wconf 92 eng ltr by   ocrx_word word_1_192 bbox 393 825 473 846; x_wconf 90 eng ltr Maiden   ocrx_word word_1_193 bbox 486 826 538 846; x_wconf 91 eng ltr Lane   ocrx_word word_1_194 bbox 547 825 584 846; x_wconf 91 eng ltr and   ocrx_word word_1_195 bbox 595 825 621 851; x_wconf 91 eng ltr by   ocrx_word word_1_196 bbox 629 830 641 846; x_wconf 91 eng ltr a   ocrx_word word_1_197 bbox 649 825 789 846; x_wconf 88 eng ltr subordinated   ocrx_word word_1_198 bbox 802 825 846 846; x_wconf 90 eng ltr loan   ocrx_word word_1_199 bbox 856 825 876 846; x_wconf 92 eng ltr of   ocrx_word word_1_200 bbox 885 825 935 847; x_wconf 85 eng $1.1   ocrx_word word_1_201 bbox 943 825 1012 846; x_wconf 93 eng ltr billion

       ocr_line line_1_20 bbox 180 857 972 883; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_202 bbox 180 857 230 878; x_wconf 95 eng ltr from   ocrx_word word_1_203 bbox 242 858 309 878; x_wconf 87 eng ltr JPMC   ocrx_word word_1_204 bbox 319 859 339 878; x_wconf 90 eng ltr to   ocrx_word word_1_205 bbox 349 857 430 878; x_wconf 87 eng ltr Maiden   ocrx_word word_1_206 bbox 442 858 494 878; x_wconf 90 eng ltr Lane   ocrx_word word_1_207 bbox 502 857 543 878; x_wconf 92 eng ltr that   ocrx_word word_1_208 bbox 552 857 619 878; x_wconf 91 eng ltr would   ocrx_word word_1_209 bbox 630 857 702 878; x_wconf 88 eng ltr absorb   ocrx_word word_1_210 bbox 711 862 750 883; x_wconf 91 eng ltr any   ocrx_word word_1_211 bbox 760 857 820 878; x_wconf 90 eng ltr initial   ocrx_word word_1_212 bbox 832 857 896 878; x_wconf 92 eng ltr losses   ocrx_word word_1_213 bbox 905 862 930 878; x_wconf 94 eng ltr on   ocrx_word word_1_214 bbox 940 857 972 878; x_wconf 91 eng ltr the

       ocr_line line_1_21 bbox 181 889 426 916; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_215 bbox 181 891 244 910; x_wconf 88 eng ltr assets   ocrx_word word_1_216 bbox 254 889 280 916; x_wconf 96 eng ltr by   ocrx_word word_1_217 bbox 288 889 328 910; x_wconf 90 eng ltr that   ocrx_word word_1_218 bbox 338 891 426 910; x_wconf 89 eng ltr amount.





     ocr_carea block_1_4 bbox 182 955 325 981
      ocr_par ltr par_1_4 bbox 182 955 325 981
       ocr_line line_1_22 bbox 182 955 325 981; baseline 0.007 -6; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_219 bbox 182 955 325 981; x_wconf 87 eng ltr Background





     ocr_carea block_1_5 bbox 180 1019 1034 1329
      ocr_par ltr par_1_5 bbox 180 1019 1034 1329
       ocr_line line_1_23 bbox 255 1019 1031 1045; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_220 bbox 255 1020 273 1039; x_wconf 93 eng ltr In   ocrx_word word_1_221 bbox 285 1019 353 1040; x_wconf 90 eng ltr March   ocrx_word word_1_222 bbox 364 1020 425 1043; x_wconf 88 eng 2008,   ocrx_word word_1_223 bbox 435 1020 484 1040; x_wconf 90 eng ltr Bear   ocrx_word word_1_224 bbox 493 1020 573 1040; x_wconf 88 eng ltr Stearns   ocrx_word word_1_225 bbox 581 1024 624 1040; x_wconf 91 eng ltr was   ocrx_word word_1_226 bbox 633 1024 671 1040; x_wconf 90 eng ltr one   ocrx_word word_1_227 bbox 680 1019 701 1040; x_wconf 92 eng ltr of   ocrx_word word_1_228 bbox 710 1019 743 1040; x_wconf 91 eng ltr the   ocrx_word word_1_229 bbox 753 1019 824 1045; x_wconf 87 eng ltr largest   ocrx_word word_1_230 bbox 833 1019 937 1040; x_wconf 85 eng ltr securities   ocrx_word word_1_231 bbox 946 1019 1002 1040; x_wconf 94 eng ltr firms   ocrx_word word_1_232 bbox 1014 1019 1031 1039; x_wconf 90 eng ltr in

       ocr_line line_1_24 bbox 180 1051 913 1077; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_233 bbox 180 1051 213 1072; x_wconf 92 eng ltr the   ocrx_word word_1_234 bbox 222 1053 312 1077; x_wconf 90 eng ltr country.   ocrx_word word_1_235 bbox 328 1052 358 1072; x_wconf 92 eng ltr As   ocrx_word word_1_236 bbox 367 1051 387 1072; x_wconf 88 eng ltr of   ocrx_word word_1_237 bbox 398 1051 495 1077; x_wconf 89 eng ltr February   ocrx_word word_1_238 bbox 505 1052 538 1075; x_wconf 81 eng 29,   ocrx_word word_1_239 bbox 547 1052 608 1075; x_wconf 91 eng 2008,   ocrx_word word_1_240 bbox 618 1052 668 1072; x_wconf 89 eng ltr Bear   ocrx_word word_1_241 bbox 677 1052 757 1072; x_wconf 86 eng ltr Stearns   ocrx_word word_1_242 bbox 767 1051 856 1077; x_wconf 88 eng ltr reported   ocrx_word word_1_243 bbox 867 1051 913 1072; x_wconf 90 eng ltr total

       ocr_line line_1_25 bbox 181 1083 1027 1109; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_244 bbox 181 1083 318 1104; x_wconf 88 eng ltr consolidated   ocrx_word word_1_245 bbox 329 1085 393 1104; x_wconf 92 eng ltr assets   ocrx_word word_1_246 bbox 402 1083 422 1104; x_wconf 88 eng ltr of   ocrx_word word_1_247 bbox 432 1083 591 1109; x_wconf 89 eng ltr approximately   ocrx_word word_1_248 bbox 600 1083 654 1106; x_wconf 83 eng $399   ocrx_word word_1_249 bbox 664 1083 741 1104; x_wconf 89 eng ltr billion.   ocrx_word word_1_250 bbox 759 1084 808 1104; x_wconf 95 eng ltr Bear   ocrx_word word_1_251 bbox 818 1084 898 1104; x_wconf 86 eng ltr Stearns   ocrx_word word_1_252 bbox 907 1083 997 1109; x_wconf 89 eng ltr engaged   ocrx_word word_1_253 bbox 1009 1083 1027 1104; x_wconf 95 eng ltr in

       ocr_line line_1_26 bbox 181 1115 984 1142; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_254 bbox 181 1121 192 1136; x_wconf 96 eng ltr a   ocrx_word word_1_255 bbox 202 1115 261 1136; x_wconf 92 eng ltr broad   ocrx_word word_1_256 bbox 273 1121 332 1142; x_wconf 85 eng ltr range   ocrx_word word_1_257 bbox 341 1115 362 1136; x_wconf 92 eng ltr of   ocrx_word word_1_258 bbox 371 1115 477 1139; x_wconf 84 eng ltr activities,   ocrx_word word_1_259 bbox 488 1115 589 1142; x_wconf 89 eng ltr including   ocrx_word word_1_260 bbox 601 1115 720 1136; x_wconf 87 eng ltr investment   ocrx_word word_1_261 bbox 730 1115 824 1142; x_wconf 88 eng ltr banking,   ocrx_word word_1_262 bbox 833 1115 937 1136; x_wconf 87 eng ltr securities   ocrx_word word_1_263 bbox 946 1115 984 1136; x_wconf 92 eng ltr and

       ocr_line line_1_27 bbox 181 1148 987 1174; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_264 bbox 181 1148 301 1168; x_wconf 88 eng ltr derivatives   ocrx_word word_1_265 bbox 310 1148 387 1174; x_wconf 88 eng ltr trading   ocrx_word word_1_266 bbox 397 1148 434 1168; x_wconf 90 eng ltr and   ocrx_word word_1_267 bbox 444 1148 539 1174; x_wconf 90 eng ltr clearing,   ocrx_word word_1_268 bbox 549 1148 658 1174; x_wconf 90 eng ltr brokerage   ocrx_word word_1_269 bbox 667 1148 762 1172; x_wconf 89 eng ltr services,   ocrx_word word_1_270 bbox 772 1148 809 1168; x_wconf 94 eng ltr and   ocrx_word word_1_271 bbox 819 1148 938 1174; x_wconf 89 eng ltr originating   ocrx_word word_1_272 bbox 949 1148 987 1168; x_wconf 91 eng ltr and

       ocr_line line_1_28 bbox 181 1180 1034 1206; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_273 bbox 181 1180 308 1206; x_wconf 91 eng ltr securitizing   ocrx_word word_1_274 bbox 319 1180 446 1200; x_wconf 85 eng ltr commercial   ocrx_word word_1_275 bbox 458 1180 495 1200; x_wconf 91 eng ltr and   ocrx_word word_1_276 bbox 506 1180 618 1200; x_wconf 93 eng ltr residential   ocrx_word word_1_277 bbox 629 1182 732 1206; x_wconf 87 eng ltr mortgage   ocrx_word word_1_278 bbox 743 1180 806 1200; x_wconf 91 eng ltr loans.   ocrx_word word_1_279 bbox 820 1181 851 1200; x_wconf 88 eng ltr As   ocrx_word word_1_280 bbox 860 1185 871 1200; x_wconf 91 eng ltr a   ocrx_word word_1_281 bbox 880 1180 939 1200; x_wconf 88 eng ltr result   ocrx_word word_1_282 bbox 948 1180 969 1200; x_wconf 92 eng ltr of   ocrx_word word_1_283 bbox 978 1180 1034 1200; x_wconf 90 eng ltr these

       ocr_line line_1_29 bbox 181 1212 982 1238; baseline 0.001 -6; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_284 bbox 181 1212 286 1236; x_wconf 91 eng ltr activities,   ocrx_word word_1_285 bbox 297 1213 347 1233; x_wconf 91 eng ltr Bear   ocrx_word word_1_286 bbox 356 1213 436 1233; x_wconf 86 eng ltr Stearns   ocrx_word word_1_287 bbox 446 1212 565 1233; x_wconf 90 eng ltr maintained   ocrx_word word_1_288 bbox 576 1217 588 1233; x_wconf 91 eng ltr a   ocrx_word word_1_289 bbox 597 1212 650 1238; x_wconf 89 eng ltr large   ocrx_word word_1_290 bbox 660 1212 753 1238; x_wconf 91 eng ltr portfolio   ocrx_word word_1_291 bbox 764 1212 785 1233; x_wconf 93 eng ltr of   ocrx_word word_1_292 bbox 797 1212 982 1238; x_wconf 90 eng ltr mortgage-related

       ocr_line line_1_30 bbox 181 1244 1014 1270; baseline -0.001 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_293 bbox 181 1244 284 1265; x_wconf 89 eng ltr securities   ocrx_word word_1_294 bbox 294 1244 331 1265; x_wconf 90 eng ltr and   ocrx_word word_1_295 bbox 341 1244 396 1265; x_wconf 91 eng ltr other   ocrx_word word_1_296 bbox 406 1244 452 1265; x_wconf 90 eng ltr debt   ocrx_word word_1_297 bbox 462 1244 596 1265; x_wconf 89 eng ltr instruments.   ocrx_word word_1_298 bbox 614 1244 662 1265; x_wconf 96 eng ltr Like   ocrx_word word_1_299 bbox 672 1246 723 1265; x_wconf 88 eng ltr most   ocrx_word word_1_300 bbox 733 1244 786 1270; x_wconf 92 eng ltr large   ocrx_word word_1_301 bbox 795 1244 899 1265; x_wconf 90 eng ltr securities   ocrx_word word_1_302 bbox 908 1244 970 1268; x_wconf 93 eng ltr firms,   ocrx_word word_1_303 bbox 981 1244 1014 1265; x_wconf 90 eng ltr the

       ocr_line line_1_31 bbox 181 1276 972 1302; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_304 bbox 181 1281 281 1302; x_wconf 91 eng ltr company   ocrx_word word_1_305 bbox 291 1276 371 1302; x_wconf 90 eng ltr heavily   ocrx_word word_1_306 bbox 380 1276 471 1297; x_wconf 89 eng ltr financed   ocrx_word word_1_307 bbox 485 1276 535 1297; x_wconf 93 eng ltr itself   ocrx_word word_1_308 bbox 547 1276 565 1297; x_wconf 95 eng ltr in   ocrx_word word_1_309 bbox 574 1276 607 1297; x_wconf 91 eng ltr the   ocrx_word word_1_310 bbox 616 1276 729 1297; x_wconf 91 eng ltr short-term   ocrx_word word_1_311 bbox 739 1276 843 1297; x_wconf 91 eng ltr securities   ocrx_word word_1_312 bbox 855 1276 972 1302; x_wconf 87 eng ltr repurchase

       ocr_line line_1_32 bbox 182 1308 263 1329; baseline 0 0; x_size 26.578705; x_descenders 5.5787058; x_ascenders 6  ocrx_word word_1_313 bbox 182 1308 263 1329; x_wconf 91 eng ltr market.










  page
  Financial conditions deteriorated markedly between mid-January and
 mid-March 2008. Volatility was steadily increasing and liquidity was
 quickly declining in many credit markets – including in particular the market
 for residential mortgage-backed securities, but also in the markets for other
 asset-backed securities, corporate securities, and municipal securities.
 Moreover, many market participants were financing a large portion of their
 holdings of these long-term securities in short-term collateralized funding
 markets.

  The senior management of Bear Stearns notified the Federal Reserve
 on the evening of Thursday, March 13, that it anticipated that many of its
 counterparties would on Friday not agree to roll over their repurchase
 agreements and, therefore, that Bear Stearns would be required on Friday to
 repay a significant portion of its repurchase agreement liabilities. Bear
 Stearns expected that it would not have sufficient funds or liquid assets to
 repay these obligations as they came due and would not be able during the
 short period before the markets opened on Friday to find a private-sector
 source of alternative financing. Bear Stearns reported that it would likely
 have to file for bankruptcy protection on Friday unless the Federal Reserve
 were willing to provide Bear Stearns with liquidity.

  The sudden imminence of insolvency for Bear Stearns, the large
 presence of Bear Stearns in several important financial markets (including in
 particular the markets for repo-style transactions, over-the-counter derivative
 and foreign exchange transactions, mortgage-backed securities, and
 securities clearing services), and the potential for contagion to similarly
 situated firms raised significant concern that financial markets would be
 seriously disrupted if Bear Stearns were suddenly unable to meet its
 obligations to counterparties. Most crucially, the consequences of an
 unexpected and disorderly default or insolvency by Bear Stearns – a major
 borrower and lender in the repurchase agreement market – could have
 seriously disrupted this very large, important, and increasingly strained
 market for short-term secured financing. Market participants were likely to
 respond to the failure of Bear Stearns by withdrawing generally from short-
 term collateralized funding markets, resulting in a dramatic drop in the
 overall availability of short-term financing, and threats to the liquidity and
 possibly the solvency of other large and highly leveraged financial
 institutions.

  ocr







    ocr_page page_1 image "/tmp/apache-tika-8444493867166675987.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 180 150 1041 395
      ocr_par ltr par_1_1 bbox 180 150 1041 395
       ocr_line line_1_1 bbox 254 150 1026 176; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_1 bbox 254 150 353 170; x_wconf 85 eng ltr Financial   ocrx_word word_1_2 bbox 364 150 478 170; x_wconf 84 eng ltr conditions   ocrx_word word_1_3 bbox 488 150 617 170; x_wconf 85 eng ltr deteriorated   ocrx_word word_1_4 bbox 629 150 732 176; x_wconf 87 eng ltr markedly   ocrx_word word_1_5 bbox 742 150 831 170; x_wconf 86 eng ltr between   ocrx_word word_1_6 bbox 843 150 979 176; x_wconf 83 eng ltr mid-January   ocrx_word word_1_7 bbox 989 150 1026 170; x_wconf 90 eng ltr and

       ocr_line line_1_2 bbox 182 182 964 208; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_8 bbox 182 182 303 202; x_wconf 91 eng ltr mid-March   ocrx_word word_1_9 bbox 314 183 376 202; x_wconf 90 eng 2008.   ocrx_word word_1_10 bbox 390 182 495 208; x_wconf 85 eng ltr Volatility   ocrx_word word_1_11 bbox 504 187 547 202; x_wconf 90 eng ltr was   ocrx_word word_1_12 bbox 555 182 640 208; x_wconf 84 eng ltr steadily   ocrx_word word_1_13 bbox 651 182 761 208; x_wconf 82 eng ltr increasing   ocrx_word word_1_14 bbox 772 182 809 202; x_wconf 94 eng ltr and   ocrx_word word_1_15 bbox 821 182 912 208; x_wconf 86 eng ltr liquidity   ocrx_word word_1_16 bbox 921 187 964 202; x_wconf 81 eng ltr was

       ocr_line line_1_3 bbox 181 214 1041 240; baseline 0.001 -6; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_17 bbox 181 214 262 240; x_wconf 85 eng ltr quickly   ocrx_word word_1_18 bbox 272 214 373 240; x_wconf 86 eng ltr declining   ocrx_word word_1_19 bbox 384 214 402 234; x_wconf 95 eng ltr in   ocrx_word word_1_20 bbox 413 219 472 240; x_wconf 85 eng ltr many   ocrx_word word_1_21 bbox 481 214 543 235; x_wconf 89 eng ltr credit   ocrx_word word_1_22 bbox 552 214 638 235; x_wconf 85 eng ltr markets   ocrx_word word_1_23 bbox 646 226 660 228; x_wconf 98 eng —   ocrx_word word_1_24 bbox 669 214 771 240; x_wconf 86 eng ltr including   ocrx_word word_1_25 bbox 782 214 800 234; x_wconf 95 eng ltr in   ocrx_word word_1_26 bbox 810 214 914 240; x_wconf 84 eng ltr particular   ocrx_word word_1_27 bbox 923 214 956 235; x_wconf 90 eng ltr the   ocrx_word word_1_28 bbox 967 214 1041 235; x_wconf 86 eng ltr market

       ocr_line line_1_4 bbox 180 246 1021 272; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_29 bbox 180 246 210 267; x_wconf 91 eng ltr for   ocrx_word word_1_30 bbox 222 246 333 267; x_wconf 85 eng ltr residential   ocrx_word word_1_31 bbox 345 246 533 272; x_wconf 88 eng ltr mortgage-backed   ocrx_word word_1_32 bbox 545 246 656 270; x_wconf 86 eng ltr securities,   ocrx_word word_1_33 bbox 666 246 699 267; x_wconf 89 eng ltr but   ocrx_word word_1_34 bbox 708 246 751 267; x_wconf 85 eng ltr also   ocrx_word word_1_35 bbox 762 246 779 267; x_wconf 94 eng ltr in   ocrx_word word_1_36 bbox 788 246 821 267; x_wconf 90 eng ltr the   ocrx_word word_1_37 bbox 831 246 916 267; x_wconf 86 eng ltr markets   ocrx_word word_1_38 bbox 925 246 955 267; x_wconf 95 eng ltr for   ocrx_word word_1_39 bbox 966 246 1021 267; x_wconf 89 eng ltr other

       ocr_line line_1_5 bbox 181 278 961 304; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_40 bbox 181 278 319 299; x_wconf 90 eng ltr asset-backed   ocrx_word word_1_41 bbox 331 278 441 302; x_wconf 84 eng ltr securities,   ocrx_word word_1_42 bbox 451 280 553 304; x_wconf 84 eng ltr corporate   ocrx_word word_1_43 bbox 563 278 674 302; x_wconf 85 eng ltr securities,   ocrx_word word_1_44 bbox 683 278 720 299; x_wconf 93 eng ltr and   ocrx_word word_1_45 bbox 731 278 838 304; x_wconf 85 eng ltr municipal   ocrx_word word_1_46 bbox 850 278 961 299; x_wconf 89 eng ltr securities.

       ocr_line line_1_6 bbox 182 310 1021 337; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_47 bbox 182 311 295 334; x_wconf 73 eng ltr Moreover,   ocrx_word word_1_48 bbox 306 316 365 337; x_wconf 87 eng ltr many   ocrx_word word_1_49 bbox 375 310 450 331; x_wconf 88 eng ltr market   ocrx_word word_1_50 bbox 459 310 587 337; x_wconf 87 eng ltr participants   ocrx_word word_1_51 bbox 596 316 649 331; x_wconf 91 eng ltr were   ocrx_word word_1_52 bbox 657 310 759 337; x_wconf 89 eng ltr financing   ocrx_word word_1_53 bbox 771 316 782 331; x_wconf 95 eng ltr a   ocrx_word word_1_54 bbox 792 310 844 337; x_wconf 88 eng ltr large   ocrx_word word_1_55 bbox 854 310 931 337; x_wconf 87 eng ltr portion   ocrx_word word_1_56 bbox 941 310 962 331; x_wconf 91 eng ltr of   ocrx_word word_1_57 bbox 971 310 1021 331; x_wconf 89 eng ltr their

       ocr_line line_1_7 bbox 182 343 1004 369; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_58 bbox 182 343 275 369; x_wconf 89 eng ltr holdings   ocrx_word word_1_59 bbox 285 343 305 363; x_wconf 91 eng ltr of   ocrx_word word_1_60 bbox 314 343 370 363; x_wconf 88 eng ltr these   ocrx_word word_1_61 bbox 380 343 486 369; x_wconf 90 eng ltr long-term   ocrx_word word_1_62 bbox 496 343 600 363; x_wconf 84 eng ltr securities   ocrx_word word_1_63 bbox 611 343 628 363; x_wconf 98 eng ltr in   ocrx_word word_1_64 bbox 638 343 751 363; x_wconf 90 eng ltr short-term   ocrx_word word_1_65 bbox 762 343 908 363; x_wconf 89 eng ltr collateralized   ocrx_word word_1_66 bbox 922 343 1004 369; x_wconf 87 eng ltr funding

       ocr_line line_1_8 bbox 182 375 275 395; baseline 0 0; x_size 25.961039; x_descenders 5.9610386; x_ascenders 5  ocrx_word word_1_67 bbox 182 375 275 395; x_wconf 92 eng ltr markets.





     ocr_carea block_1_2 bbox 180 440 1029 787
      ocr_par ltr par_1_2 bbox 180 440 1029 787
       ocr_line line_1_9 bbox 252 440 1023 466; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_68 bbox 252 440 294 460; x_wconf 94 eng ltr The   ocrx_word word_1_69 bbox 303 440 369 460; x_wconf 92 eng ltr senior   ocrx_word word_1_70 bbox 379 442 519 466; x_wconf 90 eng ltr management   ocrx_word word_1_71 bbox 529 440 549 460; x_wconf 92 eng ltr of   ocrx_word word_1_72 bbox 560 441 610 460; x_wconf 90 eng ltr Bear   ocrx_word word_1_73 bbox 619 440 699 460; x_wconf 85 eng ltr Stearns   ocrx_word word_1_74 bbox 709 440 790 460; x_wconf 92 eng ltr notified   ocrx_word word_1_75 bbox 802 440 835 460; x_wconf 91 eng ltr the   ocrx_word word_1_76 bbox 845 440 924 460; x_wconf 91 eng ltr Federal   ocrx_word word_1_77 bbox 937 441 1023 460; x_wconf 89 eng ltr Reserve

       ocr_line line_1_10 bbox 181 472 1000 498; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_78 bbox 181 477 206 492; x_wconf 94 eng ltr on   ocrx_word word_1_79 bbox 215 472 248 492; x_wconf 92 eng ltr the   ocrx_word word_1_80 bbox 257 472 342 498; x_wconf 91 eng ltr evening   ocrx_word word_1_81 bbox 353 472 373 492; x_wconf 91 eng ltr of   ocrx_word word_1_82 bbox 383 472 492 498; x_wconf 74 eng ltr Thursday,   ocrx_word word_1_83 bbox 504 472 572 492; x_wconf 92 eng ltr March   ocrx_word word_1_84 bbox 583 472 614 496; x_wconf 90 eng 13,   ocrx_word word_1_85 bbox 624 472 665 492; x_wconf 91 eng ltr that   ocrx_word word_1_86 bbox 675 472 688 492; x_wconf 96 eng ltr it   ocrx_word word_1_87 bbox 696 472 815 498; x_wconf 88 eng ltr anticipated   ocrx_word word_1_88 bbox 826 472 866 492; x_wconf 90 eng ltr that   ocrx_word word_1_89 bbox 876 477 935 498; x_wconf 95 eng ltr many   ocrx_word word_1_90 bbox 945 472 965 492; x_wconf 95 eng ltr of   ocrx_word word_1_91 bbox 977 472 1000 492; x_wconf 90 eng ltr its

       ocr_line line_1_11 bbox 181 504 958 530; baseline -0.001 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_92 bbox 181 504 337 530; x_wconf 87 eng ltr counterparties   ocrx_word word_1_93 bbox 346 504 413 525; x_wconf 92 eng ltr would   ocrx_word word_1_94 bbox 424 509 449 525; x_wconf 94 eng ltr on   ocrx_word word_1_95 bbox 459 504 529 530; x_wconf 90 eng ltr Friday   ocrx_word word_1_96 bbox 539 506 573 525; x_wconf 91 eng ltr not   ocrx_word word_1_97 bbox 581 509 640 530; x_wconf 91 eng ltr agree   ocrx_word word_1_98 bbox 648 506 669 525; x_wconf 94 eng ltr to   ocrx_word word_1_99 bbox 679 504 713 525; x_wconf 94 eng ltr roll   ocrx_word word_1_100 bbox 724 509 771 525; x_wconf 92 eng ltr over   ocrx_word word_1_101 bbox 780 504 829 525; x_wconf 90 eng ltr their   ocrx_word word_1_102 bbox 841 504 958 530; x_wconf 87 eng ltr repurchase

       ocr_line line_1_12 bbox 181 536 1029 562; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_103 bbox 181 538 306 562; x_wconf 88 eng ltr agreements   ocrx_word word_1_104 bbox 315 536 360 560; x_wconf 87 eng ltr and,   ocrx_word word_1_105 bbox 369 536 473 560; x_wconf 86 eng ltr therefore,   ocrx_word word_1_106 bbox 484 536 525 557; x_wconf 87 eng ltr that   ocrx_word word_1_107 bbox 535 537 584 557; x_wconf 88 eng ltr Bear   ocrx_word word_1_108 bbox 594 537 674 557; x_wconf 86 eng ltr Stearns   ocrx_word word_1_109 bbox 682 536 749 557; x_wconf 92 eng ltr would   ocrx_word word_1_110 bbox 761 536 785 557; x_wconf 89 eng ltr be   ocrx_word word_1_111 bbox 794 536 883 562; x_wconf 80 eng ltr required   ocrx_word word_1_112 bbox 894 541 919 557; x_wconf 93 eng ltr on   ocrx_word word_1_113 bbox 930 536 999 562; x_wconf 91 eng ltr Friday   ocrx_word word_1_114 bbox 1009 538 1029 557; x_wconf 90 eng ltr to

       ocr_line line_1_13 bbox 182 568 974 594; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_115 bbox 182 573 241 594; x_wconf 89 eng ltr repay   ocrx_word word_1_116 bbox 250 573 261 589; x_wconf 94 eng ltr a   ocrx_word word_1_117 bbox 269 568 383 594; x_wconf 86 eng ltr significant   ocrx_word word_1_118 bbox 396 568 472 594; x_wconf 91 eng ltr portion   ocrx_word word_1_119 bbox 483 568 503 589; x_wconf 93 eng ltr of   ocrx_word word_1_120 bbox 514 568 538 589; x_wconf 88 eng ltr its   ocrx_word word_1_121 bbox 547 568 665 594; x_wconf 88 eng ltr repurchase   ocrx_word word_1_122 bbox 674 570 788 594; x_wconf 87 eng ltr agreement   ocrx_word word_1_123 bbox 799 568 907 589; x_wconf 85 eng ltr liabilities.   ocrx_word word_1_124 bbox 925 569 974 589; x_wconf 91 eng ltr Bear

       ocr_line line_1_14 bbox 181 600 1005 627; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_125 bbox 181 601 261 621; x_wconf 82 eng ltr Stearns   ocrx_word word_1_126 bbox 270 600 366 627; x_wconf 88 eng ltr expected   ocrx_word word_1_127 bbox 376 600 417 621; x_wconf 89 eng ltr that   ocrx_word word_1_128 bbox 427 600 440 621; x_wconf 92 eng ltr it   ocrx_word word_1_129 bbox 447 600 515 621; x_wconf 93 eng ltr would   ocrx_word word_1_130 bbox 526 603 559 621; x_wconf 93 eng ltr not   ocrx_word word_1_131 bbox 569 600 619 621; x_wconf 88 eng ltr have   ocrx_word word_1_132 bbox 628 600 728 621; x_wconf 85 eng ltr sufficient   ocrx_word word_1_133 bbox 740 600 799 621; x_wconf 89 eng ltr funds   ocrx_word word_1_134 bbox 810 606 831 621; x_wconf 95 eng ltr or   ocrx_word word_1_135 bbox 841 600 902 627; x_wconf 95 eng ltr liquid   ocrx_word word_1_136 bbox 912 603 976 621; x_wconf 89 eng ltr assets   ocrx_word word_1_137 bbox 985 603 1005 621; x_wconf 91 eng ltr to

       ocr_line line_1_15 bbox 182 633 1012 659; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_138 bbox 182 638 241 659; x_wconf 91 eng ltr repay   ocrx_word word_1_139 bbox 249 633 305 653; x_wconf 90 eng ltr these   ocrx_word word_1_140 bbox 314 633 437 659; x_wconf 89 eng ltr obligations   ocrx_word word_1_141 bbox 446 638 468 653; x_wconf 91 eng ltr as   ocrx_word word_1_142 bbox 475 633 523 659; x_wconf 90 eng ltr they   ocrx_word word_1_143 bbox 531 638 588 653; x_wconf 90 eng ltr came   ocrx_word word_1_144 bbox 598 633 636 653; x_wconf 92 eng ltr due   ocrx_word word_1_145 bbox 645 633 682 653; x_wconf 92 eng ltr and   ocrx_word word_1_146 bbox 691 633 758 653; x_wconf 93 eng ltr would   ocrx_word word_1_147 bbox 770 635 803 653; x_wconf 93 eng ltr not   ocrx_word word_1_148 bbox 813 633 837 653; x_wconf 92 eng ltr be   ocrx_word word_1_149 bbox 846 633 890 653; x_wconf 95 eng ltr able   ocrx_word word_1_150 bbox 899 633 969 659; x_wconf 90 eng ltr during   ocrx_word word_1_151 bbox 979 633 1012 653; x_wconf 94 eng ltr the

       ocr_line line_1_16 bbox 181 665 993 691; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_152 bbox 181 665 235 685; x_wconf 89 eng ltr short   ocrx_word word_1_153 bbox 244 665 312 691; x_wconf 93 eng ltr period   ocrx_word word_1_154 bbox 323 665 390 685; x_wconf 89 eng ltr before   ocrx_word word_1_155 bbox 400 665 433 685; x_wconf 94 eng ltr the   ocrx_word word_1_156 bbox 443 665 529 685; x_wconf 91 eng ltr markets   ocrx_word word_1_157 bbox 538 665 615 691; x_wconf 93 eng ltr opened   ocrx_word word_1_158 bbox 625 670 651 685; x_wconf 92 eng ltr on   ocrx_word word_1_159 bbox 661 665 732 691; x_wconf 92 eng ltr Friday   ocrx_word word_1_160 bbox 740 667 761 685; x_wconf 97 eng ltr to   ocrx_word word_1_161 bbox 769 665 810 685; x_wconf 91 eng ltr find   ocrx_word word_1_162 bbox 822 670 833 685; x_wconf 95 eng ltr a   ocrx_word word_1_163 bbox 843 665 993 691; x_wconf 91 eng ltr private-sector

       ocr_line line_1_17 bbox 181 697 1003 723; baseline -0.001 -5; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_164 bbox 181 702 252 718; x_wconf 88 eng ltr source   ocrx_word word_1_165 bbox 261 697 282 718; x_wconf 91 eng ltr of   ocrx_word word_1_166 bbox 291 697 407 718; x_wconf 89 eng ltr alternative   ocrx_word word_1_167 bbox 416 697 525 723; x_wconf 88 eng ltr financing.   ocrx_word word_1_168 bbox 544 698 593 718; x_wconf 92 eng ltr Bear   ocrx_word word_1_169 bbox 603 698 683 718; x_wconf 86 eng ltr Stearns   ocrx_word word_1_170 bbox 693 697 782 723; x_wconf 88 eng ltr reported   ocrx_word word_1_171 bbox 792 697 833 718; x_wconf 93 eng ltr that   ocrx_word word_1_172 bbox 843 697 856 717; x_wconf 94 eng ltr it   ocrx_word word_1_173 bbox 864 697 931 718; x_wconf 92 eng ltr would   ocrx_word word_1_174 bbox 943 697 1003 723; x_wconf 92 eng ltr likely

       ocr_line line_1_18 bbox 182 729 1020 755; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_175 bbox 182 729 232 750; x_wconf 92 eng ltr have   ocrx_word word_1_176 bbox 240 731 261 750; x_wconf 91 eng ltr to   ocrx_word word_1_177 bbox 269 729 303 750; x_wconf 91 eng ltr file   ocrx_word word_1_178 bbox 313 729 343 750; x_wconf 93 eng ltr for   ocrx_word word_1_179 bbox 354 729 476 755; x_wconf 87 eng ltr bankruptcy   ocrx_word word_1_180 bbox 487 729 596 755; x_wconf 91 eng ltr protection   ocrx_word word_1_181 bbox 607 734 632 750; x_wconf 92 eng ltr on   ocrx_word word_1_182 bbox 643 729 713 755; x_wconf 92 eng ltr Friday   ocrx_word word_1_183 bbox 722 729 790 750; x_wconf 85 eng ltr unless   ocrx_word word_1_184 bbox 798 729 831 750; x_wconf 87 eng ltr the   ocrx_word word_1_185 bbox 841 729 920 750; x_wconf 85 eng ltr Federal   ocrx_word word_1_186 bbox 933 730 1020 750; x_wconf 90 eng ltr Reserve

       ocr_line line_1_19 bbox 180 761 756 787; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_187 bbox 180 766 233 782; x_wconf 92 eng ltr were   ocrx_word word_1_188 bbox 241 761 318 787; x_wconf 91 eng ltr willing   ocrx_word word_1_189 bbox 328 763 348 782; x_wconf 92 eng ltr to   ocrx_word word_1_190 bbox 358 761 440 787; x_wconf 92 eng ltr provide   ocrx_word word_1_191 bbox 451 762 500 782; x_wconf 92 eng ltr Bear   ocrx_word word_1_192 bbox 510 762 590 782; x_wconf 86 eng ltr Stearns   ocrx_word word_1_193 bbox 598 761 646 782; x_wconf 94 eng ltr with   ocrx_word word_1_194 bbox 658 761 756 787; x_wconf 90 eng ltr liquidity.





     ocr_carea block_1_3 bbox 180 826 1042 1361
      ocr_par ltr par_1_3 bbox 180 826 1042 1361
       ocr_line line_1_20 bbox 252 826 971 852; baseline 0.001 -6; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_195 bbox 252 826 294 847; x_wconf 94 eng ltr The   ocrx_word word_1_196 bbox 303 826 379 847; x_wconf 91 eng ltr sudden   ocrx_word word_1_197 bbox 391 826 511 847; x_wconf 88 eng ltr imminence   ocrx_word word_1_198 bbox 521 826 542 847; x_wconf 94 eng ltr of   ocrx_word word_1_199 bbox 553 826 670 852; x_wconf 89 eng ltr insolvency   ocrx_word word_1_200 bbox 679 826 709 847; x_wconf 91 eng ltr for   ocrx_word word_1_201 bbox 721 827 770 847; x_wconf 91 eng ltr Bear   ocrx_word word_1_202 bbox 779 827 866 850; x_wconf 86 eng ltr Stearns,   ocrx_word word_1_203 bbox 875 826 908 847; x_wconf 91 eng ltr the   ocrx_word word_1_204 bbox 919 826 971 852; x_wconf 88 eng ltr large

       ocr_line line_1_21 bbox 182 858 1038 884; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_205 bbox 182 863 276 884; x_wconf 91 eng ltr presence   ocrx_word word_1_206 bbox 286 858 306 879; x_wconf 94 eng ltr of   ocrx_word word_1_207 bbox 318 859 367 879; x_wconf 90 eng ltr Bear   ocrx_word word_1_208 bbox 376 859 456 879; x_wconf 88 eng ltr Stearns   ocrx_word word_1_209 bbox 467 858 484 879; x_wconf 96 eng ltr in   ocrx_word word_1_210 bbox 494 858 570 879; x_wconf 85 eng ltr several   ocrx_word word_1_211 bbox 582 858 687 884; x_wconf 88 eng ltr important   ocrx_word word_1_212 bbox 696 858 788 879; x_wconf 89 eng ltr financial   ocrx_word word_1_213 bbox 802 858 888 879; x_wconf 88 eng ltr markets   ocrx_word word_1_214 bbox 898 858 1009 884; x_wconf 90 eng ltr (including   ocrx_word word_1_215 bbox 1020 858 1038 879; x_wconf 96 eng ltr in

       ocr_line line_1_22 bbox 182 890 1042 916; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 6  ocrx_word word_1_216 bbox 182 890 285 916; x_wconf 89 eng ltr particular   ocrx_word word_1_217 bbox 295 890 327 911; x_wconf 93 eng ltr the   ocrx_word word_1_218 bbox 337 890 423 911; x_wconf 91 eng ltr markets   ocrx_word word_1_219 bbox 431 890 461 911; x_wconf 89 eng ltr for   ocrx_word word_1_220 bbox 473 890 581 916; x_wconf 86 eng ltr repo-style   ocrx_word word_1_221 bbox 590 890 729 914; x_wconf 89 eng ltr transactions,   ocrx_word word_1_222 bbox 738 890 921 911; x_wconf 89 eng ltr over-the-counter   ocrx_word word_1_223 bbox 933 890 1042 911; x_wconf 90 eng ltr derivative

       ocr_line line_1_23 bbox 181 922 935 949; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_224 bbox 181 922 218 943; x_wconf 93 eng ltr and   ocrx_word word_1_225 bbox 228 922 304 949; x_wconf 88 eng ltr foreign   ocrx_word word_1_226 bbox 316 922 419 949; x_wconf 87 eng ltr exchange   ocrx_word word_1_227 bbox 428 922 567 946; x_wconf 91 eng ltr transactions,   ocrx_word word_1_228 bbox 577 922 766 949; x_wconf 84 eng ltr mortgage-backed   ocrx_word word_1_229 bbox 777 922 888 946; x_wconf 87 eng ltr securities,   ocrx_word word_1_230 bbox 898 922 935 943; x_wconf 90 eng ltr and

       ocr_line line_1_24 bbox 181 955 982 981; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_231 bbox 181 955 284 975; x_wconf 87 eng ltr securities   ocrx_word word_1_232 bbox 294 955 381 981; x_wconf 89 eng ltr clearing   ocrx_word word_1_233 bbox 390 955 495 981; x_wconf 88 eng ltr services),   ocrx_word word_1_234 bbox 504 955 541 975; x_wconf 91 eng ltr and   ocrx_word word_1_235 bbox 551 955 584 975; x_wconf 89 eng ltr the   ocrx_word word_1_236 bbox 594 955 687 981; x_wconf 90 eng ltr potential   ocrx_word word_1_237 bbox 697 955 727 975; x_wconf 93 eng ltr for   ocrx_word word_1_238 bbox 738 955 844 981; x_wconf 90 eng ltr contagion   ocrx_word word_1_239 bbox 855 957 875 975; x_wconf 91 eng ltr to   ocrx_word word_1_240 bbox 885 955 982 981; x_wconf 88 eng ltr similarly

       ocr_line line_1_25 bbox 181 987 987 1013; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_241 bbox 181 987 264 1007; x_wconf 89 eng ltr situated   ocrx_word word_1_242 bbox 274 987 331 1007; x_wconf 81 eng ltr firms   ocrx_word word_1_243 bbox 342 987 404 1007; x_wconf 90 eng ltr raised   ocrx_word word_1_244 bbox 415 987 529 1013; x_wconf 90 eng ltr significant   ocrx_word word_1_245 bbox 540 992 625 1007; x_wconf 91 eng ltr concern   ocrx_word word_1_246 bbox 635 987 676 1007; x_wconf 96 eng ltr that   ocrx_word word_1_247 bbox 684 987 777 1007; x_wconf 91 eng ltr financial   ocrx_word word_1_248 bbox 790 987 876 1007; x_wconf 89 eng ltr markets   ocrx_word word_1_249 bbox 885 987 952 1007; x_wconf 92 eng ltr would   ocrx_word word_1_250 bbox 963 987 987 1007; x_wconf 92 eng ltr be

       ocr_line line_1_26 bbox 181 1019 940 1045; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_251 bbox 181 1019 279 1045; x_wconf 84 eng ltr seriously   ocrx_word word_1_252 bbox 289 1019 389 1045; x_wconf 89 eng ltr disrupted   ocrx_word word_1_253 bbox 402 1019 415 1039; x_wconf 96 eng ltr if   ocrx_word word_1_254 bbox 426 1020 475 1040; x_wconf 90 eng ltr Bear   ocrx_word word_1_255 bbox 485 1020 564 1040; x_wconf 88 eng ltr Stearns   ocrx_word word_1_256 bbox 573 1024 626 1040; x_wconf 84 eng ltr were   ocrx_word word_1_257 bbox 635 1019 734 1045; x_wconf 91 eng ltr suddenly   ocrx_word word_1_258 bbox 744 1019 815 1040; x_wconf 89 eng ltr unable   ocrx_word word_1_259 bbox 824 1021 845 1040; x_wconf 90 eng ltr to   ocrx_word word_1_260 bbox 854 1021 906 1040; x_wconf 90 eng ltr meet   ocrx_word word_1_261 bbox 917 1019 940 1040; x_wconf 90 eng ltr its

       ocr_line line_1_27 bbox 181 1051 953 1077; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_262 bbox 181 1051 303 1077; x_wconf 88 eng ltr obligations   ocrx_word word_1_263 bbox 312 1053 332 1072; x_wconf 92 eng ltr to   ocrx_word word_1_264 bbox 341 1051 504 1077; x_wconf 89 eng ltr counterparties.   ocrx_word word_1_265 bbox 522 1052 576 1072; x_wconf 92 eng ltr Most   ocrx_word word_1_266 bbox 586 1051 687 1077; x_wconf 85 eng ltr crucially,   ocrx_word word_1_267 bbox 697 1051 729 1072; x_wconf 92 eng ltr the   ocrx_word word_1_268 bbox 738 1056 889 1077; x_wconf 90 eng ltr consequences   ocrx_word word_1_269 bbox 899 1051 920 1072; x_wconf 92 eng ltr of   ocrx_word word_1_270 bbox 929 1056 953 1072; x_wconf 92 eng ltr an

       ocr_line line_1_28 bbox 181 1083 1015 1109; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_271 bbox 181 1083 304 1109; x_wconf 89 eng ltr unexpected   ocrx_word word_1_272 bbox 315 1083 352 1104; x_wconf 88 eng ltr and   ocrx_word word_1_273 bbox 363 1083 474 1109; x_wconf 88 eng ltr disorderly   ocrx_word word_1_274 bbox 483 1083 557 1104; x_wconf 91 eng ltr default   ocrx_word word_1_275 bbox 568 1088 590 1104; x_wconf 90 eng ltr or   ocrx_word word_1_276 bbox 600 1083 717 1109; x_wconf 92 eng ltr insolvency   ocrx_word word_1_277 bbox 727 1083 753 1109; x_wconf 93 eng ltr by   ocrx_word word_1_278 bbox 763 1084 812 1104; x_wconf 91 eng ltr Bear   ocrx_word word_1_279 bbox 821 1084 902 1104; x_wconf 89 eng ltr Stearns   ocrx_word word_1_280 bbox 910 1095 924 1097; x_wconf 98 eng —   ocrx_word word_1_281 bbox 932 1088 944 1104; x_wconf 90 eng ltr a   ocrx_word word_1_282 bbox 954 1083 1015 1109; x_wconf 93 eng ltr major

       ocr_line line_1_29 bbox 182 1115 963 1142; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_283 bbox 182 1115 281 1136; x_wconf 90 eng ltr borrower   ocrx_word word_1_284 bbox 290 1115 328 1136; x_wconf 93 eng ltr and   ocrx_word word_1_285 bbox 339 1115 405 1136; x_wconf 90 eng ltr lender   ocrx_word word_1_286 bbox 416 1115 434 1136; x_wconf 95 eng ltr in   ocrx_word word_1_287 bbox 443 1115 476 1136; x_wconf 90 eng ltr the   ocrx_word word_1_288 bbox 486 1115 603 1142; x_wconf 87 eng ltr repurchase   ocrx_word word_1_289 bbox 613 1118 727 1142; x_wconf 88 eng ltr agreement   ocrx_word word_1_290 bbox 737 1115 812 1136; x_wconf 92 eng ltr market   ocrx_word word_1_291 bbox 820 1128 834 1130; x_wconf 98 eng —   ocrx_word word_1_292 bbox 842 1115 901 1136; x_wconf 91 eng ltr could   ocrx_word word_1_293 bbox 913 1115 963 1136; x_wconf 91 eng ltr have

       ocr_line line_1_30 bbox 181 1148 974 1174; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_294 bbox 181 1148 279 1174; x_wconf 87 eng ltr seriously   ocrx_word word_1_295 bbox 289 1148 389 1174; x_wconf 91 eng ltr disrupted   ocrx_word word_1_296 bbox 400 1148 439 1168; x_wconf 91 eng ltr this   ocrx_word word_1_297 bbox 447 1153 495 1174; x_wconf 92 eng ltr very   ocrx_word word_1_298 bbox 506 1148 565 1174; x_wconf 90 eng ltr large,   ocrx_word word_1_299 bbox 576 1148 687 1174; x_wconf 87 eng ltr important,   ocrx_word word_1_300 bbox 697 1148 734 1168; x_wconf 96 eng ltr and   ocrx_word word_1_301 bbox 746 1148 879 1174; x_wconf 89 eng ltr increasingly   ocrx_word word_1_302 bbox 889 1148 974 1168; x_wconf 88 eng ltr strained

       ocr_line line_1_31 bbox 182 1180 1026 1206; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_303 bbox 182 1180 256 1200; x_wconf 92 eng ltr market   ocrx_word word_1_304 bbox 265 1180 295 1200; x_wconf 92 eng ltr for   ocrx_word word_1_305 bbox 305 1180 418 1200; x_wconf 85 eng ltr short-term   ocrx_word word_1_306 bbox 429 1180 511 1200; x_wconf 89 eng ltr secured   ocrx_word word_1_307 bbox 521 1180 630 1206; x_wconf 90 eng ltr financing.   ocrx_word word_1_308 bbox 650 1180 727 1200; x_wconf 92 eng ltr Market   ocrx_word word_1_309 bbox 736 1180 864 1206; x_wconf 88 eng ltr participants   ocrx_word word_1_310 bbox 873 1185 926 1200; x_wconf 91 eng ltr were   ocrx_word word_1_311 bbox 936 1180 997 1206; x_wconf 90 eng ltr likely   ocrx_word word_1_312 bbox 1006 1182 1026 1200; x_wconf 90 eng ltr to

       ocr_line line_1_32 bbox 182 1212 1026 1238; baseline -0.001 -5; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_313 bbox 182 1212 266 1238; x_wconf 86 eng ltr respond   ocrx_word word_1_314 bbox 276 1214 296 1233; x_wconf 89 eng ltr to   ocrx_word word_1_315 bbox 305 1212 337 1233; x_wconf 89 eng ltr the   ocrx_word word_1_316 bbox 346 1212 416 1233; x_wconf 90 eng ltr failure   ocrx_word word_1_317 bbox 427 1212 447 1233; x_wconf 93 eng ltr of   ocrx_word word_1_318 bbox 458 1213 507 1233; x_wconf 93 eng ltr Bear   ocrx_word word_1_319 bbox 517 1213 597 1233; x_wconf 86 eng ltr Stearns   ocrx_word word_1_320 bbox 607 1212 632 1238; x_wconf 91 eng ltr by   ocrx_word word_1_321 bbox 640 1212 779 1238; x_wconf 89 eng ltr withdrawing   ocrx_word word_1_322 bbox 790 1212 892 1238; x_wconf 89 eng ltr generally   ocrx_word word_1_323 bbox 900 1212 950 1233; x_wconf 92 eng ltr from   ocrx_word word_1_324 bbox 963 1212 1026 1233; x_wconf 93 eng ltr short-

       ocr_line line_1_33 bbox 180 1244 971 1270; baseline 0 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_325 bbox 180 1246 229 1265; x_wconf 94 eng ltr term   ocrx_word word_1_326 bbox 239 1244 386 1265; x_wconf 90 eng ltr collateralized   ocrx_word word_1_327 bbox 396 1244 478 1270; x_wconf 90 eng ltr funding   ocrx_word word_1_328 bbox 492 1244 584 1268; x_wconf 89 eng ltr markets,   ocrx_word word_1_329 bbox 595 1244 688 1270; x_wconf 88 eng ltr resulting   ocrx_word word_1_330 bbox 700 1244 718 1264; x_wconf 95 eng ltr in   ocrx_word word_1_331 bbox 728 1249 739 1265; x_wconf 91 eng ltr a   ocrx_word word_1_332 bbox 747 1244 843 1265; x_wconf 90 eng ltr dramatic   ocrx_word word_1_333 bbox 852 1244 901 1270; x_wconf 90 eng ltr drop   ocrx_word word_1_334 bbox 911 1244 929 1264; x_wconf 98 eng ltr in   ocrx_word word_1_335 bbox 939 1244 971 1265; x_wconf 93 eng ltr the

       ocr_line line_1_34 bbox 181 1276 1010 1302; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_336 bbox 181 1276 255 1297; x_wconf 92 eng ltr overall   ocrx_word word_1_337 bbox 265 1276 389 1302; x_wconf 87 eng ltr availability   ocrx_word word_1_338 bbox 398 1276 419 1297; x_wconf 95 eng ltr of   ocrx_word word_1_339 bbox 429 1276 541 1297; x_wconf 92 eng ltr short-term   ocrx_word word_1_340 bbox 552 1276 660 1302; x_wconf 89 eng ltr financing,   ocrx_word word_1_341 bbox 672 1276 709 1297; x_wconf 94 eng ltr and   ocrx_word word_1_342 bbox 719 1276 792 1297; x_wconf 91 eng ltr threats   ocrx_word word_1_343 bbox 800 1278 821 1297; x_wconf 92 eng ltr to   ocrx_word word_1_344 bbox 829 1276 862 1297; x_wconf 92 eng ltr the   ocrx_word word_1_345 bbox 872 1276 964 1302; x_wconf 91 eng ltr liquidity   ocrx_word word_1_346 bbox 973 1276 1010 1297; x_wconf 90 eng ltr and

       ocr_line line_1_35 bbox 182 1308 923 1335; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_347 bbox 182 1308 272 1335; x_wconf 87 eng ltr possibly   ocrx_word word_1_348 bbox 281 1308 313 1329; x_wconf 93 eng ltr the   ocrx_word word_1_349 bbox 322 1308 419 1335; x_wconf 87 eng ltr solvency   ocrx_word word_1_350 bbox 429 1308 450 1329; x_wconf 92 eng ltr of   ocrx_word word_1_351 bbox 459 1308 514 1329; x_wconf 90 eng ltr other   ocrx_word word_1_352 bbox 525 1308 578 1335; x_wconf 89 eng ltr large   ocrx_word word_1_353 bbox 586 1308 624 1329; x_wconf 92 eng ltr and   ocrx_word word_1_354 bbox 635 1308 703 1335; x_wconf 92 eng ltr highly   ocrx_word word_1_355 bbox 714 1308 818 1335; x_wconf 89 eng ltr leveraged   ocrx_word word_1_356 bbox 831 1308 923 1329; x_wconf 89 eng ltr financial

       ocr_line line_1_36 bbox 182 1341 310 1361; baseline 0 0; x_size 25.869781; x_descenders 5.869782; x_ascenders 5  ocrx_word word_1_357 bbox 182 1341 310 1361; x_wconf 88 eng ltr institutions.










  page
  To address the imminent liquidity needs of Bear Stearns and forestall
 the potential systemic disruptions a default or bankruptcy of the company
 would cause in the already stressed credit markets, on Friday, March 14,
 2008, the Board determined that unusual and exigent circumstances existed
 and authorized the FRBNY to extend overnight credit to Bear Stearns
 through JPMorgan Chase Bank. The purpose of the loan was to ensure that
 Bear Stearns would meet its obligations as they came due on Friday. This
 would allow for time during the weekend for Bear Stearns to explore options
 with other financial institutions that might enable it to avoid bankruptcy and
 for policy makers to continue to seek ways to contain the risk to financial
 markets in the event no private-sector solution proved possible. The bridge
 loan provided on March 14, 2008, is the subject of a separate report being
 submitted under section 129 of the Emergency Economic Stabilization Act
 of 2008.

  Despite the receipt by Bear Stearns of Federal Reserve funding on
 March 14, market pressures on Bear Stearns worsened throughout the day on
 March 14 and continued to worsen during the weekend. In light of the
 further erosion of confidence in Bear Stearns over the weekend by its chief
 short-term liquidity providers and capital markets transaction counterparties,
 Bear Stearns likely would have been unable to avoid bankruptcy on
 Monday, March 17, without either very large injections of liquidity from the
 Federal Reserve or an acquisition of Bear Stearns by a stronger firm.

  During the period from March 13 through March 16, Bear Stearns
 actively sought both capital injections and acquisition partners. JPMC
 emerged as the only viable bidder for Bear Stearns on Sunday, March 16.
 Bear Stearns determined that only JPMC offered a credible proposal that
 would allow Bear Stearns to meet its obligations beginning Monday,
 March 17. Accordingly, on Sunday, March 16, Bear Stearns accepted the
 offer to merge with JPMC.

  JPMC believed that it would be unable to acquire Bear Stearns,
 however, if it were required to obtain funding in the strained credit markets
 for a specified portfolio of less liquid assets of Bear Stearns. Bear Stearns
 itself was unable to secure adequate credit accommodations for those assets
 from private sources. Because no other funding source for these assets
 appeared available, emergency financing from the Federal Reserve with
 respect to those assets was necessary to facilitate JPMC’s prompt acquisition
 of Bear Stearns, which would alleviate the intense strains in the credit

  ocr







    ocr_page page_1 image "/tmp/apache-tika-1651949609685181262.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 180 150 1041 588
      ocr_par ltr par_1_1 bbox 180 150 1041 588
       ocr_line line_1_1 bbox 252 150 1025 176; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_1 bbox 252 151 282 170; x_wconf 92 eng ltr To   ocrx_word word_1_2 bbox 291 150 373 170; x_wconf 83 eng ltr address   ocrx_word word_1_3 bbox 381 150 414 170; x_wconf 95 eng ltr the   ocrx_word word_1_4 bbox 425 150 528 170; x_wconf 82 eng ltr imminent   ocrx_word word_1_5 bbox 539 150 630 176; x_wconf 94 eng ltr liquidity   ocrx_word word_1_6 bbox 640 150 701 170; x_wconf 86 eng ltr needs   ocrx_word word_1_7 bbox 710 150 731 170; x_wconf 93 eng ltr of   ocrx_word word_1_8 bbox 741 151 791 170; x_wconf 90 eng ltr Bear   ocrx_word word_1_9 bbox 800 150 881 170; x_wconf 86 eng ltr Stearns   ocrx_word word_1_10 bbox 889 150 927 170; x_wconf 96 eng ltr and   ocrx_word word_1_11 bbox 939 150 1025 170; x_wconf 78 eng ltr forestall

       ocr_line line_1_2 bbox 180 182 1003 208; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_12 bbox 180 182 213 202; x_wconf 94 eng ltr the   ocrx_word word_1_13 bbox 223 182 316 208; x_wconf 84 eng ltr potential   ocrx_word word_1_14 bbox 327 182 422 208; x_wconf 86 eng ltr systemic   ocrx_word word_1_15 bbox 432 182 554 208; x_wconf 83 eng ltr disruptions   ocrx_word word_1_16 bbox 563 187 575 202; x_wconf 95 eng ltr a   ocrx_word word_1_17 bbox 583 182 657 202; x_wconf 83 eng ltr default   ocrx_word word_1_18 bbox 668 187 689 202; x_wconf 91 eng ltr or   ocrx_word word_1_19 bbox 698 182 821 208; x_wconf 87 eng ltr bankruptcy   ocrx_word word_1_20 bbox 831 182 851 202; x_wconf 92 eng ltr of   ocrx_word word_1_21 bbox 860 182 893 202; x_wconf 91 eng ltr the   ocrx_word word_1_22 bbox 903 187 1003 208; x_wconf 88 eng ltr company

       ocr_line line_1_3 bbox 180 214 990 240; baseline -0.001 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_23 bbox 180 214 247 235; x_wconf 91 eng ltr would   ocrx_word word_1_24 bbox 258 219 318 235; x_wconf 86 eng ltr cause   ocrx_word word_1_25 bbox 328 214 346 234; x_wconf 96 eng ltr in   ocrx_word word_1_26 bbox 355 214 388 235; x_wconf 85 eng ltr the   ocrx_word word_1_27 bbox 397 214 477 240; x_wconf 86 eng ltr already   ocrx_word word_1_28 bbox 486 214 571 235; x_wconf 85 eng ltr stressed   ocrx_word word_1_29 bbox 582 214 643 235; x_wconf 86 eng ltr credit   ocrx_word word_1_30 bbox 653 214 746 238; x_wconf 94 eng ltr markets,   ocrx_word word_1_31 bbox 755 219 780 235; x_wconf 93 eng ltr on   ocrx_word word_1_32 bbox 791 214 867 240; x_wconf 90 eng ltr Friday,   ocrx_word word_1_33 bbox 879 214 947 235; x_wconf 92 eng ltr March   ocrx_word word_1_34 bbox 958 215 990 238; x_wconf 92 eng 14,

       ocr_line line_1_4 bbox 181 246 1022 272; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_35 bbox 181 247 241 270; x_wconf 88 eng 2008,   ocrx_word word_1_36 bbox 250 246 283 267; x_wconf 91 eng ltr the   ocrx_word word_1_37 bbox 294 246 357 267; x_wconf 85 eng ltr Board   ocrx_word word_1_38 bbox 368 246 489 267; x_wconf 88 eng ltr determined   ocrx_word word_1_39 bbox 500 246 540 267; x_wconf 86 eng ltr that   ocrx_word word_1_40 bbox 550 246 632 267; x_wconf 88 eng ltr unusual   ocrx_word word_1_41 bbox 644 246 681 267; x_wconf 88 eng ltr and   ocrx_word word_1_42 bbox 691 246 771 272; x_wconf 90 eng ltr exigent   ocrx_word word_1_43 bbox 780 246 936 267; x_wconf 84 eng ltr circumstances   ocrx_word word_1_44 bbox 947 246 1022 267; x_wconf 89 eng ltr existed

       ocr_line line_1_5 bbox 181 278 960 304; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 6  ocrx_word word_1_45 bbox 181 278 218 299; x_wconf 91 eng ltr and   ocrx_word word_1_46 bbox 228 278 342 299; x_wconf 90 eng ltr authorized   ocrx_word word_1_47 bbox 353 278 386 299; x_wconf 90 eng ltr the   ocrx_word word_1_48 bbox 396 279 485 299; x_wconf 91 eng ltr FRBNY   ocrx_word word_1_49 bbox 494 280 515 299; x_wconf 90 eng ltr to   ocrx_word word_1_50 bbox 524 278 595 299; x_wconf 89 eng ltr extend   ocrx_word word_1_51 bbox 605 278 710 304; x_wconf 89 eng ltr overnight   ocrx_word word_1_52 bbox 719 278 781 299; x_wconf 85 eng ltr credit   ocrx_word word_1_53 bbox 790 280 810 299; x_wconf 88 eng ltr to   ocrx_word word_1_54 bbox 821 279 870 299; x_wconf 91 eng ltr Bear   ocrx_word word_1_55 bbox 880 279 960 299; x_wconf 88 eng ltr Stearns

       ocr_line line_1_6 bbox 180 310 1025 337; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_56 bbox 180 310 265 337; x_wconf 88 eng ltr through   ocrx_word word_1_57 bbox 274 311 386 337; x_wconf 81 eng ltr JPMorgan   ocrx_word word_1_58 bbox 397 310 463 331; x_wconf 91 eng ltr Chase   ocrx_word word_1_59 bbox 474 310 536 331; x_wconf 92 eng ltr Bank.   ocrx_word word_1_60 bbox 552 310 594 331; x_wconf 94 eng ltr The   ocrx_word word_1_61 bbox 604 316 689 337; x_wconf 87 eng ltr purpose   ocrx_word word_1_62 bbox 699 310 720 331; x_wconf 92 eng ltr of   ocrx_word word_1_63 bbox 728 310 761 331; x_wconf 93 eng ltr the   ocrx_word word_1_64 bbox 772 310 815 331; x_wconf 88 eng ltr loan   ocrx_word word_1_65 bbox 825 316 867 331; x_wconf 87 eng ltr was   ocrx_word word_1_66 bbox 875 313 896 331; x_wconf 88 eng ltr to   ocrx_word word_1_67 bbox 905 316 975 331; x_wconf 87 eng ltr ensure   ocrx_word word_1_68 bbox 985 310 1025 331; x_wconf 88 eng ltr that

       ocr_line line_1_7 bbox 182 343 1010 369; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_69 bbox 182 344 231 363; x_wconf 92 eng ltr Bear   ocrx_word word_1_70 bbox 241 343 321 363; x_wconf 88 eng ltr Stearns   ocrx_word word_1_71 bbox 329 343 397 363; x_wconf 91 eng ltr would   ocrx_word word_1_72 bbox 408 345 459 363; x_wconf 89 eng ltr meet   ocrx_word word_1_73 bbox 470 343 493 363; x_wconf 88 eng ltr its   ocrx_word word_1_74 bbox 502 343 624 369; x_wconf 92 eng ltr obligations   ocrx_word word_1_75 bbox 633 348 655 363; x_wconf 90 eng ltr as   ocrx_word word_1_76 bbox 663 343 710 369; x_wconf 93 eng ltr they   ocrx_word word_1_77 bbox 719 348 776 363; x_wconf 93 eng ltr came   ocrx_word word_1_78 bbox 785 343 823 363; x_wconf 93 eng ltr due   ocrx_word word_1_79 bbox 832 348 857 363; x_wconf 91 eng ltr on   ocrx_word word_1_80 bbox 868 343 945 369; x_wconf 91 eng ltr Friday.   ocrx_word word_1_81 bbox 962 343 1010 363; x_wconf 92 eng ltr This

       ocr_line line_1_8 bbox 180 375 1041 401; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_82 bbox 180 375 247 395; x_wconf 92 eng ltr would   ocrx_word word_1_83 bbox 258 375 318 395; x_wconf 94 eng ltr allow   ocrx_word word_1_84 bbox 327 375 357 395; x_wconf 95 eng ltr for   ocrx_word word_1_85 bbox 366 375 414 395; x_wconf 89 eng ltr time   ocrx_word word_1_86 bbox 423 375 493 401; x_wconf 89 eng ltr during   ocrx_word word_1_87 bbox 503 375 536 395; x_wconf 90 eng ltr the   ocrx_word word_1_88 bbox 544 375 641 395; x_wconf 89 eng ltr weekend   ocrx_word word_1_89 bbox 651 375 681 395; x_wconf 95 eng ltr for   ocrx_word word_1_90 bbox 692 376 742 395; x_wconf 92 eng ltr Bear   ocrx_word word_1_91 bbox 751 375 831 395; x_wconf 87 eng ltr Stearns   ocrx_word word_1_92 bbox 840 377 860 395; x_wconf 92 eng ltr to   ocrx_word word_1_93 bbox 869 375 951 401; x_wconf 90 eng ltr explore   ocrx_word word_1_94 bbox 961 375 1041 401; x_wconf 89 eng ltr options

       ocr_line line_1_9 bbox 180 407 1031 433; baseline 0.001 -6; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_95 bbox 180 407 228 428; x_wconf 92 eng ltr with   ocrx_word word_1_96 bbox 238 407 293 428; x_wconf 83 eng ltr other   ocrx_word word_1_97 bbox 302 407 394 428; x_wconf 87 eng ltr financial   ocrx_word word_1_98 bbox 408 407 529 428; x_wconf 86 eng ltr institutions   ocrx_word word_1_99 bbox 538 407 579 428; x_wconf 91 eng ltr that   ocrx_word word_1_100 bbox 588 407 651 433; x_wconf 87 eng ltr might   ocrx_word word_1_101 bbox 660 407 731 428; x_wconf 87 eng ltr enable   ocrx_word word_1_102 bbox 741 407 754 428; x_wconf 91 eng ltr it   ocrx_word word_1_103 bbox 762 409 782 428; x_wconf 91 eng ltr to   ocrx_word word_1_104 bbox 791 407 850 428; x_wconf 92 eng ltr avoid   ocrx_word word_1_105 bbox 861 407 983 433; x_wconf 87 eng ltr bankruptcy   ocrx_word word_1_106 bbox 994 407 1031 428; x_wconf 90 eng ltr and

       ocr_line line_1_10 bbox 180 439 1000 465; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_107 bbox 180 439 210 460; x_wconf 93 eng ltr for   ocrx_word word_1_108 bbox 221 439 288 465; x_wconf 87 eng ltr policy   ocrx_word word_1_109 bbox 298 439 376 460; x_wconf 87 eng ltr makers   ocrx_word word_1_110 bbox 385 441 405 460; x_wconf 96 eng ltr to   ocrx_word word_1_111 bbox 414 439 508 460; x_wconf 92 eng ltr continue   ocrx_word word_1_112 bbox 517 441 537 460; x_wconf 94 eng ltr to   ocrx_word word_1_113 bbox 546 439 594 460; x_wconf 92 eng ltr seek   ocrx_word word_1_114 bbox 602 444 659 465; x_wconf 86 eng ltr ways   ocrx_word word_1_115 bbox 667 441 687 460; x_wconf 91 eng ltr to   ocrx_word word_1_116 bbox 696 439 775 460; x_wconf 89 eng ltr contain   ocrx_word word_1_117 bbox 785 439 818 460; x_wconf 91 eng ltr the   ocrx_word word_1_118 bbox 828 439 866 460; x_wconf 91 eng ltr risk   ocrx_word word_1_119 bbox 875 441 896 460; x_wconf 89 eng ltr to   ocrx_word word_1_120 bbox 907 439 1000 460; x_wconf 90 eng ltr financial

       ocr_line line_1_11 bbox 182 471 1025 497; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_121 bbox 182 471 268 492; x_wconf 87 eng ltr markets   ocrx_word word_1_122 bbox 278 471 295 492; x_wconf 94 eng ltr in   ocrx_word word_1_123 bbox 305 471 337 492; x_wconf 92 eng ltr the   ocrx_word word_1_124 bbox 346 473 405 492; x_wconf 91 eng ltr event   ocrx_word word_1_125 bbox 415 476 440 492; x_wconf 94 eng ltr no   ocrx_word word_1_126 bbox 450 471 599 497; x_wconf 89 eng ltr private-sector   ocrx_word word_1_127 bbox 610 471 697 492; x_wconf 89 eng ltr solution   ocrx_word word_1_128 bbox 708 471 781 497; x_wconf 90 eng ltr proved   ocrx_word word_1_129 bbox 793 471 889 497; x_wconf 90 eng ltr possible.   ocrx_word word_1_130 bbox 904 471 946 492; x_wconf 92 eng ltr The   ocrx_word word_1_131 bbox 957 471 1025 497; x_wconf 89 eng ltr bridge

       ocr_line line_1_12 bbox 182 503 1005 530; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_132 bbox 182 503 226 524; x_wconf 94 eng ltr loan   ocrx_word word_1_133 bbox 237 503 331 530; x_wconf 91 eng ltr provided   ocrx_word word_1_134 bbox 343 509 368 524; x_wconf 93 eng ltr on   ocrx_word word_1_135 bbox 379 503 447 524; x_wconf 92 eng ltr March   ocrx_word word_1_136 bbox 459 504 491 527; x_wconf 90 eng 14,   ocrx_word word_1_137 bbox 500 504 561 527; x_wconf 88 eng 2008,   ocrx_word word_1_138 bbox 571 503 587 524; x_wconf 92 eng ltr is   ocrx_word word_1_139 bbox 595 503 628 524; x_wconf 90 eng ltr the   ocrx_word word_1_140 bbox 636 503 713 530; x_wconf 87 eng ltr subject   ocrx_word word_1_141 bbox 723 503 744 524; x_wconf 92 eng ltr of   ocrx_word word_1_142 bbox 753 509 764 524; x_wconf 90 eng ltr a   ocrx_word word_1_143 bbox 772 506 862 530; x_wconf 90 eng ltr separate   ocrx_word word_1_144 bbox 872 506 936 530; x_wconf 91 eng ltr report   ocrx_word word_1_145 bbox 946 503 1005 530; x_wconf 89 eng ltr being

       ocr_line line_1_13 bbox 181 536 1018 562; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_146 bbox 181 536 287 556; x_wconf 87 eng ltr submitted   ocrx_word word_1_147 bbox 299 536 359 556; x_wconf 93 eng ltr under   ocrx_word word_1_148 bbox 369 536 445 556; x_wconf 91 eng ltr section   ocrx_word word_1_149 bbox 456 536 496 556; x_wconf 88 eng 129   ocrx_word word_1_150 bbox 504 536 525 556; x_wconf 94 eng ltr of   ocrx_word word_1_151 bbox 534 536 567 556; x_wconf 90 eng ltr the   ocrx_word word_1_152 bbox 577 537 701 562; x_wconf 90 eng ltr Emergency   ocrx_word word_1_153 bbox 711 536 821 556; x_wconf 90 eng ltr Economic   ocrx_word word_1_154 bbox 831 536 968 556; x_wconf 85 eng ltr Stabilization   ocrx_word word_1_155 bbox 979 537 1018 556; x_wconf 92 eng ltr Act

       ocr_line line_1_14 bbox 181 568 272 588; baseline 0 0; x_size 27.659836; x_descenders 6.2397957; x_ascenders 5.6385713  ocrx_word word_1_156 bbox 181 568 202 588; x_wconf 91 eng ltr of   ocrx_word word_1_157 bbox 211 568 272 588; x_wconf 90 eng 2008.





     ocr_carea block_1_2 bbox 180 633 1041 884
      ocr_par ltr par_1_2 bbox 180 633 1041 884
       ocr_line line_1_15 bbox 254 633 992 659; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_158 bbox 254 633 336 659; x_wconf 86 eng ltr Despite   ocrx_word word_1_159 bbox 345 633 378 653; x_wconf 93 eng ltr the   ocrx_word word_1_160 bbox 388 633 460 659; x_wconf 91 eng ltr receipt   ocrx_word word_1_161 bbox 470 633 496 659; x_wconf 94 eng ltr by   ocrx_word word_1_162 bbox 506 634 555 653; x_wconf 92 eng ltr Bear   ocrx_word word_1_163 bbox 565 633 645 653; x_wconf 88 eng ltr Stearns   ocrx_word word_1_164 bbox 654 633 675 653; x_wconf 92 eng ltr of   ocrx_word word_1_165 bbox 685 633 764 653; x_wconf 89 eng ltr Federal   ocrx_word word_1_166 bbox 777 634 863 653; x_wconf 88 eng ltr Reserve   ocrx_word word_1_167 bbox 872 633 954 659; x_wconf 91 eng ltr funding   ocrx_word word_1_168 bbox 967 638 992 653; x_wconf 90 eng ltr on

       ocr_line line_1_16 bbox 182 665 1041 691; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_169 bbox 182 665 250 685; x_wconf 91 eng ltr March   ocrx_word word_1_170 bbox 262 666 294 689; x_wconf 92 eng 14,   ocrx_word word_1_171 bbox 304 665 378 685; x_wconf 93 eng ltr market   ocrx_word word_1_172 bbox 388 670 490 691; x_wconf 87 eng ltr pressures   ocrx_word word_1_173 bbox 499 670 524 685; x_wconf 91 eng ltr on   ocrx_word word_1_174 bbox 535 666 584 685; x_wconf 90 eng ltr Bear   ocrx_word word_1_175 bbox 594 665 674 685; x_wconf 86 eng ltr Stearns   ocrx_word word_1_176 bbox 682 665 786 685; x_wconf 93 eng ltr worsened   ocrx_word word_1_177 bbox 797 665 917 691; x_wconf 89 eng ltr throughout   ocrx_word word_1_178 bbox 927 665 959 685; x_wconf 90 eng ltr the   ocrx_word word_1_179 bbox 969 665 1007 691; x_wconf 93 eng ltr day   ocrx_word word_1_180 bbox 1016 670 1041 685; x_wconf 95 eng ltr on

       ocr_line line_1_17 bbox 182 697 971 723; baseline -0.001 -5; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_181 bbox 182 697 250 718; x_wconf 88 eng ltr March   ocrx_word word_1_182 bbox 262 698 287 717; x_wconf 92 eng 14   ocrx_word word_1_183 bbox 296 697 333 718; x_wconf 93 eng ltr and   ocrx_word word_1_184 bbox 344 697 450 718; x_wconf 89 eng ltr continued   ocrx_word word_1_185 bbox 460 699 481 718; x_wconf 94 eng ltr to   ocrx_word word_1_186 bbox 489 702 567 718; x_wconf 89 eng ltr worsen   ocrx_word word_1_187 bbox 577 697 647 723; x_wconf 94 eng ltr during   ocrx_word word_1_188 bbox 657 697 690 718; x_wconf 93 eng ltr the   ocrx_word word_1_189 bbox 698 697 802 718; x_wconf 92 eng ltr weekend.   ocrx_word word_1_190 bbox 821 698 840 717; x_wconf 98 eng ltr In   ocrx_word word_1_191 bbox 851 697 899 723; x_wconf 89 eng ltr light   ocrx_word word_1_192 bbox 908 697 928 718; x_wconf 88 eng ltr of   ocrx_word word_1_193 bbox 938 697 971 718; x_wconf 93 eng ltr the

       ocr_line line_1_18 bbox 180 729 1016 755; baseline 0 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_194 bbox 180 729 252 750; x_wconf 91 eng ltr further   ocrx_word word_1_195 bbox 264 729 343 750; x_wconf 91 eng ltr erosion   ocrx_word word_1_196 bbox 353 729 374 750; x_wconf 95 eng ltr of   ocrx_word word_1_197 bbox 383 729 502 750; x_wconf 89 eng ltr confidence   ocrx_word word_1_198 bbox 515 729 532 749; x_wconf 94 eng ltr in   ocrx_word word_1_199 bbox 544 730 593 750; x_wconf 91 eng ltr Bear   ocrx_word word_1_200 bbox 603 730 682 750; x_wconf 86 eng ltr Stearns   ocrx_word word_1_201 bbox 692 734 739 750; x_wconf 92 eng ltr over   ocrx_word word_1_202 bbox 748 729 780 750; x_wconf 93 eng ltr the   ocrx_word word_1_203 bbox 789 729 885 750; x_wconf 92 eng ltr weekend   ocrx_word word_1_204 bbox 897 729 922 755; x_wconf 89 eng ltr by   ocrx_word word_1_205 bbox 932 729 956 750; x_wconf 92 eng ltr its   ocrx_word word_1_206 bbox 964 729 1016 750; x_wconf 88 eng ltr chief

       ocr_line line_1_19 bbox 181 761 1037 787; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_207 bbox 181 761 293 782; x_wconf 91 eng ltr short-term   ocrx_word word_1_208 bbox 306 761 397 787; x_wconf 88 eng ltr liquidity   ocrx_word word_1_209 bbox 407 761 510 787; x_wconf 87 eng ltr providers   ocrx_word word_1_210 bbox 519 761 556 782; x_wconf 91 eng ltr and   ocrx_word word_1_211 bbox 566 761 637 787; x_wconf 88 eng ltr capital   ocrx_word word_1_212 bbox 649 761 735 782; x_wconf 87 eng ltr markets   ocrx_word word_1_213 bbox 743 761 863 782; x_wconf 90 eng ltr transaction   ocrx_word word_1_214 bbox 875 761 1037 787; x_wconf 89 eng ltr counterparties,

       ocr_line line_1_20 bbox 182 793 935 820; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_215 bbox 182 794 231 814; x_wconf 92 eng ltr Bear   ocrx_word word_1_216 bbox 241 794 321 814; x_wconf 83 eng ltr Stearns   ocrx_word word_1_217 bbox 331 793 392 820; x_wconf 92 eng ltr likely   ocrx_word word_1_218 bbox 400 793 467 814; x_wconf 91 eng ltr would   ocrx_word word_1_219 bbox 479 793 529 814; x_wconf 90 eng ltr have   ocrx_word word_1_220 bbox 538 793 587 814; x_wconf 87 eng ltr been   ocrx_word word_1_221 bbox 598 793 670 814; x_wconf 90 eng ltr unable   ocrx_word word_1_222 bbox 679 795 699 814; x_wconf 92 eng ltr to   ocrx_word word_1_223 bbox 708 793 767 814; x_wconf 90 eng ltr avoid   ocrx_word word_1_224 bbox 778 793 900 820; x_wconf 89 eng ltr bankruptcy   ocrx_word word_1_225 bbox 910 799 935 814; x_wconf 88 eng ltr on

       ocr_line line_1_21 bbox 182 825 1035 852; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_226 bbox 182 825 278 852; x_wconf 91 eng ltr Monday,   ocrx_word word_1_227 bbox 290 825 358 846; x_wconf 91 eng ltr March   ocrx_word word_1_228 bbox 369 826 401 849; x_wconf 90 eng 17,   ocrx_word word_1_229 bbox 409 825 493 846; x_wconf 91 eng ltr without   ocrx_word word_1_230 bbox 503 825 564 846; x_wconf 92 eng ltr either   ocrx_word word_1_231 bbox 573 831 622 852; x_wconf 89 eng ltr very   ocrx_word word_1_232 bbox 631 825 684 852; x_wconf 88 eng ltr large   ocrx_word word_1_233 bbox 694 825 798 852; x_wconf 88 eng ltr injections   ocrx_word word_1_234 bbox 809 826 830 846; x_wconf 90 eng ltr of   ocrx_word word_1_235 bbox 841 825 932 852; x_wconf 91 eng ltr liquidity   ocrx_word word_1_236 bbox 941 826 990 846; x_wconf 91 eng ltr from   ocrx_word word_1_237 bbox 1002 825 1035 846; x_wconf 92 eng ltr the

       ocr_line line_1_22 bbox 182 858 949 884; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_238 bbox 182 858 261 878; x_wconf 88 eng ltr Federal   ocrx_word word_1_239 bbox 273 859 359 878; x_wconf 88 eng ltr Reserve   ocrx_word word_1_240 bbox 369 863 390 878; x_wconf 92 eng ltr or   ocrx_word word_1_241 bbox 399 863 423 878; x_wconf 99 eng ltr an   ocrx_word word_1_242 bbox 433 858 552 884; x_wconf 87 eng ltr acquisition   ocrx_word word_1_243 bbox 563 858 583 878; x_wconf 98 eng ltr of   ocrx_word word_1_244 bbox 594 859 644 878; x_wconf 93 eng ltr Bear   ocrx_word word_1_245 bbox 653 858 733 878; x_wconf 87 eng ltr Stearns   ocrx_word word_1_246 bbox 743 858 769 884; x_wconf 90 eng ltr by   ocrx_word word_1_247 bbox 777 863 789 878; x_wconf 88 eng ltr a   ocrx_word word_1_248 bbox 797 860 886 884; x_wconf 90 eng ltr stronger   ocrx_word word_1_249 bbox 897 858 949 878; x_wconf 96 eng ltr firm.





     ocr_carea block_1_3 bbox 180 922 1005 1141
      ocr_par ltr par_1_3 bbox 180 922 1005 1141
       ocr_line line_1_23 bbox 254 922 993 948; baseline 0.001 -6; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_250 bbox 254 922 329 948; x_wconf 87 eng ltr During   ocrx_word word_1_251 bbox 339 922 371 943; x_wconf 92 eng ltr the   ocrx_word word_1_252 bbox 381 922 448 948; x_wconf 90 eng ltr period   ocrx_word word_1_253 bbox 458 922 508 943; x_wconf 94 eng ltr from   ocrx_word word_1_254 bbox 522 922 590 943; x_wconf 88 eng ltr March   ocrx_word word_1_255 bbox 601 923 627 943; x_wconf 86 eng 13   ocrx_word word_1_256 bbox 635 922 719 948; x_wconf 91 eng ltr through   ocrx_word word_1_257 bbox 731 922 799 943; x_wconf 91 eng ltr March   ocrx_word word_1_258 bbox 811 923 843 946; x_wconf 86 eng 16,   ocrx_word word_1_259 bbox 853 923 902 943; x_wconf 91 eng ltr Bear   ocrx_word word_1_260 bbox 913 923 993 943; x_wconf 85 eng ltr Stearns

       ocr_line line_1_24 bbox 181 954 969 980; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_261 bbox 181 954 267 980; x_wconf 89 eng ltr actively   ocrx_word word_1_262 bbox 276 954 349 980; x_wconf 93 eng ltr sought   ocrx_word word_1_263 bbox 359 954 405 975; x_wconf 89 eng ltr both   ocrx_word word_1_264 bbox 415 954 486 980; x_wconf 88 eng ltr capital   ocrx_word word_1_265 bbox 498 954 601 980; x_wconf 91 eng ltr injections   ocrx_word word_1_266 bbox 612 954 649 975; x_wconf 91 eng ltr and   ocrx_word word_1_267 bbox 659 954 778 980; x_wconf 88 eng ltr acquisition   ocrx_word word_1_268 bbox 790 956 885 980; x_wconf 88 eng ltr partners.   ocrx_word word_1_269 bbox 901 955 969 975; x_wconf 88 eng ltr JPMC

       ocr_line line_1_25 bbox 181 986 1002 1012; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_270 bbox 181 986 273 1012; x_wconf 90 eng ltr emerged   ocrx_word word_1_271 bbox 284 991 306 1007; x_wconf 88 eng ltr as   ocrx_word word_1_272 bbox 314 986 347 1007; x_wconf 91 eng ltr the   ocrx_word word_1_273 bbox 356 986 404 1012; x_wconf 92 eng ltr only   ocrx_word word_1_274 bbox 412 986 479 1007; x_wconf 89 eng ltr viable   ocrx_word word_1_275 bbox 489 986 557 1007; x_wconf 89 eng ltr bidder   ocrx_word word_1_276 bbox 566 986 596 1007; x_wconf 93 eng ltr for   ocrx_word word_1_277 bbox 607 987 657 1007; x_wconf 90 eng ltr Bear   ocrx_word word_1_278 bbox 666 987 747 1007; x_wconf 89 eng ltr Stearns   ocrx_word word_1_279 bbox 755 991 781 1007; x_wconf 90 eng ltr on   ocrx_word word_1_280 bbox 791 986 879 1012; x_wconf 88 eng ltr Sunday,   ocrx_word word_1_281 bbox 890 986 958 1007; x_wconf 91 eng ltr March   ocrx_word word_1_282 bbox 969 987 1002 1007; x_wconf 86 eng 16.

       ocr_line line_1_26 bbox 182 1018 994 1045; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_283 bbox 182 1019 231 1039; x_wconf 91 eng ltr Bear   ocrx_word word_1_284 bbox 241 1019 321 1039; x_wconf 81 eng ltr Stearns   ocrx_word word_1_285 bbox 330 1018 452 1039; x_wconf 91 eng ltr determined   ocrx_word word_1_286 bbox 463 1018 503 1039; x_wconf 93 eng ltr that   ocrx_word word_1_287 bbox 512 1018 560 1045; x_wconf 90 eng ltr only   ocrx_word word_1_288 bbox 568 1019 636 1039; x_wconf 83 eng ltr JPMC   ocrx_word word_1_289 bbox 646 1018 720 1039; x_wconf 87 eng ltr offered   ocrx_word word_1_290 bbox 733 1024 745 1039; x_wconf 96 eng ltr a   ocrx_word word_1_291 bbox 753 1018 841 1039; x_wconf 90 eng ltr credible   ocrx_word word_1_292 bbox 851 1018 942 1045; x_wconf 90 eng ltr proposal   ocrx_word word_1_293 bbox 953 1018 994 1039; x_wconf 86 eng ltr that

       ocr_line line_1_27 bbox 180 1051 949 1077; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_294 bbox 180 1051 247 1071; x_wconf 93 eng ltr would   ocrx_word word_1_295 bbox 258 1051 318 1071; x_wconf 94 eng ltr allow   ocrx_word word_1_296 bbox 329 1052 378 1071; x_wconf 91 eng ltr Bear   ocrx_word word_1_297 bbox 387 1051 467 1071; x_wconf 86 eng ltr Stearns   ocrx_word word_1_298 bbox 475 1053 496 1071; x_wconf 93 eng ltr to   ocrx_word word_1_299 bbox 506 1053 558 1071; x_wconf 95 eng ltr meet   ocrx_word word_1_300 bbox 568 1051 591 1071; x_wconf 96 eng ltr its   ocrx_word word_1_301 bbox 600 1051 722 1077; x_wconf 87 eng ltr obligations   ocrx_word word_1_302 bbox 732 1051 840 1077; x_wconf 89 eng ltr beginning   ocrx_word word_1_303 bbox 853 1051 949 1077; x_wconf 91 eng ltr Monday,

       ocr_line line_1_28 bbox 182 1083 1005 1109; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_304 bbox 182 1083 250 1103; x_wconf 90 eng ltr March   ocrx_word word_1_305 bbox 262 1084 295 1103; x_wconf 93 eng 17.   ocrx_word word_1_306 bbox 309 1083 453 1109; x_wconf 88 eng ltr Accordingly,   ocrx_word word_1_307 bbox 464 1088 489 1103; x_wconf 93 eng ltr on   ocrx_word word_1_308 bbox 499 1083 587 1109; x_wconf 87 eng ltr Sunday,   ocrx_word word_1_309 bbox 598 1083 667 1103; x_wconf 91 eng ltr March   ocrx_word word_1_310 bbox 678 1083 710 1107; x_wconf 87 eng 16,   ocrx_word word_1_311 bbox 720 1084 769 1103; x_wconf 92 eng ltr Bear   ocrx_word word_1_312 bbox 779 1083 859 1103; x_wconf 89 eng ltr Stearns   ocrx_word word_1_313 bbox 868 1083 962 1109; x_wconf 88 eng ltr accepted   ocrx_word word_1_314 bbox 973 1083 1005 1103; x_wconf 88 eng ltr the

       ocr_line line_1_29 bbox 181 1115 480 1141; baseline -0.003 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_315 bbox 181 1115 230 1136; x_wconf 93 eng ltr offer   ocrx_word word_1_316 bbox 242 1117 262 1136; x_wconf 92 eng ltr to   ocrx_word word_1_317 bbox 272 1120 339 1141; x_wconf 86 eng ltr merge   ocrx_word word_1_318 bbox 347 1115 395 1136; x_wconf 92 eng ltr with   ocrx_word word_1_319 bbox 405 1116 480 1136; x_wconf 88 eng ltr JPMC.





     ocr_carea block_1_4 bbox 180 1180 1040 1429
      ocr_par ltr par_1_4 bbox 180 1180 1040 1429
       ocr_line line_1_30 bbox 252 1180 961 1206; baseline 0 -6; x_size 24; x_descenders 4; x_ascenders 5  ocrx_word word_1_320 bbox 252 1180 321 1200; x_wconf 83 eng ltr JPMC   ocrx_word word_1_321 bbox 330 1180 421 1200; x_wconf 90 eng ltr believed   ocrx_word word_1_322 bbox 431 1180 472 1200; x_wconf 93 eng ltr that   ocrx_word word_1_323 bbox 482 1180 495 1200; x_wconf 94 eng ltr it   ocrx_word word_1_324 bbox 503 1180 569 1200; x_wconf 92 eng ltr would   ocrx_word word_1_325 bbox 581 1180 605 1200; x_wconf 96 eng ltr be   ocrx_word word_1_326 bbox 614 1180 686 1200; x_wconf 95 eng ltr unable   ocrx_word word_1_327 bbox 694 1182 715 1200; x_wconf 91 eng ltr to   ocrx_word word_1_328 bbox 724 1180 804 1206; x_wconf 89 eng ltr acquire   ocrx_word word_1_329 bbox 815 1181 864 1200; x_wconf 89 eng ltr Bear   ocrx_word word_1_330 bbox 873 1180 961 1204; x_wconf 88 eng ltr Stearns,

       ocr_line line_1_31 bbox 182 1212 1024 1238; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_331 bbox 182 1212 281 1236; x_wconf 91 eng ltr however,   ocrx_word word_1_332 bbox 293 1212 306 1232; x_wconf 98 eng ltr if   ocrx_word word_1_333 bbox 317 1212 329 1232; x_wconf 97 eng ltr it   ocrx_word word_1_334 bbox 337 1217 390 1233; x_wconf 92 eng ltr were   ocrx_word word_1_335 bbox 400 1212 488 1238; x_wconf 88 eng ltr required   ocrx_word word_1_336 bbox 499 1214 519 1233; x_wconf 91 eng ltr to   ocrx_word word_1_337 bbox 528 1212 595 1233; x_wconf 89 eng ltr obtain   ocrx_word word_1_338 bbox 605 1212 687 1238; x_wconf 89 eng ltr funding   ocrx_word word_1_339 bbox 701 1212 719 1232; x_wconf 97 eng ltr in   ocrx_word word_1_340 bbox 727 1212 761 1233; x_wconf 91 eng ltr the   ocrx_word word_1_341 bbox 769 1212 854 1233; x_wconf 90 eng ltr strained   ocrx_word word_1_342 bbox 865 1212 927 1233; x_wconf 93 eng ltr credit   ocrx_word word_1_343 bbox 938 1212 1024 1233; x_wconf 90 eng ltr markets

       ocr_line line_1_32 bbox 180 1244 1012 1270; baseline 0 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_344 bbox 180 1244 210 1265; x_wconf 92 eng ltr for   ocrx_word word_1_345 bbox 221 1249 232 1265; x_wconf 89 eng ltr a   ocrx_word word_1_346 bbox 240 1244 335 1270; x_wconf 88 eng ltr specified   ocrx_word word_1_347 bbox 349 1244 442 1270; x_wconf 87 eng ltr portfolio   ocrx_word word_1_348 bbox 453 1244 474 1265; x_wconf 90 eng ltr of   ocrx_word word_1_349 bbox 485 1244 524 1265; x_wconf 89 eng ltr less   ocrx_word word_1_350 bbox 534 1244 594 1270; x_wconf 92 eng ltr liquid   ocrx_word word_1_351 bbox 605 1246 668 1265; x_wconf 89 eng ltr assets   ocrx_word word_1_352 bbox 677 1244 698 1265; x_wconf 90 eng ltr of   ocrx_word word_1_353 bbox 709 1245 758 1265; x_wconf 91 eng ltr Bear   ocrx_word word_1_354 bbox 767 1245 855 1265; x_wconf 88 eng ltr Stearns.   ocrx_word word_1_355 bbox 872 1245 921 1265; x_wconf 88 eng ltr Bear   ocrx_word word_1_356 bbox 931 1245 1012 1265; x_wconf 87 eng ltr Stearns

       ocr_line line_1_33 bbox 182 1276 1027 1302; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_357 bbox 182 1276 233 1297; x_wconf 88 eng ltr itself   ocrx_word word_1_358 bbox 243 1281 286 1297; x_wconf 89 eng ltr was   ocrx_word word_1_359 bbox 295 1276 367 1297; x_wconf 89 eng ltr unable   ocrx_word word_1_360 bbox 375 1278 396 1297; x_wconf 92 eng ltr to   ocrx_word word_1_361 bbox 404 1281 474 1297; x_wconf 91 eng ltr secure   ocrx_word word_1_362 bbox 483 1276 580 1302; x_wconf 91 eng ltr adequate   ocrx_word word_1_363 bbox 590 1276 652 1297; x_wconf 89 eng ltr credit   ocrx_word word_1_364 bbox 660 1276 847 1297; x_wconf 90 eng ltr accommodations   ocrx_word word_1_365 bbox 857 1276 887 1297; x_wconf 89 eng ltr for   ocrx_word word_1_366 bbox 896 1276 954 1297; x_wconf 89 eng ltr those   ocrx_word word_1_367 bbox 963 1278 1027 1297; x_wconf 90 eng ltr assets

       ocr_line line_1_34 bbox 180 1308 974 1335; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_368 bbox 180 1308 230 1329; x_wconf 92 eng ltr from   ocrx_word word_1_369 bbox 243 1308 318 1335; x_wconf 90 eng ltr private   ocrx_word word_1_370 bbox 327 1314 416 1329; x_wconf 88 eng ltr sources.   ocrx_word word_1_371 bbox 433 1309 523 1329; x_wconf 92 eng ltr Because   ocrx_word word_1_372 bbox 533 1314 558 1329; x_wconf 91 eng ltr no   ocrx_word word_1_373 bbox 567 1308 622 1329; x_wconf 89 eng ltr other   ocrx_word word_1_374 bbox 632 1308 713 1335; x_wconf 90 eng ltr funding   ocrx_word word_1_375 bbox 725 1314 797 1329; x_wconf 92 eng ltr source   ocrx_word word_1_376 bbox 805 1308 835 1329; x_wconf 91 eng ltr for   ocrx_word word_1_377 bbox 845 1308 901 1329; x_wconf 90 eng ltr these   ocrx_word word_1_378 bbox 911 1311 974 1329; x_wconf 91 eng ltr assets

       ocr_line line_1_35 bbox 181 1341 984 1367; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_379 bbox 181 1341 278 1367; x_wconf 90 eng ltr appeared   ocrx_word word_1_380 bbox 289 1341 394 1365; x_wconf 89 eng ltr available,   ocrx_word word_1_381 bbox 404 1346 524 1367; x_wconf 92 eng ltr emergency   ocrx_word word_1_382 bbox 534 1341 634 1367; x_wconf 92 eng ltr financing   ocrx_word word_1_383 bbox 646 1341 696 1361; x_wconf 92 eng ltr from   ocrx_word word_1_384 bbox 707 1341 740 1361; x_wconf 89 eng ltr the   ocrx_word word_1_385 bbox 750 1341 829 1361; x_wconf 92 eng ltr Federal   ocrx_word word_1_386 bbox 841 1342 928 1361; x_wconf 90 eng ltr Reserve   ocrx_word word_1_387 bbox 937 1341 984 1361; x_wconf 92 eng ltr with

       ocr_line line_1_36 bbox 182 1373 1040 1399; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_388 bbox 182 1375 258 1399; x_wconf 87 eng ltr respect   ocrx_word word_1_389 bbox 267 1375 287 1393; x_wconf 91 eng ltr to   ocrx_word word_1_390 bbox 295 1373 353 1393; x_wconf 93 eng ltr those   ocrx_word word_1_391 bbox 362 1375 425 1393; x_wconf 87 eng ltr assets   ocrx_word word_1_392 bbox 434 1378 476 1393; x_wconf 90 eng ltr was   ocrx_word word_1_393 bbox 485 1378 591 1399; x_wconf 87 eng ltr necessary   ocrx_word word_1_394 bbox 600 1375 621 1393; x_wconf 94 eng ltr to   ocrx_word word_1_395 bbox 629 1373 723 1393; x_wconf 92 eng ltr facilitate   ocrx_word word_1_396 bbox 734 1373 823 1393; x_wconf 83 eng ltr JPMC’s   ocrx_word word_1_397 bbox 832 1375 910 1399; x_wconf 91 eng ltr prompt   ocrx_word word_1_398 bbox 921 1373 1040 1399; x_wconf 88 eng ltr acquisition

       ocr_line line_1_37 bbox 181 1405 961 1429; baseline 0 -4; x_size 25.986391; x_descenders 5.9863906; x_ascenders 5  ocrx_word word_1_399 bbox 181 1405 202 1426; x_wconf 94 eng ltr of   ocrx_word word_1_400 bbox 212 1406 262 1426; x_wconf 92 eng ltr Bear   ocrx_word word_1_401 bbox 271 1406 358 1429; x_wconf 85 eng ltr Stearns,   ocrx_word word_1_402 bbox 367 1405 432 1426; x_wconf 92 eng ltr which   ocrx_word word_1_403 bbox 442 1405 509 1426; x_wconf 90 eng ltr would   ocrx_word word_1_404 bbox 520 1405 612 1426; x_wconf 91 eng ltr alleviate   ocrx_word word_1_405 bbox 621 1405 654 1426; x_wconf 93 eng ltr the   ocrx_word word_1_406 bbox 664 1405 740 1426; x_wconf 87 eng ltr intense   ocrx_word word_1_407 bbox 749 1405 820 1426; x_wconf 90 eng ltr strains   ocrx_word word_1_408 bbox 831 1405 848 1425; x_wconf 94 eng ltr in   ocrx_word word_1_409 bbox 858 1405 890 1426; x_wconf 93 eng ltr the   ocrx_word word_1_410 bbox 900 1405 961 1426; x_wconf 90 eng ltr credit










  page
  markets described above that were likely to result from the failure of Bear
 Stearns.

  Terms of the Extension of Credit To Facilitate the Acquisition of Bear
 Stearns

  On Sunday, March 16, 2008, the Board, finding unusual and exigent
 circumstances, authorized the FRBNY under section 13(3) to extend non-
 recourse credit of up to $30 billion to a limited liability company that would
 acquire a pool of assets of Bear Stearns in connection with the acquisition of
 Bear Stearns by JPMC. The credit would be repaid from the earnings on and
 the proceeds of the disposition of the assets in an orderly manner over time.

  In the following weeks, the interested parties negotiated the details of
 these transactions and refined the terms. On March 24, 2008, the FRBNY
 and JPMC agreed to a Summary of Terms and Conditions that described the
 basic elements of the FRBNY’s extension of credit. A copy of the Summary
 of Terms and Conditions is Attachment A to this report.

  Pursuant to the summary of terms and conditions, a newly-formed
 limited liability company, Maiden Lane, would purchase $30 billion in
 assets from Bear Stearns on or about the date JPMC acquired Bear Stearns.
 The assets would be valued based on Bear Stearns’ marks as of March 14,
 2008. The assets purchased would have to meet each of the following
 parameters: (i) U.S. dollar denominated; (ii) U.S. domiciled; and (iii)
 performing residential and commercial mortgages or investment-grade or
 Agency issued securities (and related hedges). A performing mortgage is a
 mortgage that was no more than 30 days past due (as of March 14, 2008),
 and an investment-grade security is a security rated BBB- or higher by all
 rating agencies that have rated the security (as of March 14, 2008), including
 at least one of the three principal credit rating agencies. The FRBNY would
 retain an asset manager, BlackRock Financial Management, Inc. and its
 affiliates, to manage the assets of Maiden Lane.

  To finance the purchase, the FRBNY would lend $29 billion to
 Maiden Lane. JPMC would make a $1 billion loan to Maiden Lane that
 would be subordinated in right of payment to the FRBNY’s loan. Maiden
 Lane would be obligated to repay all of the principal and interest on the
 FRBNY’s loan before making principal or interest payments on the JPMC
 loan. Any residual cash flows would be paid to the FRBNY. The FRBNY

  ocr







    ocr_page page_1 image "/tmp/apache-tika-3535122460707587628.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 181 150 1007 202
      ocr_par ltr par_1_1 bbox 181 150 1007 202
       ocr_line line_1_1 bbox 182 150 1007 176; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_1 bbox 182 150 268 170; x_wconf 84 eng ltr markets   ocrx_word word_1_2 bbox 276 150 380 170; x_wconf 82 eng ltr described   ocrx_word word_1_3 bbox 391 150 455 170; x_wconf 86 eng ltr above   ocrx_word word_1_4 bbox 464 150 504 170; x_wconf 84 eng ltr that   ocrx_word word_1_5 bbox 513 155 566 170; x_wconf 86 eng ltr were   ocrx_word word_1_6 bbox 576 150 637 176; x_wconf 92 eng ltr likely   ocrx_word word_1_7 bbox 645 152 666 170; x_wconf 91 eng ltr to   ocrx_word word_1_8 bbox 675 150 735 170; x_wconf 83 eng ltr result   ocrx_word word_1_9 bbox 743 150 793 170; x_wconf 91 eng ltr from   ocrx_word word_1_10 bbox 804 150 837 170; x_wconf 85 eng ltr the   ocrx_word word_1_11 bbox 846 150 915 170; x_wconf 86 eng ltr failure   ocrx_word word_1_12 bbox 926 150 947 170; x_wconf 91 eng ltr of   ocrx_word word_1_13 bbox 958 151 1007 170; x_wconf 92 eng ltr Bear

       ocr_line line_1_2 bbox 181 183 268 202; baseline 0 0; x_size 25.226654; x_descenders 6.226655; x_ascenders 4  ocrx_word word_1_14 bbox 181 183 268 202; x_wconf 86 eng ltr Stearns.





     ocr_carea block_1_2 bbox 181 247 1013 299
      ocr_par ltr par_1_2 bbox 181 247 1013 299
       ocr_line line_1_3 bbox 181 247 1013 273; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_15 bbox 181 248 257 267; x_wconf 84 eng ltr Terms   ocrx_word word_1_16 bbox 265 247 286 267; x_wconf 89 eng ltr of   ocrx_word word_1_17 bbox 296 247 331 267; x_wconf 88 eng ltr the   ocrx_word word_1_18 bbox 342 247 455 267; x_wconf 87 eng ltr Extension   ocrx_word word_1_19 bbox 466 247 486 267; x_wconf 91 eng ltr of   ocrx_word word_1_20 bbox 496 247 571 267; x_wconf 88 eng ltr Credit   ocrx_word word_1_21 bbox 580 248 611 267; x_wconf 99 eng ltr To   ocrx_word word_1_22 bbox 621 247 729 267; x_wconf 85 eng ltr Facilitate   ocrx_word word_1_23 bbox 739 247 774 267; x_wconf 91 eng ltr the   ocrx_word word_1_24 bbox 783 247 916 273; x_wconf 86 eng ltr Acquisition   ocrx_word word_1_25 bbox 927 247 948 267; x_wconf 88 eng ltr of   ocrx_word word_1_26 bbox 959 248 1013 267; x_wconf 92 eng ltr Bear

       ocr_line line_1_4 bbox 181 279 269 299; baseline 0 0; x_size 26.209677; x_descenders 6.2096772; x_ascenders 5  ocrx_word word_1_27 bbox 181 279 269 299; x_wconf 87 eng ltr Stearns





     ocr_carea block_1_3 bbox 180 343 1042 530
      ocr_par ltr par_1_3 bbox 180 343 1042 530
       ocr_line line_1_5 bbox 253 343 1018 369; baseline 0 -6; x_size 24; x_descenders 4; x_ascenders 5  ocrx_word word_1_28 bbox 253 343 284 363; x_wconf 96 eng ltr On   ocrx_word word_1_29 bbox 294 343 382 369; x_wconf 86 eng ltr Sunday,   ocrx_word word_1_30 bbox 394 343 462 363; x_wconf 89 eng ltr March   ocrx_word word_1_31 bbox 473 343 505 367; x_wconf 83 eng 16,   ocrx_word word_1_32 bbox 514 343 575 367; x_wconf 93 eng 2008,   ocrx_word word_1_33 bbox 583 343 616 363; x_wconf 93 eng ltr the   ocrx_word word_1_34 bbox 626 343 697 367; x_wconf 91 eng ltr Board,   ocrx_word word_1_35 bbox 707 343 784 369; x_wconf 89 eng ltr finding   ocrx_word word_1_36 bbox 796 343 879 363; x_wconf 85 eng ltr unusual   ocrx_word word_1_37 bbox 890 343 927 363; x_wconf 92 eng ltr and   ocrx_word word_1_38 bbox 938 343 1018 369; x_wconf 89 eng ltr exigent

       ocr_line line_1_6 bbox 181 375 1005 401; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_39 bbox 181 375 343 399; x_wconf 86 eng ltr circumstances,   ocrx_word word_1_40 bbox 353 375 468 395; x_wconf 88 eng ltr authorized   ocrx_word word_1_41 bbox 478 375 511 395; x_wconf 87 eng ltr the   ocrx_word word_1_42 bbox 521 376 610 395; x_wconf 88 eng ltr FRBNY   ocrx_word word_1_43 bbox 621 375 681 395; x_wconf 93 eng ltr under   ocrx_word word_1_44 bbox 691 375 767 395; x_wconf 87 eng ltr section   ocrx_word word_1_45 bbox 778 375 835 401; x_wconf 86 eng 13(3)   ocrx_word word_1_46 bbox 845 377 865 395; x_wconf 91 eng ltr to   ocrx_word word_1_47 bbox 873 375 945 395; x_wconf 88 eng ltr extend   ocrx_word word_1_48 bbox 957 380 1005 395; x_wconf 92 eng ltr non-

       ocr_line line_1_7 bbox 182 406 1031 433; baseline 0 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_49 bbox 182 412 273 428; x_wconf 84 eng ltr recourse   ocrx_word word_1_50 bbox 283 407 344 428; x_wconf 87 eng ltr credit   ocrx_word word_1_51 bbox 354 407 374 428; x_wconf 92 eng ltr of   ocrx_word word_1_52 bbox 385 412 410 433; x_wconf 90 eng ltr up   ocrx_word word_1_53 bbox 418 409 439 428; x_wconf 90 eng ltr to   ocrx_word word_1_54 bbox 447 406 488 429; x_wconf 85 eng $30   ocrx_word word_1_55 bbox 497 407 566 428; x_wconf 90 eng ltr billion   ocrx_word word_1_56 bbox 576 409 597 428; x_wconf 90 eng ltr to   ocrx_word word_1_57 bbox 606 412 617 428; x_wconf 97 eng ltr a   ocrx_word word_1_58 bbox 626 407 700 428; x_wconf 88 eng ltr limited   ocrx_word word_1_59 bbox 713 407 796 433; x_wconf 89 eng ltr liability   ocrx_word word_1_60 bbox 805 412 905 433; x_wconf 88 eng ltr company   ocrx_word word_1_61 bbox 914 407 955 428; x_wconf 87 eng ltr that   ocrx_word word_1_62 bbox 964 407 1031 428; x_wconf 91 eng ltr would

       ocr_line line_1_8 bbox 181 439 1034 465; baseline -0.001 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_63 bbox 181 439 261 465; x_wconf 87 eng ltr acquire   ocrx_word word_1_64 bbox 270 444 282 460; x_wconf 88 eng ltr a   ocrx_word word_1_65 bbox 290 439 336 465; x_wconf 87 eng ltr pool   ocrx_word word_1_66 bbox 347 439 367 460; x_wconf 89 eng ltr of   ocrx_word word_1_67 bbox 377 441 440 460; x_wconf 87 eng ltr assets   ocrx_word word_1_68 bbox 449 439 470 460; x_wconf 92 eng ltr of   ocrx_word word_1_69 bbox 481 440 530 460; x_wconf 93 eng ltr Bear   ocrx_word word_1_70 bbox 539 440 619 460; x_wconf 88 eng ltr Stearns   ocrx_word word_1_71 bbox 630 439 648 459; x_wconf 96 eng ltr in   ocrx_word word_1_72 bbox 658 439 776 460; x_wconf 89 eng ltr connection   ocrx_word word_1_73 bbox 786 439 834 460; x_wconf 89 eng ltr with   ocrx_word word_1_74 bbox 843 439 876 460; x_wconf 89 eng ltr the   ocrx_word word_1_75 bbox 885 439 1004 465; x_wconf 90 eng ltr acquisition   ocrx_word word_1_76 bbox 1014 439 1034 460; x_wconf 90 eng ltr of

       ocr_line line_1_9 bbox 182 471 1042 497; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_77 bbox 182 472 231 492; x_wconf 92 eng ltr Bear   ocrx_word word_1_78 bbox 241 472 321 492; x_wconf 88 eng ltr Stearns   ocrx_word word_1_79 bbox 331 471 356 497; x_wconf 90 eng ltr by   ocrx_word word_1_80 bbox 365 472 440 492; x_wconf 88 eng ltr JPMC.   ocrx_word word_1_81 bbox 456 471 497 492; x_wconf 89 eng ltr The   ocrx_word word_1_82 bbox 506 471 568 492; x_wconf 87 eng ltr credit   ocrx_word word_1_83 bbox 577 471 644 492; x_wconf 91 eng ltr would   ocrx_word word_1_84 bbox 655 471 679 492; x_wconf 89 eng ltr be   ocrx_word word_1_85 bbox 689 471 754 497; x_wconf 89 eng ltr repaid   ocrx_word word_1_86 bbox 765 471 814 492; x_wconf 91 eng ltr from   ocrx_word word_1_87 bbox 825 471 858 492; x_wconf 85 eng ltr the   ocrx_word word_1_88 bbox 867 471 960 497; x_wconf 85 eng ltr earnings   ocrx_word word_1_89 bbox 970 476 994 492; x_wconf 94 eng ltr on   ocrx_word word_1_90 bbox 1004 471 1042 492; x_wconf 92 eng ltr and

       ocr_line line_1_10 bbox 180 503 1027 530; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_91 bbox 180 503 213 524; x_wconf 93 eng ltr the   ocrx_word word_1_92 bbox 223 503 319 530; x_wconf 88 eng ltr proceeds   ocrx_word word_1_93 bbox 329 503 349 524; x_wconf 88 eng ltr of   ocrx_word word_1_94 bbox 358 503 391 524; x_wconf 91 eng ltr the   ocrx_word word_1_95 bbox 400 503 519 530; x_wconf 88 eng ltr disposition   ocrx_word word_1_96 bbox 530 503 550 524; x_wconf 90 eng ltr of   ocrx_word word_1_97 bbox 559 503 592 524; x_wconf 91 eng ltr the   ocrx_word word_1_98 bbox 601 506 665 524; x_wconf 87 eng ltr assets   ocrx_word word_1_99 bbox 675 503 693 524; x_wconf 95 eng ltr in   ocrx_word word_1_100 bbox 703 509 726 524; x_wconf 88 eng ltr an   ocrx_word word_1_101 bbox 736 503 815 530; x_wconf 91 eng ltr orderly   ocrx_word word_1_102 bbox 825 509 905 524; x_wconf 87 eng ltr manner   ocrx_word word_1_103 bbox 915 509 962 524; x_wconf 92 eng ltr over   ocrx_word word_1_104 bbox 971 503 1027 524; x_wconf 87 eng ltr time.





     ocr_carea block_1_4 bbox 180 568 1041 723
      ocr_par ltr par_1_4 bbox 180 568 1041 723
       ocr_line line_1_11 bbox 255 568 1027 594; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_105 bbox 255 569 273 589; x_wconf 94 eng ltr In   ocrx_word word_1_106 bbox 283 568 315 589; x_wconf 88 eng ltr the   ocrx_word word_1_107 bbox 324 568 428 594; x_wconf 89 eng ltr following   ocrx_word word_1_108 bbox 439 568 515 592; x_wconf 89 eng ltr weeks,   ocrx_word word_1_109 bbox 523 568 556 589; x_wconf 89 eng ltr the   ocrx_word word_1_110 bbox 567 568 670 589; x_wconf 88 eng ltr interested   ocrx_word word_1_111 bbox 682 568 754 594; x_wconf 91 eng ltr parties   ocrx_word word_1_112 bbox 763 568 875 594; x_wconf 87 eng ltr negotiated   ocrx_word word_1_113 bbox 886 568 919 589; x_wconf 89 eng ltr the   ocrx_word word_1_114 bbox 928 568 999 589; x_wconf 90 eng ltr details   ocrx_word word_1_115 bbox 1006 568 1027 589; x_wconf 95 eng ltr of

       ocr_line line_1_12 bbox 180 600 1009 624; baseline 0 -3; x_size 26.915989; x_descenders 5.9159889; x_ascenders 6  ocrx_word word_1_116 bbox 180 600 236 621; x_wconf 91 eng ltr these   ocrx_word word_1_117 bbox 245 600 377 621; x_wconf 90 eng ltr transactions   ocrx_word word_1_118 bbox 386 600 423 621; x_wconf 92 eng ltr and   ocrx_word word_1_119 bbox 434 600 507 621; x_wconf 91 eng ltr refined   ocrx_word word_1_120 bbox 519 600 552 621; x_wconf 90 eng ltr the   ocrx_word word_1_121 bbox 560 603 628 621; x_wconf 90 eng ltr terms.   ocrx_word word_1_122 bbox 644 601 675 621; x_wconf 94 eng ltr On   ocrx_word word_1_123 bbox 687 600 755 621; x_wconf 89 eng ltr March   ocrx_word word_1_124 bbox 765 601 798 624; x_wconf 91 eng 24,   ocrx_word word_1_125 bbox 808 601 869 624; x_wconf 87 eng 2008,   ocrx_word word_1_126 bbox 877 600 909 621; x_wconf 91 eng ltr the   ocrx_word word_1_127 bbox 921 601 1009 621; x_wconf 89 eng ltr FRBNY

       ocr_line line_1_13 bbox 181 633 1033 659; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_128 bbox 181 633 218 653; x_wconf 93 eng ltr and   ocrx_word word_1_129 bbox 228 633 296 653; x_wconf 86 eng ltr JPMC   ocrx_word word_1_130 bbox 305 633 376 659; x_wconf 89 eng ltr agreed   ocrx_word word_1_131 bbox 386 635 407 653; x_wconf 90 eng ltr to   ocrx_word word_1_132 bbox 416 638 427 653; x_wconf 87 eng ltr a   ocrx_word word_1_133 bbox 435 633 541 659; x_wconf 87 eng ltr Summary   ocrx_word word_1_134 bbox 551 633 572 653; x_wconf 94 eng ltr of   ocrx_word word_1_135 bbox 581 634 651 653; x_wconf 90 eng ltr Terms   ocrx_word word_1_136 bbox 660 633 697 653; x_wconf 91 eng ltr and   ocrx_word word_1_137 bbox 707 633 828 653; x_wconf 89 eng ltr Conditions   ocrx_word word_1_138 bbox 836 633 877 653; x_wconf 89 eng ltr that   ocrx_word word_1_139 bbox 886 633 989 653; x_wconf 89 eng ltr described   ocrx_word word_1_140 bbox 1000 633 1033 653; x_wconf 91 eng ltr the

       ocr_line line_1_14 bbox 182 665 1041 691; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_141 bbox 182 665 237 685; x_wconf 88 eng ltr basic   ocrx_word word_1_142 bbox 245 665 343 685; x_wconf 87 eng ltr elements   ocrx_word word_1_143 bbox 352 665 372 685; x_wconf 91 eng ltr of   ocrx_word word_1_144 bbox 381 665 414 685; x_wconf 90 eng ltr the   ocrx_word word_1_145 bbox 424 666 535 685; x_wconf 89 eng ltr FRBNY's   ocrx_word word_1_146 bbox 544 665 647 685; x_wconf 89 eng ltr extension   ocrx_word word_1_147 bbox 659 665 679 685; x_wconf 91 eng ltr of   ocrx_word word_1_148 bbox 689 665 757 685; x_wconf 92 eng ltr credit.   ocrx_word word_1_149 bbox 772 666 792 685; x_wconf 95 eng ltr A   ocrx_word word_1_150 bbox 801 670 853 691; x_wconf 93 eng ltr copy   ocrx_word word_1_151 bbox 862 665 883 685; x_wconf 96 eng ltr of   ocrx_word word_1_152 bbox 892 665 924 685; x_wconf 91 eng ltr the   ocrx_word word_1_153 bbox 935 665 1041 691; x_wconf 89 eng ltr Summary

       ocr_line line_1_15 bbox 181 697 806 723; baseline -0.002 -5; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_154 bbox 181 697 202 718; x_wconf 92 eng ltr of   ocrx_word word_1_155 bbox 211 698 281 718; x_wconf 85 eng ltr Terms   ocrx_word word_1_156 bbox 290 697 327 718; x_wconf 90 eng ltr and   ocrx_word word_1_157 bbox 337 697 458 718; x_wconf 89 eng ltr Conditions   ocrx_word word_1_158 bbox 468 697 484 718; x_wconf 92 eng ltr is   ocrx_word word_1_159 bbox 492 697 621 718; x_wconf 88 eng ltr Attachment   ocrx_word word_1_160 bbox 630 698 649 717; x_wconf 95 eng ltr A   ocrx_word word_1_161 bbox 657 699 678 718; x_wconf 89 eng ltr to   ocrx_word word_1_162 bbox 686 697 725 718; x_wconf 90 eng ltr this   ocrx_word word_1_163 bbox 736 699 806 723; x_wconf 91 eng ltr report.





     ocr_carea block_1_5 bbox 180 761 1040 1205
      ocr_par ltr par_1_5 bbox 180 761 1040 1205
       ocr_line line_1_16 bbox 254 761 991 787; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_164 bbox 254 762 348 782; x_wconf 90 eng ltr Pursuant   ocrx_word word_1_165 bbox 357 763 378 782; x_wconf 90 eng ltr to   ocrx_word word_1_166 bbox 386 761 419 782; x_wconf 88 eng ltr the   ocrx_word word_1_167 bbox 427 766 529 787; x_wconf 87 eng ltr summary   ocrx_word word_1_168 bbox 539 761 559 782; x_wconf 90 eng ltr of   ocrx_word word_1_169 bbox 569 763 630 782; x_wconf 91 eng ltr terms   ocrx_word word_1_170 bbox 638 761 675 782; x_wconf 93 eng ltr and   ocrx_word word_1_171 bbox 686 761 807 785; x_wconf 84 eng ltr conditions,   ocrx_word word_1_172 bbox 816 766 828 782; x_wconf 98 eng ltr a   ocrx_word word_1_173 bbox 840 761 991 787; x_wconf 92 eng ltr newly-formed

       ocr_line line_1_17 bbox 182 793 972 820; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_174 bbox 182 793 256 814; x_wconf 90 eng ltr limited   ocrx_word word_1_175 bbox 269 793 352 820; x_wconf 90 eng ltr liability   ocrx_word word_1_176 bbox 361 799 468 820; x_wconf 88 eng ltr company,   ocrx_word word_1_177 bbox 479 793 560 814; x_wconf 90 eng ltr Maiden   ocrx_word word_1_178 bbox 572 794 631 817; x_wconf 92 eng ltr Lane,   ocrx_word word_1_179 bbox 640 793 707 814; x_wconf 92 eng ltr would   ocrx_word word_1_180 bbox 718 793 814 820; x_wconf 87 eng ltr purchase   ocrx_word word_1_181 bbox 824 793 864 816; x_wconf 82 eng $30   ocrx_word word_1_182 bbox 874 793 943 814; x_wconf 89 eng ltr billion   ocrx_word word_1_183 bbox 954 793 972 814; x_wconf 92 eng ltr in

       ocr_line line_1_18 bbox 181 825 1021 852; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_184 bbox 181 828 244 846; x_wconf 89 eng ltr assets   ocrx_word word_1_185 bbox 253 826 302 846; x_wconf 91 eng ltr from   ocrx_word word_1_186 bbox 316 826 365 846; x_wconf 92 eng ltr Bear   ocrx_word word_1_187 bbox 375 826 455 846; x_wconf 91 eng ltr Stearns   ocrx_word word_1_188 bbox 464 831 489 846; x_wconf 92 eng ltr on   ocrx_word word_1_189 bbox 499 831 520 846; x_wconf 93 eng ltr or   ocrx_word word_1_190 bbox 529 825 589 846; x_wconf 90 eng ltr about   ocrx_word word_1_191 bbox 598 825 631 846; x_wconf 93 eng ltr the   ocrx_word word_1_192 bbox 640 825 684 846; x_wconf 91 eng ltr date   ocrx_word word_1_193 bbox 693 826 761 846; x_wconf 84 eng ltr JPMC   ocrx_word word_1_194 bbox 770 825 863 852; x_wconf 91 eng ltr acquired   ocrx_word word_1_195 bbox 875 826 924 846; x_wconf 90 eng ltr Bear   ocrx_word word_1_196 bbox 934 826 1021 846; x_wconf 87 eng ltr Stearns.

       ocr_line line_1_19 bbox 180 858 1009 882; baseline 0 -4; x_size 24; x_descenders 4; x_ascenders 5  ocrx_word word_1_197 bbox 180 858 222 878; x_wconf 94 eng ltr The   ocrx_word word_1_198 bbox 231 860 295 878; x_wconf 91 eng ltr assets   ocrx_word word_1_199 bbox 303 858 370 878; x_wconf 91 eng ltr would   ocrx_word word_1_200 bbox 381 858 405 878; x_wconf 93 eng ltr be   ocrx_word word_1_201 bbox 414 858 485 878; x_wconf 91 eng ltr valued   ocrx_word word_1_202 bbox 496 858 556 878; x_wconf 92 eng ltr based   ocrx_word word_1_203 bbox 566 863 592 878; x_wconf 91 eng ltr on   ocrx_word word_1_204 bbox 603 859 652 878; x_wconf 92 eng ltr Bear   ocrx_word word_1_205 bbox 662 858 750 878; x_wconf 83 eng ltr Stearns’   ocrx_word word_1_206 bbox 761 858 826 878; x_wconf 87 eng ltr marks   ocrx_word word_1_207 bbox 835 863 857 878; x_wconf 91 eng ltr as   ocrx_word word_1_208 bbox 865 858 886 878; x_wconf 89 eng ltr of   ocrx_word word_1_209 bbox 898 858 966 878; x_wconf 92 eng ltr March   ocrx_word word_1_210 bbox 977 859 1009 882; x_wconf 91 eng 14,

       ocr_line line_1_20 bbox 181 890 964 916; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_211 bbox 181 891 242 910; x_wconf 93 eng 2008.   ocrx_word word_1_212 bbox 257 890 299 910; x_wconf 95 eng ltr The   ocrx_word word_1_213 bbox 309 892 372 910; x_wconf 93 eng ltr assets   ocrx_word word_1_214 bbox 381 890 490 916; x_wconf 88 eng ltr purchased   ocrx_word word_1_215 bbox 500 890 567 910; x_wconf 90 eng ltr would   ocrx_word word_1_216 bbox 579 890 629 910; x_wconf 93 eng ltr have   ocrx_word word_1_217 bbox 637 892 658 910; x_wconf 98 eng ltr to   ocrx_word word_1_218 bbox 667 892 719 910; x_wconf 96 eng ltr meet   ocrx_word word_1_219 bbox 728 890 776 910; x_wconf 91 eng ltr each   ocrx_word word_1_220 bbox 786 890 807 910; x_wconf 91 eng ltr of   ocrx_word word_1_221 bbox 816 890 849 910; x_wconf 93 eng ltr the   ocrx_word word_1_222 bbox 860 890 964 916; x_wconf 89 eng ltr following

       ocr_line line_1_21 bbox 182 922 952 948; baseline -0.001 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_223 bbox 182 924 309 948; x_wconf 87 eng ltr parameters:   ocrx_word word_1_224 bbox 319 922 343 948; x_wconf 95 eng ltr (i)   ocrx_word word_1_225 bbox 353 922 472 943; x_wconf 85 eng ltr U.S.dollar   ocrx_word word_1_226 bbox 481 922 629 946; x_wconf 79 eng ltr denominated;   ocrx_word word_1_227 bbox 641 922 672 948; x_wconf 96 eng ltr (ii)   ocrx_word word_1_228 bbox 683 923 730 943; x_wconf 83 eng ltr U.S.   ocrx_word word_1_229 bbox 738 922 855 946; x_wconf 89 eng ltr domiciled;   ocrx_word word_1_230 bbox 865 922 902 943; x_wconf 91 eng ltr and   ocrx_word word_1_231 bbox 914 922 952 948; x_wconf 92 eng ltr (iii)

       ocr_line line_1_22 bbox 182 954 1001 980; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_232 bbox 182 954 301 980; x_wconf 87 eng ltr performing   ocrx_word word_1_233 bbox 315 954 426 975; x_wconf 88 eng ltr residential   ocrx_word word_1_234 bbox 437 954 474 975; x_wconf 87 eng ltr and   ocrx_word word_1_235 bbox 485 954 613 975; x_wconf 90 eng ltr commercial   ocrx_word word_1_236 bbox 625 956 738 980; x_wconf 90 eng ltr mortgages   ocrx_word word_1_237 bbox 747 959 769 975; x_wconf 94 eng ltr or   ocrx_word word_1_238 bbox 779 954 969 980; x_wconf 89 eng ltr investment-grade   ocrx_word word_1_239 bbox 979 959 1001 975; x_wconf 95 eng ltr or

       ocr_line line_1_23 bbox 180 986 1022 1012; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 6  ocrx_word word_1_240 bbox 180 987 265 1012; x_wconf 89 eng ltr Agency   ocrx_word word_1_241 bbox 276 986 341 1007; x_wconf 89 eng ltr issued   ocrx_word word_1_242 bbox 351 986 456 1007; x_wconf 87 eng ltr securities   ocrx_word word_1_243 bbox 465 986 511 1012; x_wconf 90 eng ltr (and   ocrx_word word_1_244 bbox 522 986 594 1007; x_wconf 89 eng ltr related   ocrx_word word_1_245 bbox 605 986 697 1012; x_wconf 87 eng ltr hedges).   ocrx_word word_1_246 bbox 712 987 731 1007; x_wconf 95 eng ltr A   ocrx_word word_1_247 bbox 740 986 860 1012; x_wconf 87 eng ltr performing   ocrx_word word_1_248 bbox 873 988 976 1012; x_wconf 90 eng ltr mortgage   ocrx_word word_1_249 bbox 987 986 1002 1007; x_wconf 88 eng ltr is   ocrx_word word_1_250 bbox 1010 991 1022 1007; x_wconf 87 eng ltr a

       ocr_line line_1_24 bbox 182 1018 1003 1045; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_251 bbox 182 1021 284 1045; x_wconf 91 eng ltr mortgage   ocrx_word word_1_252 bbox 293 1018 334 1039; x_wconf 93 eng ltr that   ocrx_word word_1_253 bbox 342 1024 385 1039; x_wconf 89 eng ltr was   ocrx_word word_1_254 bbox 394 1024 419 1039; x_wconf 91 eng ltr no   ocrx_word word_1_255 bbox 429 1024 483 1039; x_wconf 93 eng ltr more   ocrx_word word_1_256 bbox 492 1018 538 1039; x_wconf 90 eng ltr than   ocrx_word word_1_257 bbox 548 1019 574 1039; x_wconf 91 eng 30   ocrx_word word_1_258 bbox 583 1018 632 1045; x_wconf 87 eng ltr days   ocrx_word word_1_259 bbox 642 1021 684 1045; x_wconf 93 eng ltr past   ocrx_word word_1_260 bbox 694 1018 732 1039; x_wconf 93 eng ltr due   ocrx_word word_1_261 bbox 741 1018 772 1045; x_wconf 90 eng ltr (as   ocrx_word word_1_262 bbox 780 1018 801 1039; x_wconf 90 eng ltr of   ocrx_word word_1_263 bbox 812 1018 880 1039; x_wconf 91 eng ltr March   ocrx_word word_1_264 bbox 892 1019 924 1042; x_wconf 90 eng 14,   ocrx_word word_1_265 bbox 933 1018 1003 1045; x_wconf 90 eng 2008),

       ocr_line line_1_25 bbox 181 1051 1003 1077; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_266 bbox 181 1051 218 1071; x_wconf 92 eng ltr and   ocrx_word word_1_267 bbox 228 1056 252 1071; x_wconf 92 eng ltr an   ocrx_word word_1_268 bbox 263 1051 452 1077; x_wconf 88 eng ltr investment-grade   ocrx_word word_1_269 bbox 463 1051 549 1077; x_wconf 92 eng ltr security   ocrx_word word_1_270 bbox 560 1051 576 1071; x_wconf 94 eng ltr is   ocrx_word word_1_271 bbox 584 1056 596 1071; x_wconf 94 eng ltr a   ocrx_word word_1_272 bbox 604 1051 690 1077; x_wconf 92 eng ltr security   ocrx_word word_1_273 bbox 700 1051 752 1071; x_wconf 89 eng ltr rated   ocrx_word word_1_274 bbox 764 1052 827 1071; x_wconf 93 eng ltr BBB-   ocrx_word word_1_275 bbox 835 1056 856 1071; x_wconf 91 eng ltr or   ocrx_word word_1_276 bbox 866 1051 934 1077; x_wconf 94 eng ltr higher   ocrx_word word_1_277 bbox 944 1051 970 1077; x_wconf 93 eng ltr by   ocrx_word word_1_278 bbox 979 1051 1003 1071; x_wconf 98 eng ltr all

       ocr_line line_1_26 bbox 182 1083 1040 1109; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_279 bbox 182 1083 243 1109; x_wconf 89 eng ltr rating   ocrx_word word_1_280 bbox 253 1083 347 1109; x_wconf 89 eng ltr agencies   ocrx_word word_1_281 bbox 356 1083 396 1103; x_wconf 94 eng ltr that   ocrx_word word_1_282 bbox 406 1083 456 1103; x_wconf 95 eng ltr have   ocrx_word word_1_283 bbox 466 1083 518 1103; x_wconf 93 eng ltr rated   ocrx_word word_1_284 bbox 528 1083 561 1103; x_wconf 94 eng ltr the   ocrx_word word_1_285 bbox 569 1083 656 1109; x_wconf 90 eng ltr security   ocrx_word word_1_286 bbox 666 1083 696 1109; x_wconf 91 eng ltr (as   ocrx_word word_1_287 bbox 705 1083 725 1103; x_wconf 91 eng ltr of   ocrx_word word_1_288 bbox 736 1083 805 1103; x_wconf 91 eng ltr March   ocrx_word word_1_289 bbox 816 1084 848 1107; x_wconf 91 eng 14,   ocrx_word word_1_290 bbox 857 1083 927 1109; x_wconf 91 eng 2008),   ocrx_word word_1_291 bbox 939 1083 1040 1109; x_wconf 88 eng ltr including

       ocr_line line_1_27 bbox 181 1115 1033 1141; baseline -0.001 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_292 bbox 181 1117 200 1136; x_wconf 90 eng ltr at   ocrx_word word_1_293 bbox 210 1115 257 1136; x_wconf 92 eng ltr least   ocrx_word word_1_294 bbox 266 1120 305 1136; x_wconf 94 eng ltr one   ocrx_word word_1_295 bbox 314 1115 334 1136; x_wconf 91 eng ltr of   ocrx_word word_1_296 bbox 343 1115 376 1136; x_wconf 91 eng ltr the   ocrx_word word_1_297 bbox 384 1115 439 1136; x_wconf 90 eng ltr three   ocrx_word word_1_298 bbox 448 1115 543 1141; x_wconf 84 eng ltr principal   ocrx_word word_1_299 bbox 554 1115 616 1136; x_wconf 87 eng ltr credit   ocrx_word word_1_300 bbox 626 1115 688 1141; x_wconf 89 eng ltr rating   ocrx_word word_1_301 bbox 698 1115 799 1141; x_wconf 87 eng ltr agencies.   ocrx_word word_1_302 bbox 815 1115 857 1136; x_wconf 93 eng ltr The   ocrx_word word_1_303 bbox 867 1116 956 1135; x_wconf 89 eng ltr FRBNY   ocrx_word word_1_304 bbox 966 1115 1033 1136; x_wconf 91 eng ltr would

       ocr_line line_1_28 bbox 182 1147 982 1173; baseline -0.001 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_305 bbox 182 1147 241 1168; x_wconf 93 eng ltr retain   ocrx_word word_1_306 bbox 251 1152 275 1168; x_wconf 91 eng ltr an   ocrx_word word_1_307 bbox 285 1149 337 1168; x_wconf 89 eng ltr asset   ocrx_word word_1_308 bbox 347 1152 446 1173; x_wconf 87 eng ltr manager,   ocrx_word word_1_309 bbox 458 1147 578 1168; x_wconf 90 eng ltr BlackRock   ocrx_word word_1_310 bbox 589 1147 688 1168; x_wconf 89 eng ltr Financial   ocrx_word word_1_311 bbox 701 1148 849 1173; x_wconf 90 eng ltr Management,   ocrx_word word_1_312 bbox 862 1148 901 1168; x_wconf 89 eng ltr Inc.   ocrx_word word_1_313 bbox 909 1147 947 1168; x_wconf 84 eng ltr and   ocrx_word word_1_314 bbox 959 1147 982 1168; x_wconf 97 eng ltr its

       ocr_line line_1_29 bbox 181 1179 713 1205; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_315 bbox 181 1179 280 1203; x_wconf 86 eng ltr affiliates,   ocrx_word word_1_316 bbox 292 1181 313 1200; x_wconf 94 eng ltr to   ocrx_word word_1_317 bbox 322 1184 406 1205; x_wconf 89 eng ltr manage   ocrx_word word_1_318 bbox 415 1179 448 1200; x_wconf 91 eng ltr the   ocrx_word word_1_319 bbox 457 1181 520 1200; x_wconf 92 eng ltr assets   ocrx_word word_1_320 bbox 529 1179 550 1200; x_wconf 92 eng ltr of   ocrx_word word_1_321 bbox 561 1179 641 1200; x_wconf 91 eng ltr Maiden   ocrx_word word_1_322 bbox 654 1180 713 1200; x_wconf 89 eng ltr Lane.





     ocr_carea block_1_6 bbox 180 1244 1018 1432
      ocr_par ltr par_1_6 bbox 180 1244 1018 1432
       ocr_line line_1_30 bbox 252 1244 958 1271; baseline 0 -6; x_size 24; x_descenders 4; x_ascenders 5  ocrx_word word_1_323 bbox 252 1246 282 1265; x_wconf 92 eng ltr To   ocrx_word word_1_324 bbox 290 1245 369 1265; x_wconf 91 eng ltr finance   ocrx_word word_1_325 bbox 379 1245 413 1265; x_wconf 93 eng ltr the   ocrx_word word_1_326 bbox 422 1245 525 1271; x_wconf 90 eng ltr purchase,   ocrx_word word_1_327 bbox 534 1245 567 1265; x_wconf 93 eng ltr the   ocrx_word word_1_328 bbox 577 1246 666 1265; x_wconf 90 eng ltr FRBNY   ocrx_word word_1_329 bbox 676 1245 743 1265; x_wconf 93 eng ltr would   ocrx_word word_1_330 bbox 755 1245 798 1265; x_wconf 94 eng ltr lend   ocrx_word word_1_331 bbox 808 1244 849 1267; x_wconf 86 eng $29   ocrx_word word_1_332 bbox 858 1245 928 1265; x_wconf 90 eng ltr billion   ocrx_word word_1_333 bbox 938 1247 958 1265; x_wconf 93 eng ltr to

       ocr_line line_1_31 bbox 182 1276 986 1299; baseline 0 -2; x_size 25.290615; x_descenders 5.2906156; x_ascenders 5  ocrx_word word_1_334 bbox 182 1277 263 1297; x_wconf 90 eng ltr Maiden   ocrx_word word_1_335 bbox 275 1278 335 1297; x_wconf 90 eng ltr Lane.   ocrx_word word_1_336 bbox 350 1277 418 1297; x_wconf 85 eng ltr JPMC   ocrx_word word_1_337 bbox 426 1277 494 1297; x_wconf 92 eng ltr would   ocrx_word word_1_338 bbox 505 1277 563 1297; x_wconf 91 eng ltr make   ocrx_word word_1_339 bbox 572 1282 583 1297; x_wconf 90 eng ltr a   ocrx_word word_1_340 bbox 591 1276 618 1299; x_wconf 81 eng $1   ocrx_word word_1_341 bbox 627 1277 696 1297; x_wconf 90 eng ltr billion   ocrx_word word_1_342 bbox 708 1277 751 1297; x_wconf 92 eng ltr loan   ocrx_word word_1_343 bbox 761 1279 781 1297; x_wconf 91 eng ltr to   ocrx_word word_1_344 bbox 792 1277 872 1297; x_wconf 91 eng ltr Maiden   ocrx_word word_1_345 bbox 885 1278 937 1297; x_wconf 91 eng ltr Lane   ocrx_word word_1_346 bbox 946 1277 986 1297; x_wconf 91 eng ltr that

       ocr_line line_1_32 bbox 180 1309 1007 1335; baseline -0.001 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_347 bbox 180 1309 247 1330; x_wconf 94 eng ltr would   ocrx_word word_1_348 bbox 258 1309 282 1330; x_wconf 90 eng ltr be   ocrx_word word_1_349 bbox 291 1309 431 1330; x_wconf 88 eng ltr subordinated   ocrx_word word_1_350 bbox 444 1309 462 1329; x_wconf 95 eng ltr in   ocrx_word word_1_351 bbox 473 1309 523 1335; x_wconf 88 eng ltr right   ocrx_word word_1_352 bbox 532 1309 552 1330; x_wconf 82 eng ltr of   ocrx_word word_1_353 bbox 563 1311 656 1335; x_wconf 91 eng ltr payment   ocrx_word word_1_354 bbox 665 1311 685 1330; x_wconf 91 eng ltr to   ocrx_word word_1_355 bbox 693 1309 726 1330; x_wconf 92 eng ltr the   ocrx_word word_1_356 bbox 736 1310 847 1330; x_wconf 84 eng ltr FRBNY's   ocrx_word word_1_357 bbox 857 1309 909 1330; x_wconf 90 eng ltr loan.   ocrx_word word_1_358 bbox 927 1309 1007 1330; x_wconf 92 eng ltr Maiden

       ocr_line line_1_33 bbox 182 1341 981 1367; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_359 bbox 182 1342 235 1362; x_wconf 94 eng ltr Lane   ocrx_word word_1_360 bbox 243 1341 310 1362; x_wconf 91 eng ltr would   ocrx_word word_1_361 bbox 321 1341 345 1362; x_wconf 88 eng ltr be   ocrx_word word_1_362 bbox 354 1341 454 1367; x_wconf 88 eng ltr obligated   ocrx_word word_1_363 bbox 465 1343 485 1362; x_wconf 91 eng ltr to   ocrx_word word_1_364 bbox 495 1346 554 1367; x_wconf 88 eng ltr repay   ocrx_word word_1_365 bbox 563 1341 588 1362; x_wconf 90 eng ltr all   ocrx_word word_1_366 bbox 598 1341 619 1362; x_wconf 91 eng ltr of   ocrx_word word_1_367 bbox 628 1341 661 1362; x_wconf 86 eng ltr the   ocrx_word word_1_368 bbox 670 1341 765 1367; x_wconf 89 eng ltr principal   ocrx_word word_1_369 bbox 776 1341 813 1362; x_wconf 90 eng ltr and   ocrx_word word_1_370 bbox 825 1341 904 1362; x_wconf 90 eng ltr interest   ocrx_word word_1_371 bbox 913 1346 938 1362; x_wconf 93 eng ltr on   ocrx_word word_1_372 bbox 948 1341 981 1362; x_wconf 91 eng ltr the

       ocr_line line_1_34 bbox 182 1373 1011 1399; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_373 bbox 182 1374 292 1394; x_wconf 86 eng ltr FRBNY’s   ocrx_word word_1_374 bbox 303 1373 347 1394; x_wconf 94 eng ltr loan   ocrx_word word_1_375 bbox 357 1373 424 1394; x_wconf 89 eng ltr before   ocrx_word word_1_376 bbox 436 1373 516 1399; x_wconf 87 eng ltr making   ocrx_word word_1_377 bbox 527 1373 622 1399; x_wconf 91 eng ltr principal   ocrx_word word_1_378 bbox 633 1378 654 1394; x_wconf 96 eng ltr or   ocrx_word word_1_379 bbox 664 1373 743 1394; x_wconf 91 eng ltr interest   ocrx_word word_1_380 bbox 753 1375 857 1399; x_wconf 92 eng ltr payments   ocrx_word word_1_381 bbox 866 1378 892 1394; x_wconf 96 eng ltr on   ocrx_word word_1_382 bbox 901 1373 934 1394; x_wconf 95 eng ltr the   ocrx_word word_1_383 bbox 943 1374 1011 1394; x_wconf 81 eng ltr JPMC

       ocr_line line_1_35 bbox 182 1405 1018 1432; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_384 bbox 182 1405 234 1426; x_wconf 89 eng ltr loan.   ocrx_word word_1_385 bbox 249 1406 297 1432; x_wconf 94 eng ltr Any   ocrx_word word_1_386 bbox 306 1405 390 1426; x_wconf 88 eng ltr residual   ocrx_word word_1_387 bbox 401 1405 447 1426; x_wconf 87 eng ltr cash   ocrx_word word_1_388 bbox 457 1405 517 1426; x_wconf 90 eng ltr flows   ocrx_word word_1_389 bbox 526 1405 593 1426; x_wconf 91 eng ltr would   ocrx_word word_1_390 bbox 604 1405 628 1426; x_wconf 93 eng ltr be   ocrx_word word_1_391 bbox 638 1405 682 1432; x_wconf 88 eng ltr paid   ocrx_word word_1_392 bbox 692 1407 712 1426; x_wconf 94 eng ltr to   ocrx_word word_1_393 bbox 721 1405 753 1426; x_wconf 91 eng ltr the   ocrx_word word_1_394 bbox 764 1406 860 1426; x_wconf 88 eng ltr FRBNY.   ocrx_word word_1_395 bbox 877 1405 918 1426; x_wconf 95 eng ltr The   ocrx_word word_1_396 bbox 929 1406 1018 1426; x_wconf 89 eng ltr FRBNY










  page
  would not receive any warrants or other equity interest in exchange for the
 loan in addition to the right to receive any residual cash flow. The FRBNY
 and JPMC loans would be secured by a first priority security interest in all of
 the assets of Maiden Lane.

  Both loans would mature in ten years, subject to extension by the
 FRBNY. The FRBNY loan would earn interest at the rate for primary credit
 extended by FRBNY in effect from time to time. The loan by JPMC would
 earn interest at the primary credit rate in effect from time to time plus 450

  basis points.1 [Footnote 1. On June 26, 2008, when the loan transactions
 were executed, the primary credit rate was 2.00 percent. End footnote.]

  On June 26, 2008, after all applicable regulatory approvals were
 obtained, JPMC’s acquisition of Bear Stearns closed and the FRBNY and
 JPMC loans to Maiden Lane were closed in accordance with the provisions
 of the Summary of Terms and Conditions.2 [Footnote 2. Because of
 adjustments in the values of some of the assets purchased by Maiden
 Lane from Bear Stearns, the amounts of the loans by FRBNY and
 JPMC were modified slightly from the values stated in the Summary
 of Terms and Conditions. The actual amount lent by the FRBNY was
 approximately $28.9 billion and the subordinated loan from JPMC was
 approximately $1.1 billion. End footnote.]
 Beginning after June 26, 2008, the Board’s weekly H.4.1 Statistical

  Release, “Factors Affecting Reserve Balances of Depository Institutions and
 Condition Statement of the Federal Reserve Banks,” includes information
 related to Maiden Lane. Among other things, the release discloses, as of the
 date of the release, the aggregate fair value of Maiden Lane’s net portfolio
 holdings and the book value of the principal and interest on the loans made
 to facilitate the Bear Stearns acquisition. The fair value of the net portfolio
 holdings of Maiden Lane is updated quarterly to reflect values at the end of
 each calendar quarter. Consistent with generally accepted accounting
 principles, the assets and liabilities of Maiden Lane have been consolidated
 with the assets and liabilities of the FRBNY in the statements of conditions
 shown on the release because the FRBNY is the primary beneficiary of
 Maiden Lane. The H.4.1 release is published on Thursdays and is available
 on the Board’s public website.

  As noted above, the FRBNY loan will be repaid from the proceeds of
 the sale of the assets held by Maiden Lane, plus any earnings derived from

  ocr







    ocr_page page_1 image "/tmp/apache-tika-8339622041597078551.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 180 150 1040 267
      ocr_par ltr par_1_1 bbox 180 150 1040 267
       ocr_line line_1_1 bbox 180 150 1014 176; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_1 bbox 180 150 247 170; x_wconf 90 eng ltr would   ocrx_word word_1_2 bbox 258 152 292 170; x_wconf 90 eng ltr not   ocrx_word word_1_3 bbox 301 150 379 170; x_wconf 88 eng ltr receive   ocrx_word word_1_4 bbox 388 155 427 176; x_wconf 88 eng ltr any   ocrx_word word_1_5 bbox 435 152 530 170; x_wconf 85 eng ltr warrants   ocrx_word word_1_6 bbox 539 155 560 170; x_wconf 93 eng ltr or   ocrx_word word_1_7 bbox 569 150 624 170; x_wconf 85 eng ltr other   ocrx_word word_1_8 bbox 634 150 702 176; x_wconf 86 eng ltr equity   ocrx_word word_1_9 bbox 712 150 791 170; x_wconf 88 eng ltr interest   ocrx_word word_1_10 bbox 802 150 819 170; x_wconf 97 eng ltr in   ocrx_word word_1_11 bbox 829 150 932 176; x_wconf 86 eng ltr exchange   ocrx_word word_1_12 bbox 941 150 971 170; x_wconf 97 eng ltr for   ocrx_word word_1_13 bbox 981 150 1014 170; x_wconf 90 eng ltr the

       ocr_line line_1_2 bbox 182 182 1024 208; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_14 bbox 182 182 226 202; x_wconf 90 eng ltr loan   ocrx_word word_1_15 bbox 237 182 255 202; x_wconf 95 eng ltr in   ocrx_word word_1_16 bbox 265 182 353 202; x_wconf 88 eng ltr addition   ocrx_word word_1_17 bbox 363 184 383 202; x_wconf 94 eng ltr to   ocrx_word word_1_18 bbox 391 182 424 202; x_wconf 88 eng ltr the   ocrx_word word_1_19 bbox 434 182 484 208; x_wconf 89 eng ltr right   ocrx_word word_1_20 bbox 492 184 513 202; x_wconf 93 eng ltr to   ocrx_word word_1_21 bbox 523 182 600 202; x_wconf 87 eng ltr receive   ocrx_word word_1_22 bbox 610 187 648 208; x_wconf 92 eng ltr any   ocrx_word word_1_23 bbox 658 182 742 202; x_wconf 87 eng ltr residual   ocrx_word word_1_24 bbox 753 182 799 202; x_wconf 92 eng ltr cash   ocrx_word word_1_25 bbox 809 182 864 202; x_wconf 90 eng ltr flow.   ocrx_word word_1_26 bbox 881 182 923 202; x_wconf 94 eng ltr The   ocrx_word word_1_27 bbox 934 183 1024 202; x_wconf 89 eng ltr FRBNY

       ocr_line line_1_3 bbox 181 214 1040 240; baseline -0.001 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_28 bbox 181 214 218 235; x_wconf 91 eng ltr and   ocrx_word word_1_29 bbox 228 215 296 235; x_wconf 84 eng ltr JPMC   ocrx_word word_1_30 bbox 307 214 362 235; x_wconf 87 eng ltr loans   ocrx_word word_1_31 bbox 371 214 438 235; x_wconf 91 eng ltr would   ocrx_word word_1_32 bbox 449 214 473 235; x_wconf 89 eng ltr be   ocrx_word word_1_33 bbox 482 214 563 235; x_wconf 84 eng ltr secured   ocrx_word word_1_34 bbox 575 214 601 240; x_wconf 89 eng ltr by   ocrx_word word_1_35 bbox 609 219 621 235; x_wconf 91 eng ltr a   ocrx_word word_1_36 bbox 628 214 670 235; x_wconf 86 eng ltr first   ocrx_word word_1_37 bbox 682 214 763 240; x_wconf 88 eng ltr priority   ocrx_word word_1_38 bbox 772 214 858 240; x_wconf 87 eng ltr security   ocrx_word word_1_39 bbox 869 214 947 235; x_wconf 86 eng ltr interest   ocrx_word word_1_40 bbox 958 214 976 234; x_wconf 95 eng ltr in   ocrx_word word_1_41 bbox 986 214 1010 235; x_wconf 85 eng ltr all   ocrx_word word_1_42 bbox 1019 214 1040 235; x_wconf 91 eng ltr of

       ocr_line line_1_4 bbox 180 246 479 267; baseline 0 0; x_size 27.249596; x_descenders 6.2495947; x_ascenders 5  ocrx_word word_1_43 bbox 180 246 213 267; x_wconf 90 eng ltr the   ocrx_word word_1_44 bbox 222 248 286 267; x_wconf 85 eng ltr assets   ocrx_word word_1_45 bbox 294 246 315 267; x_wconf 91 eng ltr of   ocrx_word word_1_46 bbox 326 246 407 267; x_wconf 88 eng ltr Maiden   ocrx_word word_1_47 bbox 419 247 479 267; x_wconf 92 eng ltr Lane.





     ocr_carea block_1_2 bbox 180 318 1103 1335
      ocr_par ltr par_1_2 bbox 253 318 1103 409
       ocr_line line_1_5 bbox 254 318 975 344; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_48 bbox 254 318 304 338; x_wconf 91 eng ltr Both   ocrx_word word_1_49 bbox 315 318 371 338; x_wconf 85 eng ltr loans   ocrx_word word_1_50 bbox 378 318 446 338; x_wconf 94 eng ltr would   ocrx_word word_1_51 bbox 456 320 531 338; x_wconf 90 eng ltr mature   ocrx_word word_1_52 bbox 541 318 558 338; x_wconf 97 eng ltr in   ocrx_word word_1_53 bbox 567 320 599 338; x_wconf 93 eng ltr ten   ocrx_word word_1_54 bbox 608 323 671 344; x_wconf 94 eng ltr years,   ocrx_word word_1_55 bbox 681 318 758 344; x_wconf 82 eng ltr subject   ocrx_word word_1_56 bbox 766 320 786 338; x_wconf 97 eng ltr to   ocrx_word word_1_57 bbox 795 318 899 338; x_wconf 90 eng ltr extension   ocrx_word word_1_58 bbox 909 318 935 344; x_wconf 91 eng ltr by   ocrx_word word_1_59 bbox 942 318 975 338; x_wconf 93 eng ltr the

       ocr_line line_1_6 bbox 254 350 1103 376; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_60 bbox 254 351 350 371; x_wconf 88 eng ltr FRBNY.   ocrx_word word_1_61 bbox 360 350 402 371; x_wconf 89 eng ltr The   ocrx_word word_1_62 bbox 412 351 502 371; x_wconf 89 eng ltr FRBNY   ocrx_word word_1_63 bbox 512 350 557 371; x_wconf 92 eng ltr loan   ocrx_word word_1_64 bbox 565 350 634 371; x_wconf 89 eng ltr would   ocrx_word word_1_65 bbox 643 355 689 371; x_wconf 89 eng ltr earn   ocrx_word word_1_66 bbox 700 350 780 371; x_wconf 88 eng ltr interest   ocrx_word word_1_67 bbox 788 352 807 371; x_wconf 90 eng ltr at   ocrx_word word_1_68 bbox 815 350 848 371; x_wconf 91 eng ltr the   ocrx_word word_1_69 bbox 857 352 896 371; x_wconf 88 eng ltr rate   ocrx_word word_1_70 bbox 905 350 937 371; x_wconf 89 eng ltr for   ocrx_word word_1_71 bbox 946 350 1032 376; x_wconf 89 eng ltr primary   ocrx_word word_1_72 bbox 1041 350 1103 371; x_wconf 88 eng ltr credit

       ocr_line line_1_7 bbox 253 382 1090 409; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_73 bbox 253 382 351 403; x_wconf 89 eng ltr extended   ocrx_word word_1_74 bbox 361 382 388 409; x_wconf 91 eng ltr by   ocrx_word word_1_75 bbox 397 383 487 403; x_wconf 91 eng ltr FRBNY   ocrx_word word_1_76 bbox 497 382 515 403; x_wconf 96 eng ltr in   ocrx_word word_1_77 bbox 524 382 587 403; x_wconf 88 eng ltr effect   ocrx_word word_1_78 bbox 595 382 647 403; x_wconf 91 eng ltr from   ocrx_word word_1_79 bbox 656 382 704 403; x_wconf 88 eng ltr time   ocrx_word word_1_80 bbox 713 385 733 403; x_wconf 92 eng ltr to   ocrx_word word_1_81 bbox 741 382 795 403; x_wconf 93 eng ltr time.   ocrx_word word_1_82 bbox 805 382 847 403; x_wconf 94 eng ltr The   ocrx_word word_1_83 bbox 857 382 902 403; x_wconf 90 eng ltr loan   ocrx_word word_1_84 bbox 912 382 938 409; x_wconf 89 eng ltr by   ocrx_word word_1_85 bbox 945 383 1014 403; x_wconf 81 eng ltr JPMC   ocrx_word word_1_86 bbox 1022 382 1090 403; x_wconf 91 eng ltr would




      ocr_par ltr par_1_3 bbox 180 414 1078 502
       ocr_line line_1_8 bbox 253 414 1078 440; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_87 bbox 253 419 299 434; x_wconf 93 eng ltr earn   ocrx_word word_1_88 bbox 309 414 389 434; x_wconf 91 eng ltr interest   ocrx_word word_1_89 bbox 397 416 417 434; x_wconf 92 eng ltr at   ocrx_word word_1_90 bbox 424 414 457 434; x_wconf 91 eng ltr the   ocrx_word word_1_91 bbox 467 414 553 440; x_wconf 90 eng ltr primary   ocrx_word word_1_92 bbox 562 414 624 434; x_wconf 85 eng ltr credit   ocrx_word word_1_93 bbox 633 416 672 434; x_wconf 93 eng ltr rate   ocrx_word word_1_94 bbox 683 414 701 434; x_wconf 98 eng ltr in   ocrx_word word_1_95 bbox 710 414 773 434; x_wconf 84 eng ltr effect   ocrx_word word_1_96 bbox 780 414 833 434; x_wconf 91 eng ltr from   ocrx_word word_1_97 bbox 842 414 890 434; x_wconf 90 eng ltr time   ocrx_word word_1_98 bbox 898 416 919 434; x_wconf 94 eng ltr to   ocrx_word word_1_99 bbox 927 414 976 434; x_wconf 93 eng ltr time   ocrx_word word_1_100 bbox 985 414 1030 440; x_wconf 85 eng ltr plus   ocrx_word word_1_101 bbox 1038 414 1078 434; x_wconf 86 eng 450

       ocr_line line_1_9 bbox 182 440 983 471; baseline -0.001 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_102 bbox 182 445 235 466; x_wconf 86 eng ltr basis   ocrx_word word_1_103 bbox 244 440 326 471; x_wconf 82 eng ltr points.1   ocrx_word word_1_104 bbox 336 445 441 471; x_wconf 85 eng ltr [Footnote   ocrx_word word_1_105 bbox 451 446 468 465; x_wconf 99 eng 1.   ocrx_word word_1_106 bbox 478 446 509 466; x_wconf 95 eng ltr On   ocrx_word word_1_107 bbox 518 446 568 466; x_wconf 83 eng ltr June   ocrx_word word_1_108 bbox 577 446 609 469; x_wconf 88 eng 26,   ocrx_word word_1_109 bbox 619 446 678 469; x_wconf 89 eng 2008,   ocrx_word word_1_110 bbox 688 445 746 466; x_wconf 90 eng ltr when   ocrx_word word_1_111 bbox 755 445 788 466; x_wconf 87 eng ltr the   ocrx_word word_1_112 bbox 798 445 842 466; x_wconf 89 eng ltr loan   ocrx_word word_1_113 bbox 851 445 983 466; x_wconf 87 eng ltr transactions

       ocr_line line_1_10 bbox 180 476 974 502; baseline 0 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_114 bbox 180 481 233 497; x_wconf 93 eng ltr were   ocrx_word word_1_115 bbox 242 476 346 500; x_wconf 87 eng ltr executed,   ocrx_word word_1_116 bbox 355 476 388 497; x_wconf 91 eng ltr the   ocrx_word word_1_117 bbox 398 476 484 502; x_wconf 94 eng ltr primary   ocrx_word word_1_118 bbox 493 476 555 497; x_wconf 91 eng ltr credit   ocrx_word word_1_119 bbox 564 478 604 497; x_wconf 91 eng ltr rate   ocrx_word word_1_120 bbox 612 481 654 497; x_wconf 88 eng ltr was   ocrx_word word_1_121 bbox 663 477 710 497; x_wconf 87 eng 2.00   ocrx_word word_1_122 bbox 720 478 805 502; x_wconf 93 eng ltr percent.   ocrx_word word_1_123 bbox 816 476 858 497; x_wconf 90 eng ltr End   ocrx_word word_1_124 bbox 867 476 974 502; x_wconf 80 eng ltr footnote]




      ocr_par ltr par_1_4 bbox 253 510 963 536
       ocr_line line_1_11 bbox 253 510 963 536; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_125 bbox 253 511 284 531; x_wconf 95 eng ltr On   ocrx_word word_1_126 bbox 293 511 343 531; x_wconf 82 eng ltr June   ocrx_word word_1_127 bbox 352 511 383 534; x_wconf 87 eng 26,   ocrx_word word_1_128 bbox 393 511 452 534; x_wconf 82 eng 2008,   ocrx_word word_1_129 bbox 462 510 512 531; x_wconf 88 eng ltr after   ocrx_word word_1_130 bbox 520 510 545 531; x_wconf 91 eng ltr all   ocrx_word word_1_131 bbox 555 510 667 536; x_wconf 85 eng ltr applicable   ocrx_word word_1_132 bbox 676 510 788 536; x_wconf 86 eng ltr regulatory   ocrx_word word_1_133 bbox 796 510 902 536; x_wconf 88 eng ltr approvals   ocrx_word word_1_134 bbox 910 515 963 531; x_wconf 95 eng ltr were




      ocr_par ltr par_1_5 bbox 253 545 1076 571
       ocr_line line_1_12 bbox 253 545 1076 571; baseline 0 -6; x_size 24; x_descenders 4; x_ascenders 5  ocrx_word word_1_135 bbox 253 545 353 569; x_wconf 92 eng ltr obtained,   ocrx_word word_1_136 bbox 363 545 452 565; x_wconf 86 eng ltr JPMC's   ocrx_word word_1_137 bbox 461 545 581 571; x_wconf 88 eng ltr acquisition   ocrx_word word_1_138 bbox 591 545 613 565; x_wconf 92 eng ltr of   ocrx_word word_1_139 bbox 622 546 672 565; x_wconf 93 eng ltr Bear   ocrx_word word_1_140 bbox 681 545 761 565; x_wconf 86 eng ltr Stearns   ocrx_word word_1_141 bbox 770 545 839 565; x_wconf 91 eng ltr closed   ocrx_word word_1_142 bbox 849 545 887 565; x_wconf 94 eng ltr and   ocrx_word word_1_143 bbox 895 545 928 565; x_wconf 92 eng ltr the   ocrx_word word_1_144 bbox 938 546 1029 565; x_wconf 88 eng ltr FRBNY   ocrx_word word_1_145 bbox 1038 545 1076 565; x_wconf 94 eng ltr and




      ocr_par ltr par_1_6 bbox 252 576 1095 602
       ocr_line line_1_13 bbox 252 576 1095 602; baseline -0.001 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_146 bbox 252 577 321 597; x_wconf 84 eng ltr JPMC   ocrx_word word_1_147 bbox 331 576 387 597; x_wconf 92 eng ltr loans   ocrx_word word_1_148 bbox 395 578 416 597; x_wconf 93 eng ltr to   ocrx_word word_1_149 bbox 426 576 508 597; x_wconf 91 eng ltr Maiden   ocrx_word word_1_150 bbox 519 577 571 597; x_wconf 92 eng ltr Lane   ocrx_word word_1_151 bbox 580 581 633 597; x_wconf 88 eng ltr were   ocrx_word word_1_152 bbox 642 576 711 597; x_wconf 91 eng ltr closed   ocrx_word word_1_153 bbox 722 576 740 596; x_wconf 96 eng ltr in   ocrx_word word_1_154 bbox 749 576 873 597; x_wconf 86 eng ltr accordance   ocrx_word word_1_155 bbox 881 576 929 596; x_wconf 96 eng ltr with   ocrx_word word_1_156 bbox 938 576 971 597; x_wconf 94 eng ltr the   ocrx_word word_1_157 bbox 981 576 1095 602; x_wconf 90 eng ltr provisions




      ocr_par ltr par_1_7 bbox 253 602 1008 633
       ocr_line line_1_14 bbox 253 602 1008 633; baseline 0 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_158 bbox 253 607 275 628; x_wconf 91 eng ltr of   ocrx_word word_1_159 bbox 283 607 315 628; x_wconf 89 eng ltr the   ocrx_word word_1_160 bbox 325 608 432 633; x_wconf 87 eng ltr Summary   ocrx_word word_1_161 bbox 440 607 462 628; x_wconf 93 eng ltr of   ocrx_word word_1_162 bbox 470 608 540 628; x_wconf 90 eng ltr Terms   ocrx_word word_1_163 bbox 549 607 586 628; x_wconf 96 eng ltr and   ocrx_word word_1_164 bbox 596 602 733 628; x_wconf 87 eng ltr Conditions.2   ocrx_word word_1_165 bbox 743 607 849 633; x_wconf 92 eng ltr [Footnote   ocrx_word word_1_166 bbox 858 608 875 627; x_wconf 94 eng 2.   ocrx_word word_1_167 bbox 887 608 977 628; x_wconf 91 eng ltr Because   ocrx_word word_1_168 bbox 986 607 1008 628; x_wconf 92 eng ltr of




      ocr_par ltr par_1_8 bbox 253 638 1021 664
       ocr_line line_1_15 bbox 253 638 1021 664; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_169 bbox 253 638 385 664; x_wconf 88 eng ltr adjustments   ocrx_word word_1_170 bbox 395 638 413 659; x_wconf 95 eng ltr in   ocrx_word word_1_171 bbox 422 638 455 659; x_wconf 89 eng ltr the   ocrx_word word_1_172 bbox 463 638 534 659; x_wconf 87 eng ltr values   ocrx_word word_1_173 bbox 542 638 565 659; x_wconf 89 eng ltr of   ocrx_word word_1_174 bbox 572 643 630 659; x_wconf 89 eng ltr some   ocrx_word word_1_175 bbox 639 638 661 659; x_wconf 94 eng ltr of   ocrx_word word_1_176 bbox 668 638 701 659; x_wconf 89 eng ltr the   ocrx_word word_1_177 bbox 710 640 774 659; x_wconf 89 eng ltr assets   ocrx_word word_1_178 bbox 783 638 893 664; x_wconf 89 eng ltr purchased   ocrx_word word_1_179 bbox 904 638 930 664; x_wconf 89 eng ltr by   ocrx_word word_1_180 bbox 939 638 1021 659; x_wconf 92 eng ltr Maiden




      ocr_par ltr par_1_9 bbox 254 669 986 696
       ocr_line line_1_16 bbox 254 669 986 696; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_181 bbox 254 670 307 690; x_wconf 91 eng ltr Lane   ocrx_word word_1_182 bbox 315 670 367 690; x_wconf 96 eng ltr from   ocrx_word word_1_183 bbox 378 670 428 690; x_wconf 91 eng ltr Bear   ocrx_word word_1_184 bbox 437 670 523 693; x_wconf 81 eng ltr Stearns,   ocrx_word word_1_185 bbox 532 669 565 690; x_wconf 92 eng ltr the   ocrx_word word_1_186 bbox 574 672 667 690; x_wconf 86 eng ltr amounts   ocrx_word word_1_187 bbox 676 670 698 690; x_wconf 94 eng ltr of   ocrx_word word_1_188 bbox 706 669 738 690; x_wconf 92 eng ltr the   ocrx_word word_1_189 bbox 749 669 805 690; x_wconf 87 eng ltr loans   ocrx_word word_1_190 bbox 814 669 840 696; x_wconf 93 eng ltr by   ocrx_word word_1_191 bbox 849 670 939 690; x_wconf 89 eng ltr FRBNY   ocrx_word word_1_192 bbox 948 669 986 690; x_wconf 92 eng ltr and




      ocr_par ltr par_1_10 bbox 252 701 1022 727
       ocr_line line_1_17 bbox 252 701 1022 727; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_193 bbox 252 701 321 721; x_wconf 83 eng ltr JPMC   ocrx_word word_1_194 bbox 329 706 382 721; x_wconf 92 eng ltr were   ocrx_word word_1_195 bbox 392 701 490 721; x_wconf 94 eng ltr modified   ocrx_word word_1_196 bbox 499 701 582 727; x_wconf 89 eng ltr slightly   ocrx_word word_1_197 bbox 590 701 642 721; x_wconf 93 eng ltr from   ocrx_word word_1_198 bbox 651 701 684 721; x_wconf 97 eng ltr the   ocrx_word word_1_199 bbox 692 701 763 721; x_wconf 90 eng ltr values   ocrx_word word_1_200 bbox 771 701 834 721; x_wconf 91 eng ltr stated   ocrx_word word_1_201 bbox 845 701 863 721; x_wconf 96 eng ltr in   ocrx_word word_1_202 bbox 872 701 905 721; x_wconf 92 eng ltr the   ocrx_word word_1_203 bbox 914 701 1022 727; x_wconf 83 eng ltr Summary




      ocr_par ltr par_1_11 bbox 253 732 1028 758
       ocr_line line_1_18 bbox 253 732 1028 758; baseline -0.001 -5; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_204 bbox 253 732 275 753; x_wconf 94 eng ltr of   ocrx_word word_1_205 bbox 283 733 353 753; x_wconf 91 eng ltr Terms   ocrx_word word_1_206 bbox 362 732 399 753; x_wconf 89 eng ltr and   ocrx_word word_1_207 bbox 409 732 536 753; x_wconf 88 eng ltr Conditions.   ocrx_word word_1_208 bbox 545 732 587 753; x_wconf 92 eng ltr The   ocrx_word word_1_209 bbox 596 732 660 753; x_wconf 89 eng ltr actual   ocrx_word word_1_210 bbox 670 734 753 753; x_wconf 92 eng ltr amount   ocrx_word word_1_211 bbox 762 732 802 753; x_wconf 90 eng ltr lent   ocrx_word word_1_212 bbox 811 732 837 758; x_wconf 87 eng ltr by   ocrx_word word_1_213 bbox 844 732 877 753; x_wconf 88 eng ltr the   ocrx_word word_1_214 bbox 887 733 977 752; x_wconf 89 eng ltr FRBNY   ocrx_word word_1_215 bbox 986 737 1028 753; x_wconf 90 eng ltr was




      ocr_par ltr par_1_12 bbox 253 763 1048 789
       ocr_line line_1_19 bbox 253 763 1048 789; baseline 0 -6; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_216 bbox 253 763 413 789; x_wconf 87 eng ltr approximately   ocrx_word word_1_217 bbox 421 763 483 785; x_wconf 84 eng $28.9   ocrx_word word_1_218 bbox 492 763 562 784; x_wconf 93 eng ltr billion   ocrx_word word_1_219 bbox 572 763 610 784; x_wconf 91 eng ltr and   ocrx_word word_1_220 bbox 619 763 652 784; x_wconf 89 eng ltr the   ocrx_word word_1_221 bbox 660 763 803 784; x_wconf 86 eng ltr subordinated   ocrx_word word_1_222 bbox 813 763 858 784; x_wconf 91 eng ltr loan   ocrx_word word_1_223 bbox 867 763 919 784; x_wconf 89 eng ltr from   ocrx_word word_1_224 bbox 928 764 997 784; x_wconf 82 eng ltr JPMC   ocrx_word word_1_225 bbox 1005 768 1048 784; x_wconf 89 eng ltr was




      ocr_par ltr par_1_13 bbox 253 794 723 820
       ocr_line line_1_20 bbox 253 794 723 820; baseline 0 -5; x_size 27; x_descenders 5; x_ascenders 6  ocrx_word word_1_226 bbox 253 794 413 820; x_wconf 87 eng ltr approximately   ocrx_word word_1_227 bbox 421 794 468 817; x_wconf 87 eng $1.1   ocrx_word word_1_228 bbox 478 794 554 815; x_wconf 86 eng ltr billion.   ocrx_word word_1_229 bbox 566 794 607 815; x_wconf 92 eng ltr End   ocrx_word word_1_230 bbox 616 794 723 820; x_wconf 79 eng ltr footnote]




      ocr_par ltr par_1_14 bbox 180 826 1036 1271
       ocr_line line_1_21 bbox 254 826 1006 853; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_231 bbox 254 826 366 853; x_wconf 87 eng ltr Beginning   ocrx_word word_1_232 bbox 377 826 423 847; x_wconf 91 eng ltr after   ocrx_word word_1_233 bbox 434 827 484 847; x_wconf 82 eng ltr June   ocrx_word word_1_234 bbox 493 827 526 850; x_wconf 85 eng 26,   ocrx_word word_1_235 bbox 535 827 596 850; x_wconf 83 eng 2008,   ocrx_word word_1_236 bbox 604 826 637 847; x_wconf 94 eng ltr the   ocrx_word word_1_237 bbox 648 826 733 847; x_wconf 87 eng ltr Board’s   ocrx_word word_1_238 bbox 741 826 820 853; x_wconf 93 eng ltr weekly   ocrx_word word_1_239 bbox 831 827 891 847; x_wconf 92 eng ltr H.4.1   ocrx_word word_1_240 bbox 900 826 1006 847; x_wconf 86 eng ltr Statistical

       ocr_line line_1_22 bbox 182 859 1036 885; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_241 bbox 182 859 272 883; x_wconf 89 eng ltr Release,   ocrx_word word_1_242 bbox 282 860 375 879; x_wconf 84 eng ltr “Factors   ocrx_word word_1_243 bbox 383 859 484 885; x_wconf 90 eng ltr Affecting   ocrx_word word_1_244 bbox 499 860 586 879; x_wconf 90 eng ltr Reserve   ocrx_word word_1_245 bbox 596 859 694 879; x_wconf 91 eng ltr Balances   ocrx_word word_1_246 bbox 703 859 724 879; x_wconf 93 eng ltr of   ocrx_word word_1_247 bbox 735 859 855 885; x_wconf 85 eng ltr Depository   ocrx_word word_1_248 bbox 867 859 989 879; x_wconf 89 eng ltr Institutions   ocrx_word word_1_249 bbox 998 859 1036 879; x_wconf 94 eng ltr and

       ocr_line line_1_23 bbox 181 891 1005 915; baseline 0 -4; x_size 24; x_descenders 4; x_ascenders 5  ocrx_word word_1_250 bbox 181 891 289 911; x_wconf 90 eng ltr Condition   ocrx_word word_1_251 bbox 300 891 409 911; x_wconf 89 eng ltr Statement   ocrx_word word_1_252 bbox 419 891 439 911; x_wconf 92 eng ltr of   ocrx_word word_1_253 bbox 449 891 481 911; x_wconf 92 eng ltr the   ocrx_word word_1_254 bbox 492 891 570 911; x_wconf 92 eng ltr Federal   ocrx_word word_1_255 bbox 582 892 669 911; x_wconf 88 eng ltr Reserve   ocrx_word word_1_256 bbox 680 891 765 915; x_wconf 91 eng ltr Banks,"   ocrx_word word_1_257 bbox 776 891 866 911; x_wconf 90 eng ltr includes   ocrx_word word_1_258 bbox 880 891 1005 911; x_wconf 88 eng ltr information

       ocr_line line_1_24 bbox 182 923 1034 949; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_259 bbox 182 923 253 944; x_wconf 92 eng ltr related   ocrx_word word_1_260 bbox 263 925 284 944; x_wconf 90 eng ltr to   ocrx_word word_1_261 bbox 294 923 375 944; x_wconf 90 eng ltr Maiden   ocrx_word word_1_262 bbox 387 924 446 944; x_wconf 92 eng ltr Lane.   ocrx_word word_1_263 bbox 462 924 543 949; x_wconf 86 eng ltr Among   ocrx_word word_1_264 bbox 553 923 608 944; x_wconf 92 eng ltr other   ocrx_word word_1_265 bbox 617 923 691 949; x_wconf 88 eng ltr things,   ocrx_word word_1_266 bbox 699 923 732 944; x_wconf 92 eng ltr the   ocrx_word word_1_267 bbox 742 923 816 944; x_wconf 89 eng ltr release   ocrx_word word_1_268 bbox 826 923 932 947; x_wconf 88 eng ltr discloses,   ocrx_word word_1_269 bbox 941 928 963 944; x_wconf 91 eng ltr as   ocrx_word word_1_270 bbox 971 923 992 944; x_wconf 91 eng ltr of   ocrx_word word_1_271 bbox 1001 923 1034 944; x_wconf 90 eng ltr the

       ocr_line line_1_25 bbox 181 955 1012 981; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_272 bbox 181 955 225 976; x_wconf 89 eng ltr date   ocrx_word word_1_273 bbox 235 955 255 976; x_wconf 96 eng ltr of   ocrx_word word_1_274 bbox 264 955 297 976; x_wconf 86 eng ltr the   ocrx_word word_1_275 bbox 307 955 388 979; x_wconf 82 eng ltr release,   ocrx_word word_1_276 bbox 397 955 430 976; x_wconf 90 eng ltr the   ocrx_word word_1_277 bbox 439 957 545 981; x_wconf 89 eng ltr aggregate   ocrx_word word_1_278 bbox 554 955 590 976; x_wconf 90 eng ltr fair   ocrx_word word_1_279 bbox 600 955 659 976; x_wconf 90 eng ltr value   ocrx_word word_1_280 bbox 668 955 689 976; x_wconf 90 eng ltr of   ocrx_word word_1_281 bbox 700 955 781 976; x_wconf 94 eng ltr Maiden   ocrx_word word_1_282 bbox 792 956 865 976; x_wconf 88 eng ltr Lane's   ocrx_word word_1_283 bbox 875 957 907 976; x_wconf 94 eng ltr net   ocrx_word word_1_284 bbox 919 955 1012 981; x_wconf 91 eng ltr portfolio

       ocr_line line_1_26 bbox 182 987 1020 1013; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_285 bbox 182 987 275 1013; x_wconf 89 eng ltr holdings   ocrx_word word_1_286 bbox 284 987 321 1008; x_wconf 90 eng ltr and   ocrx_word word_1_287 bbox 331 987 364 1008; x_wconf 90 eng ltr the   ocrx_word word_1_288 bbox 374 987 427 1008; x_wconf 90 eng ltr book   ocrx_word word_1_289 bbox 435 987 494 1008; x_wconf 88 eng ltr value   ocrx_word word_1_290 bbox 503 987 524 1008; x_wconf 89 eng ltr of   ocrx_word word_1_291 bbox 533 987 566 1008; x_wconf 91 eng ltr the   ocrx_word word_1_292 bbox 576 987 671 1013; x_wconf 89 eng ltr principal   ocrx_word word_1_293 bbox 682 987 719 1008; x_wconf 92 eng ltr and   ocrx_word word_1_294 bbox 730 987 809 1008; x_wconf 88 eng ltr interest   ocrx_word word_1_295 bbox 819 992 844 1008; x_wconf 92 eng ltr on   ocrx_word word_1_296 bbox 853 987 886 1008; x_wconf 92 eng ltr the   ocrx_word word_1_297 bbox 896 987 952 1008; x_wconf 88 eng ltr loans   ocrx_word word_1_298 bbox 962 987 1020 1008; x_wconf 91 eng ltr made

       ocr_line line_1_27 bbox 180 1019 1022 1046; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_299 bbox 180 1022 201 1040; x_wconf 91 eng ltr to   ocrx_word word_1_300 bbox 209 1019 303 1040; x_wconf 92 eng ltr facilitate   ocrx_word word_1_301 bbox 314 1019 347 1040; x_wconf 94 eng ltr the   ocrx_word word_1_302 bbox 357 1020 407 1040; x_wconf 91 eng ltr Bear   ocrx_word word_1_303 bbox 416 1020 496 1040; x_wconf 91 eng ltr Stearns   ocrx_word word_1_304 bbox 505 1019 632 1046; x_wconf 87 eng ltr acquisition.   ocrx_word word_1_305 bbox 648 1019 690 1040; x_wconf 94 eng ltr The   ocrx_word word_1_306 bbox 699 1019 735 1040; x_wconf 95 eng ltr fair   ocrx_word word_1_307 bbox 745 1019 804 1040; x_wconf 93 eng ltr value   ocrx_word word_1_308 bbox 813 1019 833 1040; x_wconf 88 eng ltr of   ocrx_word word_1_309 bbox 842 1019 875 1040; x_wconf 94 eng ltr the   ocrx_word word_1_310 bbox 885 1022 916 1040; x_wconf 93 eng ltr net   ocrx_word word_1_311 bbox 929 1019 1022 1046; x_wconf 91 eng ltr portfolio

       ocr_line line_1_28 bbox 182 1052 1020 1078; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_312 bbox 182 1052 275 1078; x_wconf 87 eng ltr holdings   ocrx_word word_1_313 bbox 284 1052 305 1072; x_wconf 96 eng ltr of   ocrx_word word_1_314 bbox 316 1052 397 1072; x_wconf 92 eng ltr Maiden   ocrx_word word_1_315 bbox 408 1053 461 1072; x_wconf 93 eng ltr Lane   ocrx_word word_1_316 bbox 471 1052 487 1072; x_wconf 95 eng ltr is   ocrx_word word_1_317 bbox 496 1052 581 1078; x_wconf 91 eng ltr updated   ocrx_word word_1_318 bbox 591 1052 690 1078; x_wconf 93 eng ltr quarterly   ocrx_word word_1_319 bbox 699 1054 719 1072; x_wconf 92 eng ltr to   ocrx_word word_1_320 bbox 729 1052 796 1072; x_wconf 92 eng ltr reflect   ocrx_word word_1_321 bbox 806 1052 876 1072; x_wconf 86 eng ltr values   ocrx_word word_1_322 bbox 885 1054 904 1072; x_wconf 92 eng ltr at   ocrx_word word_1_323 bbox 912 1052 945 1072; x_wconf 93 eng ltr the   ocrx_word word_1_324 bbox 954 1052 991 1072; x_wconf 94 eng ltr end   ocrx_word word_1_325 bbox 1000 1052 1020 1072; x_wconf 89 eng ltr of

       ocr_line line_1_29 bbox 181 1084 960 1110; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_326 bbox 181 1084 229 1104; x_wconf 87 eng ltr each   ocrx_word word_1_327 bbox 239 1084 331 1104; x_wconf 93 eng ltr calendar   ocrx_word word_1_328 bbox 341 1086 425 1110; x_wconf 91 eng ltr quarter.   ocrx_word word_1_329 bbox 442 1084 557 1104; x_wconf 85 eng ltr Consistent   ocrx_word word_1_330 bbox 566 1084 613 1104; x_wconf 97 eng ltr with   ocrx_word word_1_331 bbox 623 1084 725 1110; x_wconf 88 eng ltr generally   ocrx_word word_1_332 bbox 734 1084 828 1110; x_wconf 87 eng ltr accepted   ocrx_word word_1_333 bbox 841 1084 960 1110; x_wconf 89 eng ltr accounting

       ocr_line line_1_30 bbox 182 1116 1021 1142; baseline 0.001 -6; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_334 bbox 182 1116 296 1142; x_wconf 69 eng ltr principles,   ocrx_word word_1_335 bbox 305 1116 337 1137; x_wconf 93 eng ltr the   ocrx_word word_1_336 bbox 346 1118 410 1137; x_wconf 88 eng ltr assets   ocrx_word word_1_337 bbox 419 1116 456 1137; x_wconf 94 eng ltr and   ocrx_word word_1_338 bbox 467 1116 568 1137; x_wconf 89 eng ltr liabilities   ocrx_word word_1_339 bbox 577 1116 598 1137; x_wconf 92 eng ltr of   ocrx_word word_1_340 bbox 609 1116 689 1137; x_wconf 93 eng ltr Maiden   ocrx_word word_1_341 bbox 702 1117 754 1137; x_wconf 89 eng ltr Lane   ocrx_word word_1_342 bbox 764 1116 814 1137; x_wconf 91 eng ltr have   ocrx_word word_1_343 bbox 824 1116 873 1137; x_wconf 92 eng ltr been   ocrx_word word_1_344 bbox 884 1116 1021 1137; x_wconf 89 eng ltr consolidated

       ocr_line line_1_31 bbox 180 1148 1023 1169; baseline 0 0; x_size 27.228434; x_descenders 6.2284336; x_ascenders 5  ocrx_word word_1_345 bbox 180 1148 228 1169; x_wconf 90 eng ltr with   ocrx_word word_1_346 bbox 237 1148 270 1169; x_wconf 91 eng ltr the   ocrx_word word_1_347 bbox 279 1150 342 1169; x_wconf 88 eng ltr assets   ocrx_word word_1_348 bbox 351 1148 388 1169; x_wconf 88 eng ltr and   ocrx_word word_1_349 bbox 400 1148 500 1169; x_wconf 88 eng ltr liabilities   ocrx_word word_1_350 bbox 510 1148 530 1169; x_wconf 96 eng ltr of   ocrx_word word_1_351 bbox 539 1148 572 1169; x_wconf 95 eng ltr the   ocrx_word word_1_352 bbox 582 1149 672 1168; x_wconf 86 eng ltr FRBNY   ocrx_word word_1_353 bbox 683 1148 700 1168; x_wconf 94 eng ltr in   ocrx_word word_1_354 bbox 710 1148 742 1169; x_wconf 90 eng ltr the   ocrx_word word_1_355 bbox 751 1150 867 1169; x_wconf 87 eng ltr statements   ocrx_word word_1_356 bbox 876 1148 897 1169; x_wconf 92 eng ltr of   ocrx_word word_1_357 bbox 908 1148 1023 1169; x_wconf 89 eng ltr conditions

       ocr_line line_1_32 bbox 181 1180 974 1206; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_358 bbox 181 1180 250 1201; x_wconf 93 eng ltr shown   ocrx_word word_1_359 bbox 261 1185 286 1201; x_wconf 92 eng ltr on   ocrx_word word_1_360 bbox 295 1180 328 1201; x_wconf 93 eng ltr the   ocrx_word word_1_361 bbox 338 1180 412 1201; x_wconf 89 eng ltr release   ocrx_word word_1_362 bbox 422 1180 508 1201; x_wconf 90 eng ltr because   ocrx_word word_1_363 bbox 517 1180 549 1201; x_wconf 91 eng ltr the   ocrx_word word_1_364 bbox 560 1181 649 1201; x_wconf 90 eng ltr FRBNY   ocrx_word word_1_365 bbox 660 1180 676 1201; x_wconf 92 eng ltr is   ocrx_word word_1_366 bbox 684 1180 717 1201; x_wconf 92 eng ltr the   ocrx_word word_1_367 bbox 726 1180 812 1206; x_wconf 94 eng ltr primary   ocrx_word word_1_368 bbox 822 1180 943 1206; x_wconf 89 eng ltr beneficiary   ocrx_word word_1_369 bbox 953 1180 974 1201; x_wconf 90 eng ltr of

       ocr_line line_1_33 bbox 182 1212 1027 1239; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_370 bbox 182 1212 263 1233; x_wconf 90 eng ltr Maiden   ocrx_word word_1_371 bbox 275 1213 335 1233; x_wconf 91 eng ltr Lane.   ocrx_word word_1_372 bbox 350 1212 392 1233; x_wconf 92 eng ltr The   ocrx_word word_1_373 bbox 402 1213 462 1233; x_wconf 92 eng ltr H.4.1   ocrx_word word_1_374 bbox 471 1212 545 1233; x_wconf 88 eng ltr release   ocrx_word word_1_375 bbox 556 1212 572 1233; x_wconf 90 eng ltr is   ocrx_word word_1_376 bbox 581 1212 685 1239; x_wconf 92 eng ltr published   ocrx_word word_1_377 bbox 696 1218 721 1233; x_wconf 90 eng ltr on   ocrx_word word_1_378 bbox 731 1212 846 1239; x_wconf 90 eng ltr Thursdays   ocrx_word word_1_379 bbox 855 1212 892 1233; x_wconf 88 eng ltr and   ocrx_word word_1_380 bbox 904 1212 919 1233; x_wconf 90 eng ltr is   ocrx_word word_1_381 bbox 929 1212 1027 1233; x_wconf 88 eng ltr available

       ocr_line line_1_34 bbox 181 1245 520 1271; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_382 bbox 181 1250 206 1265; x_wconf 94 eng ltr on   ocrx_word word_1_383 bbox 215 1245 248 1265; x_wconf 94 eng ltr the   ocrx_word word_1_384 bbox 258 1245 343 1265; x_wconf 88 eng ltr Board's   ocrx_word word_1_385 bbox 353 1245 421 1271; x_wconf 91 eng ltr public   ocrx_word word_1_386 bbox 429 1245 520 1265; x_wconf 93 eng ltr website.




      ocr_par ltr par_1_15 bbox 180 1277 1027 1335
       ocr_line line_1_35 bbox 252 1277 1027 1303; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_387 bbox 252 1278 282 1297; x_wconf 93 eng ltr As   ocrx_word word_1_388 bbox 292 1277 350 1297; x_wconf 91 eng ltr noted   ocrx_word word_1_389 bbox 360 1277 431 1301; x_wconf 93 eng ltr above,   ocrx_word word_1_390 bbox 440 1277 473 1297; x_wconf 95 eng ltr the   ocrx_word word_1_391 bbox 483 1278 572 1297; x_wconf 89 eng ltr FRBNY   ocrx_word word_1_392 bbox 584 1277 627 1297; x_wconf 93 eng ltr loan   ocrx_word word_1_393 bbox 637 1277 678 1297; x_wconf 98 eng ltr will   ocrx_word word_1_394 bbox 689 1277 713 1297; x_wconf 93 eng ltr be   ocrx_word word_1_395 bbox 723 1277 788 1303; x_wconf 91 eng ltr repaid   ocrx_word word_1_396 bbox 798 1277 848 1297; x_wconf 93 eng ltr from   ocrx_word word_1_397 bbox 859 1277 892 1297; x_wconf 94 eng ltr the   ocrx_word word_1_398 bbox 902 1277 999 1303; x_wconf 85 eng ltr proceeds   ocrx_word word_1_399 bbox 1006 1277 1027 1297; x_wconf 91 eng ltr of

       ocr_line line_1_36 bbox 180 1309 1015 1335; baseline -0.001 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_400 bbox 180 1309 213 1330; x_wconf 96 eng ltr the   ocrx_word word_1_401 bbox 222 1309 263 1330; x_wconf 93 eng ltr sale   ocrx_word word_1_402 bbox 273 1309 293 1330; x_wconf 87 eng ltr of   ocrx_word word_1_403 bbox 302 1309 335 1330; x_wconf 92 eng ltr the   ocrx_word word_1_404 bbox 344 1311 407 1330; x_wconf 84 eng ltr assets   ocrx_word word_1_405 bbox 417 1309 461 1330; x_wconf 95 eng ltr held   ocrx_word word_1_406 bbox 472 1309 498 1335; x_wconf 94 eng ltr by   ocrx_word word_1_407 bbox 508 1309 589 1330; x_wconf 92 eng ltr Maiden   ocrx_word word_1_408 bbox 600 1310 660 1333; x_wconf 88 eng ltr Lane,   ocrx_word word_1_409 bbox 670 1309 714 1335; x_wconf 89 eng ltr plus   ocrx_word word_1_410 bbox 723 1314 761 1335; x_wconf 94 eng ltr any   ocrx_word word_1_411 bbox 770 1309 863 1335; x_wconf 87 eng ltr earnings   ocrx_word word_1_412 bbox 872 1309 952 1330; x_wconf 91 eng ltr derived   ocrx_word word_1_413 bbox 965 1309 1015 1330; x_wconf 85 eng ltr from










  page
  the assets prior to sale. The aggregate fair value of the Maiden Lane net
 portfolio holdings, which is updated quarterly to reflect values at the end of
 each calendar quarter, is reflected in the financial statements of the Federal
 Reserve Banks. Because the fair value reflects an estimated price that would
 be received if the assets were sold on the measurement date, the current fair
 value of the Maiden Lane holdings may fluctuate over different reporting
 periods. However, because the collateral assets for the loans are expected to
 be sold over time, the aggregate fair value for the Maiden Lane net portfolio
 holdings reported in any particular H.4.1 release does not reflect the amount
 of aggregate proceeds that could be received when the assets are actually
 sold over time.

  A number of facts mitigate the risk of losses being incurred on the
 FRBNY loan. First, there is a substantial pool of professionally-managed
 collateral at Maiden Lane that, as of March 14, 2008, was valued at $30
 billion. In addition, JPMC’s subordinated loan to Maiden Lane will absorb
 the first $1.1 billion of any loss that ultimately occurs. Moreover, and
 perhaps most importantly, the collateral will be sold over time in an orderly
 manner that is not affected by the unnaturally strong downward market
 pressures that have been associated with the recent liquidity crisis. Finally,
 the FRBNY is entitled to any residual cash flow generated by the collateral
 after the FRBNY and JPMC loans are repaid. Given these protections, the
 Board at this time does not believe that the extension of credit to facilitate
 the acquisition of Bear Stearns will result in any net cost to the taxpayers
 resulting from the failure to repay the principal and interest of the FRBNY
 loan.

  ocr







    ocr_page page_1 image "/tmp/apache-tika-1667070597300481699.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 180 150 1040 492
      ocr_par ltr par_1_1 bbox 180 150 1040 492
       ocr_line line_1_1 bbox 180 150 988 176; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_1 bbox 180 150 213 170; x_wconf 85 eng ltr the   ocrx_word word_1_2 bbox 222 152 286 170; x_wconf 83 eng ltr assets   ocrx_word word_1_3 bbox 295 150 346 176; x_wconf 89 eng ltr prior   ocrx_word word_1_4 bbox 355 152 376 170; x_wconf 96 eng ltr to   ocrx_word word_1_5 bbox 384 150 433 170; x_wconf 96 eng ltr sale.   ocrx_word word_1_6 bbox 449 150 490 170; x_wconf 91 eng ltr The   ocrx_word word_1_7 bbox 500 152 606 176; x_wconf 86 eng ltr aggregate   ocrx_word word_1_8 bbox 615 150 651 170; x_wconf 89 eng ltr fair   ocrx_word word_1_9 bbox 661 150 720 170; x_wconf 92 eng ltr value   ocrx_word word_1_10 bbox 729 150 750 170; x_wconf 92 eng ltr of   ocrx_word word_1_11 bbox 759 150 791 170; x_wconf 90 eng ltr the   ocrx_word word_1_12 bbox 802 150 882 170; x_wconf 88 eng ltr Maiden   ocrx_word word_1_13 bbox 894 151 947 170; x_wconf 94 eng ltr Lane   ocrx_word word_1_14 bbox 956 152 988 170; x_wconf 87 eng ltr net

       ocr_line line_1_2 bbox 182 182 1022 208; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_15 bbox 182 182 275 208; x_wconf 87 eng ltr portfolio   ocrx_word word_1_16 bbox 287 182 387 208; x_wconf 91 eng ltr holdings,   ocrx_word word_1_17 bbox 396 182 461 202; x_wconf 93 eng ltr which   ocrx_word word_1_18 bbox 473 182 489 202; x_wconf 91 eng ltr is   ocrx_word word_1_19 bbox 498 182 582 208; x_wconf 87 eng ltr updated   ocrx_word word_1_20 bbox 593 182 691 208; x_wconf 87 eng ltr quarterly   ocrx_word word_1_21 bbox 701 184 721 202; x_wconf 90 eng ltr to   ocrx_word word_1_22 bbox 731 182 797 202; x_wconf 86 eng ltr reflect   ocrx_word word_1_23 bbox 808 182 878 202; x_wconf 88 eng ltr values   ocrx_word word_1_24 bbox 887 184 906 202; x_wconf 91 eng ltr at   ocrx_word word_1_25 bbox 913 182 946 202; x_wconf 85 eng ltr the   ocrx_word word_1_26 bbox 955 182 992 202; x_wconf 93 eng ltr end   ocrx_word word_1_27 bbox 1001 182 1022 202; x_wconf 91 eng ltr of

       ocr_line line_1_3 bbox 181 214 1017 240; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_28 bbox 181 214 229 235; x_wconf 88 eng ltr each   ocrx_word word_1_29 bbox 239 214 331 235; x_wconf 88 eng ltr calendar   ocrx_word word_1_30 bbox 341 216 424 240; x_wconf 89 eng ltr quarter,   ocrx_word word_1_31 bbox 436 214 451 235; x_wconf 88 eng ltr is   ocrx_word word_1_32 bbox 461 214 552 235; x_wconf 81 eng ltr reflected   ocrx_word word_1_33 bbox 566 214 584 234; x_wconf 94 eng ltr in   ocrx_word word_1_34 bbox 593 214 626 235; x_wconf 86 eng ltr the   ocrx_word word_1_35 bbox 634 214 727 235; x_wconf 91 eng ltr financial   ocrx_word word_1_36 bbox 739 216 855 235; x_wconf 85 eng ltr statements   ocrx_word word_1_37 bbox 865 214 885 235; x_wconf 94 eng ltr of   ocrx_word word_1_38 bbox 895 214 927 235; x_wconf 89 eng ltr the   ocrx_word word_1_39 bbox 938 214 1017 235; x_wconf 90 eng ltr Federal

       ocr_line line_1_4 bbox 182 246 1040 272; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_40 bbox 182 247 269 267; x_wconf 86 eng ltr Reserve   ocrx_word word_1_41 bbox 279 246 354 267; x_wconf 86 eng ltr Banks.   ocrx_word word_1_42 bbox 370 247 460 267; x_wconf 88 eng ltr Because   ocrx_word word_1_43 bbox 468 246 501 267; x_wconf 90 eng ltr the   ocrx_word word_1_44 bbox 510 246 546 267; x_wconf 91 eng ltr fair   ocrx_word word_1_45 bbox 556 246 615 267; x_wconf 87 eng ltr value   ocrx_word word_1_46 bbox 625 246 703 267; x_wconf 86 eng ltr reflects   ocrx_word word_1_47 bbox 713 251 737 267; x_wconf 86 eng ltr an   ocrx_word word_1_48 bbox 747 246 850 267; x_wconf 91 eng ltr estimated   ocrx_word word_1_49 bbox 862 246 915 272; x_wconf 90 eng ltr price   ocrx_word word_1_50 bbox 923 246 964 267; x_wconf 88 eng ltr that   ocrx_word word_1_51 bbox 973 246 1040 267; x_wconf 88 eng ltr would

       ocr_line line_1_5 bbox 182 278 1027 302; baseline 0 -3; x_size 26.839434; x_descenders 5.8394337; x_ascenders 6  ocrx_word word_1_52 bbox 182 278 205 299; x_wconf 89 eng ltr be   ocrx_word word_1_53 bbox 215 278 305 299; x_wconf 89 eng ltr received   ocrx_word word_1_54 bbox 318 278 331 299; x_wconf 92 eng ltr if   ocrx_word word_1_55 bbox 340 278 372 299; x_wconf 90 eng ltr the   ocrx_word word_1_56 bbox 381 280 445 299; x_wconf 85 eng ltr assets   ocrx_word word_1_57 bbox 453 283 506 299; x_wconf 89 eng ltr were   ocrx_word word_1_58 bbox 515 278 558 299; x_wconf 87 eng ltr sold   ocrx_word word_1_59 bbox 569 283 594 299; x_wconf 93 eng ltr on   ocrx_word word_1_60 bbox 603 278 636 299; x_wconf 92 eng ltr the   ocrx_word word_1_61 bbox 646 280 791 299; x_wconf 89 eng ltr measurement   ocrx_word word_1_62 bbox 802 278 853 302; x_wconf 84 eng ltr date,   ocrx_word word_1_63 bbox 861 278 894 299; x_wconf 91 eng ltr the   ocrx_word word_1_64 bbox 903 280 980 299; x_wconf 88 eng ltr current   ocrx_word word_1_65 bbox 991 278 1027 299; x_wconf 92 eng ltr fair

       ocr_line line_1_6 bbox 180 310 999 337; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_66 bbox 180 310 239 331; x_wconf 91 eng ltr value   ocrx_word word_1_67 bbox 249 310 269 331; x_wconf 90 eng ltr of   ocrx_word word_1_68 bbox 278 310 311 331; x_wconf 91 eng ltr the   ocrx_word word_1_69 bbox 322 310 402 331; x_wconf 87 eng ltr Maiden   ocrx_word word_1_70 bbox 414 311 466 331; x_wconf 84 eng ltr Lane   ocrx_word word_1_71 bbox 476 310 570 337; x_wconf 90 eng ltr holdings   ocrx_word word_1_72 bbox 580 316 625 337; x_wconf 94 eng ltr may   ocrx_word word_1_73 bbox 633 310 728 331; x_wconf 90 eng ltr fluctuate   ocrx_word word_1_74 bbox 739 316 787 331; x_wconf 92 eng ltr over   ocrx_word word_1_75 bbox 796 310 887 331; x_wconf 89 eng ltr different   ocrx_word word_1_76 bbox 901 310 999 337; x_wconf 87 eng ltr reporting

       ocr_line line_1_7 bbox 182 343 1036 369; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_77 bbox 182 343 268 369; x_wconf 91 eng ltr periods.   ocrx_word word_1_78 bbox 285 344 390 367; x_wconf 88 eng ltr However,   ocrx_word word_1_79 bbox 401 343 487 363; x_wconf 89 eng ltr because   ocrx_word word_1_80 bbox 496 343 529 363; x_wconf 94 eng ltr the   ocrx_word word_1_81 bbox 538 343 638 363; x_wconf 91 eng ltr collateral   ocrx_word word_1_82 bbox 649 345 712 363; x_wconf 86 eng ltr assets   ocrx_word word_1_83 bbox 721 343 751 363; x_wconf 92 eng ltr for   ocrx_word word_1_84 bbox 760 343 793 363; x_wconf 91 eng ltr the   ocrx_word word_1_85 bbox 803 343 859 363; x_wconf 91 eng ltr loans   ocrx_word word_1_86 bbox 868 348 900 363; x_wconf 94 eng ltr are   ocrx_word word_1_87 bbox 909 343 1005 369; x_wconf 88 eng ltr expected   ocrx_word word_1_88 bbox 1016 345 1036 363; x_wconf 92 eng ltr to

       ocr_line line_1_8 bbox 182 375 1033 401; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_89 bbox 182 375 206 395; x_wconf 91 eng ltr be   ocrx_word word_1_90 bbox 214 375 258 395; x_wconf 89 eng ltr sold   ocrx_word word_1_91 bbox 268 380 316 395; x_wconf 88 eng ltr over   ocrx_word word_1_92 bbox 324 375 380 399; x_wconf 89 eng ltr time,   ocrx_word word_1_93 bbox 388 375 421 395; x_wconf 93 eng ltr the   ocrx_word word_1_94 bbox 429 377 536 401; x_wconf 89 eng ltr aggregate   ocrx_word word_1_95 bbox 545 375 581 395; x_wconf 91 eng ltr fair   ocrx_word word_1_96 bbox 591 375 650 395; x_wconf 93 eng ltr value   ocrx_word word_1_97 bbox 658 375 688 395; x_wconf 89 eng ltr for   ocrx_word word_1_98 bbox 698 375 731 395; x_wconf 88 eng ltr the   ocrx_word word_1_99 bbox 742 375 822 395; x_wconf 92 eng ltr Maiden   ocrx_word word_1_100 bbox 834 376 886 395; x_wconf 91 eng ltr Lane   ocrx_word word_1_101 bbox 896 377 928 395; x_wconf 97 eng ltr net   ocrx_word word_1_102 bbox 940 375 1033 401; x_wconf 87 eng ltr portfolio

       ocr_line line_1_9 bbox 182 407 1032 433; baseline 0.001 -6; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_103 bbox 182 407 275 433; x_wconf 88 eng ltr holdings   ocrx_word word_1_104 bbox 285 407 374 433; x_wconf 88 eng ltr reported   ocrx_word word_1_105 bbox 386 407 403 427; x_wconf 93 eng ltr in   ocrx_word word_1_106 bbox 413 412 452 433; x_wconf 92 eng ltr any   ocrx_word word_1_107 bbox 461 407 565 433; x_wconf 87 eng ltr particular   ocrx_word word_1_108 bbox 576 408 636 427; x_wconf 89 eng ltr H.4.1   ocrx_word word_1_109 bbox 645 407 719 428; x_wconf 88 eng ltr release   ocrx_word word_1_110 bbox 729 407 779 428; x_wconf 91 eng ltr does   ocrx_word word_1_111 bbox 788 409 821 428; x_wconf 94 eng ltr not   ocrx_word word_1_112 bbox 831 407 898 428; x_wconf 89 eng ltr reflect   ocrx_word word_1_113 bbox 908 407 941 428; x_wconf 90 eng ltr the   ocrx_word word_1_114 bbox 951 409 1032 428; x_wconf 90 eng ltr amount

       ocr_line line_1_10 bbox 181 439 996 465; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_115 bbox 181 439 202 460; x_wconf 92 eng ltr of   ocrx_word word_1_116 bbox 211 441 317 465; x_wconf 88 eng ltr aggregate   ocrx_word word_1_117 bbox 327 439 424 465; x_wconf 90 eng ltr proceeds   ocrx_word word_1_118 bbox 433 439 474 460; x_wconf 88 eng ltr that   ocrx_word word_1_119 bbox 482 439 541 460; x_wconf 88 eng ltr could   ocrx_word word_1_120 bbox 552 439 576 460; x_wconf 88 eng ltr be   ocrx_word word_1_121 bbox 586 439 676 460; x_wconf 87 eng ltr received   ocrx_word word_1_122 bbox 686 439 744 460; x_wconf 90 eng ltr when   ocrx_word word_1_123 bbox 754 439 787 460; x_wconf 88 eng ltr the   ocrx_word word_1_124 bbox 796 441 859 460; x_wconf 87 eng ltr assets   ocrx_word word_1_125 bbox 868 444 900 460; x_wconf 88 eng ltr are   ocrx_word word_1_126 bbox 910 439 996 465; x_wconf 88 eng ltr actually

       ocr_line line_1_11 bbox 181 471 346 492; baseline 0 0; x_size 27.228729; x_descenders 6.2287292; x_ascenders 5  ocrx_word word_1_127 bbox 181 471 224 492; x_wconf 88 eng ltr sold   ocrx_word word_1_128 bbox 235 476 282 492; x_wconf 91 eng ltr over   ocrx_word word_1_129 bbox 291 471 346 492; x_wconf 91 eng ltr time.





     ocr_carea block_1_2 bbox 180 536 1026 975
      ocr_par ltr par_1_2 bbox 180 536 1026 975
       ocr_line line_1_12 bbox 252 536 993 562; baseline 0 -5; x_size 27; x_descenders 6; x_ascenders 5  ocrx_word word_1_130 bbox 252 537 272 556; x_wconf 97 eng ltr A   ocrx_word word_1_131 bbox 281 536 364 557; x_wconf 90 eng ltr number   ocrx_word word_1_132 bbox 373 536 394 557; x_wconf 91 eng ltr of   ocrx_word word_1_133 bbox 403 536 453 557; x_wconf 88 eng ltr facts   ocrx_word word_1_134 bbox 464 536 552 562; x_wconf 91 eng ltr mitigate   ocrx_word word_1_135 bbox 561 536 594 557; x_wconf 88 eng ltr the   ocrx_word word_1_136 bbox 604 536 643 557; x_wconf 93 eng ltr risk   ocrx_word word_1_137 bbox 652 536 673 557; x_wconf 91 eng ltr of   ocrx_word word_1_138 bbox 684 536 747 557; x_wconf 90 eng ltr losses   ocrx_word word_1_139 bbox 757 536 815 562; x_wconf 88 eng ltr being   ocrx_word word_1_140 bbox 827 536 915 557; x_wconf 89 eng ltr incurred   ocrx_word word_1_141 bbox 926 541 951 557; x_wconf 91 eng ltr on   ocrx_word word_1_142 bbox 960 536 993 557; x_wconf 89 eng ltr the

       ocr_line line_1_13 bbox 182 568 1004 594; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_143 bbox 182 569 271 589; x_wconf 88 eng ltr FRBNY   ocrx_word word_1_144 bbox 283 568 334 589; x_wconf 94 eng ltr loan.   ocrx_word word_1_145 bbox 351 568 406 592; x_wconf 84 eng ltr First.   ocrx_word word_1_146 bbox 415 568 470 589; x_wconf 93 eng ltr there   ocrx_word word_1_147 bbox 480 568 496 589; x_wconf 94 eng ltr is   ocrx_word word_1_148 bbox 504 568 640 589; x_wconf 85 eng ltr asubstantial   ocrx_word word_1_149 bbox 651 568 697 594; x_wconf 91 eng ltr pool   ocrx_word word_1_150 bbox 707 568 728 589; x_wconf 90 eng ltr of   ocrx_word word_1_151 bbox 743 568 1004 594; x_wconf 86 eng ltr professionally-managed

       ocr_line line_1_14 bbox 181 600 984 624; baseline 0 -3; x_size 26.524479; x_descenders 5.5244794; x_ascenders 6  ocrx_word word_1_152 bbox 181 600 281 621; x_wconf 87 eng ltr collateral   ocrx_word word_1_153 bbox 292 603 311 621; x_wconf 93 eng ltr at   ocrx_word word_1_154 bbox 321 600 401 621; x_wconf 87 eng ltr Maiden   ocrx_word word_1_155 bbox 413 601 465 621; x_wconf 90 eng ltr Lane   ocrx_word word_1_156 bbox 474 600 521 624; x_wconf 90 eng ltr that,   ocrx_word word_1_157 bbox 531 606 552 621; x_wconf 89 eng ltr as   ocrx_word word_1_158 bbox 561 600 582 621; x_wconf 91 eng ltr of   ocrx_word word_1_159 bbox 593 600 661 621; x_wconf 88 eng ltr March   ocrx_word word_1_160 bbox 672 601 704 624; x_wconf 84 eng 14,   ocrx_word word_1_161 bbox 713 601 825 624; x_wconf 85 eng ltr 2008,was   ocrx_word word_1_162 bbox 833 600 905 621; x_wconf 88 eng ltr valued   ocrx_word word_1_163 bbox 915 603 934 621; x_wconf 95 eng ltr at   ocrx_word word_1_164 bbox 943 600 984 623; x_wconf 84 eng $30

       ocr_line line_1_15 bbox 182 633 1023 657; baseline 0 -4; x_size 24; x_descenders 4; x_ascenders 5  ocrx_word word_1_165 bbox 182 633 259 653; x_wconf 95 eng ltr billion.   ocrx_word word_1_166 bbox 277 634 295 653; x_wconf 97 eng ltr In   ocrx_word word_1_167 bbox 305 633 401 657; x_wconf 87 eng ltr addition,   ocrx_word word_1_168 bbox 411 633 499 653; x_wconf 86 eng ltr JPMC’s   ocrx_word word_1_169 bbox 508 633 649 653; x_wconf 87 eng ltr subordinated   ocrx_word word_1_170 bbox 661 633 705 653; x_wconf 94 eng ltr loan   ocrx_word word_1_171 bbox 715 635 735 653; x_wconf 92 eng ltr to   ocrx_word word_1_172 bbox 745 633 826 653; x_wconf 87 eng ltr Maiden   ocrx_word word_1_173 bbox 838 634 890 653; x_wconf 87 eng ltr Lane   ocrx_word word_1_174 bbox 899 633 940 653; x_wconf 96 eng ltr will   ocrx_word word_1_175 bbox 951 633 1023 653; x_wconf 92 eng ltr absorb

       ocr_line line_1_16 bbox 180 664 964 691; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_176 bbox 180 665 213 685; x_wconf 99 eng ltr the   ocrx_word word_1_177 bbox 222 665 264 685; x_wconf 92 eng ltr first   ocrx_word word_1_178 bbox 273 664 323 687; x_wconf 86 eng $1.1   ocrx_word word_1_179 bbox 331 665 400 685; x_wconf 93 eng ltr billion   ocrx_word word_1_180 bbox 410 665 431 685; x_wconf 90 eng ltr of   ocrx_word word_1_181 bbox 441 670 479 691; x_wconf 95 eng ltr any   ocrx_word word_1_182 bbox 489 665 530 685; x_wconf 93 eng ltr loss   ocrx_word word_1_183 bbox 538 665 579 685; x_wconf 91 eng ltr that   ocrx_word word_1_184 bbox 588 665 699 691; x_wconf 91 eng ltr ultimately   ocrx_word word_1_185 bbox 708 670 786 685; x_wconf 83 eng ltr occurs.   ocrx_word word_1_186 bbox 803 666 916 689; x_wconf 90 eng ltr Moreover,   ocrx_word word_1_187 bbox 927 665 964 685; x_wconf 93 eng ltr and

       ocr_line line_1_17 bbox 182 697 1026 723; baseline 0 -6; x_size 25; x_descenders 5; x_ascenders 5  ocrx_word word_1_188 bbox 182 697 266 723; x_wconf 84 eng ltr perhaps   ocrx_word word_1_189 bbox 276 699 327 718; x_wconf 91 eng ltr most   ocrx_word word_1_190 bbox 338 697 471 723; x_wconf 86 eng ltr importantly,   ocrx_word word_1_191 bbox 480 697 513 718; x_wconf 86 eng ltr the   ocrx_word word_1_192 bbox 522 697 622 718; x_wconf 87 eng ltr collateral   ocrx_word word_1_193 bbox 633 697 674 717; x_wconf 96 eng ltr will   ocrx_word word_1_194 bbox 685 697 708 718; x_wconf 91 eng ltr be   ocrx_word word_1_195 bbox 717 697 761 718; x_wconf 83 eng ltr sold   ocrx_word word_1_196 bbox 771 702 818 718; x_wconf 92 eng ltr over   ocrx_word word_1_197 bbox 827 697 875 718; x_wconf 90 eng ltr time   ocrx_word word_1_198 bbox 886 697 903 717; x_wconf 96 eng ltr in   ocrx_word word_1_199 bbox 913 702 937 718; x_wconf 90 eng ltr an   ocrx_word word_1_200 bbox 947 697 1026 723; x_wconf 93 eng ltr orderly

       ocr_line line_1_18 bbox 182 729 975 755; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_201 bbox 182 734 262 750; x_wconf 89 eng ltr manner   ocrx_word word_1_202 bbox 271 729 312 750; x_wconf 86 eng ltr that   ocrx_word word_1_203 bbox 322 729 338 750; x_wconf 94 eng ltr is   ocrx_word word_1_204 bbox 347 731 380 750; x_wconf 91 eng ltr not   ocrx_word word_1_205 bbox 389 729 472 750; x_wconf 86 eng ltr affected   ocrx_word word_1_206 bbox 487 729 512 755; x_wconf 89 eng ltr by   ocrx_word word_1_207 bbox 521 729 553 750; x_wconf 91 eng ltr the   ocrx_word word_1_208 bbox 563 729 687 755; x_wconf 92 eng ltr unnaturally   ocrx_word word_1_209 bbox 697 731 764 755; x_wconf 90 eng ltr strong   ocrx_word word_1_210 bbox 774 729 888 750; x_wconf 91 eng ltr downward   ocrx_word word_1_211 bbox 900 729 975 750; x_wconf 91 eng ltr market

       ocr_line line_1_19 bbox 182 761 1022 787; baseline 0 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_212 bbox 182 766 283 787; x_wconf 89 eng ltr pressures   ocrx_word word_1_213 bbox 292 761 332 782; x_wconf 91 eng ltr that   ocrx_word word_1_214 bbox 342 761 392 782; x_wconf 88 eng ltr have   ocrx_word word_1_215 bbox 401 761 451 782; x_wconf 91 eng ltr been   ocrx_word word_1_216 bbox 461 761 572 782; x_wconf 88 eng ltr associated   ocrx_word word_1_217 bbox 582 761 629 782; x_wconf 91 eng ltr with   ocrx_word word_1_218 bbox 639 761 672 782; x_wconf 89 eng ltr the   ocrx_word word_1_219 bbox 681 763 747 782; x_wconf 91 eng ltr recent   ocrx_word word_1_220 bbox 757 761 848 787; x_wconf 88 eng ltr liquidity   ocrx_word word_1_221 bbox 858 761 922 782; x_wconf 91 eng ltr crisis.   ocrx_word word_1_222 bbox 940 761 1022 787; x_wconf 84 eng ltr Finally,

       ocr_line line_1_20 bbox 180 793 1019 820; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_223 bbox 180 793 213 814; x_wconf 91 eng ltr the   ocrx_word word_1_224 bbox 223 794 312 814; x_wconf 89 eng ltr FRBNY   ocrx_word word_1_225 bbox 324 793 340 814; x_wconf 88 eng ltr is   ocrx_word word_1_226 bbox 348 793 428 814; x_wconf 91 eng ltr entitled   ocrx_word word_1_227 bbox 439 795 459 814; x_wconf 90 eng ltr to   ocrx_word word_1_228 bbox 468 799 507 820; x_wconf 92 eng ltr any   ocrx_word word_1_229 bbox 516 793 600 814; x_wconf 91 eng ltr residual   ocrx_word word_1_230 bbox 611 793 657 814; x_wconf 85 eng ltr cash   ocrx_word word_1_231 bbox 667 793 716 814; x_wconf 88 eng ltr flow   ocrx_word word_1_232 bbox 726 793 831 820; x_wconf 87 eng ltr generated   ocrx_word word_1_233 bbox 842 793 868 820; x_wconf 93 eng ltr by   ocrx_word word_1_234 bbox 876 793 909 814; x_wconf 91 eng ltr the   ocrx_word word_1_235 bbox 919 793 1019 814; x_wconf 89 eng ltr collateral

       ocr_line line_1_21 bbox 181 825 1015 852; baseline 0 -6; x_size 27; x_descenders 6; x_ascenders 6  ocrx_word word_1_236 bbox 181 826 228 846; x_wconf 90 eng ltr after   ocrx_word word_1_237 bbox 238 825 271 846; x_wconf 94 eng ltr the   ocrx_word word_1_238 bbox 281 826 371 846; x_wconf 89 eng ltr FRBNY   ocrx_word word_1_239 bbox 380 825 418 846; x_wconf 87 eng ltr and   ocrx_word word_1_240 bbox 427 826 496 846; x_wconf 81 eng ltr JPMC   ocrx_word word_1_241 bbox 507 825 563 846; x_wconf 90 eng ltr loans   ocrx_word word_1_242 bbox 571 831 604 846; x_wconf 95 eng ltr are   ocrx_word word_1_243 bbox 613 825 686 852; x_wconf 91 eng ltr repaid.   ocrx_word word_1_244 bbox 703 825 768 846; x_wconf 89 eng ltr Given   ocrx_word word_1_245 bbox 778 825 834 846; x_wconf 88 eng ltr these   ocrx_word word_1_246 bbox 844 825 972 852; x_wconf 84 eng ltr protections,   ocrx_word word_1_247 bbox 982 825 1015 846; x_wconf 93 eng ltr the

       ocr_line line_1_22 bbox 182 858 1007 878; baseline 0 0; x_size 25.524479; x_descenders 5.5244794; x_ascenders 5  ocrx_word word_1_248 bbox 182 858 246 878; x_wconf 89 eng ltr Board   ocrx_word word_1_249 bbox 256 860 275 878; x_wconf 95 eng ltr at   ocrx_word word_1_250 bbox 283 858 322 878; x_wconf 91 eng ltr this   ocrx_word word_1_251 bbox 331 858 379 878; x_wconf 91 eng ltr time   ocrx_word word_1_252 bbox 387 858 437 878; x_wconf 92 eng ltr does   ocrx_word word_1_253 bbox 447 860 480 878; x_wconf 92 eng ltr not   ocrx_word word_1_254 bbox 489 858 567 878; x_wconf 90 eng ltr believe   ocrx_word word_1_255 bbox 576 858 617 878; x_wconf 92 eng ltr that   ocrx_word word_1_256 bbox 625 858 657 878; x_wconf 92 eng ltr the   ocrx_word word_1_257 bbox 667 858 770 878; x_wconf 86 eng ltr extension   ocrx_word word_1_258 bbox 781 858 802 878; x_wconf 92 eng ltr of   ocrx_word word_1_259 bbox 811 858 873 878; x_wconf 91 eng ltr credit   ocrx_word word_1_260 bbox 881 860 902 878; x_wconf 97 eng ltr to   ocrx_word word_1_261 bbox 913 858 1007 878; x_wconf 89 eng ltr facilitate

       ocr_line line_1_23 bbox 180 890 997 916; baseline 0 -6; x_size 26; x_descenders 6; x_ascenders 5  ocrx_word word_1_262 bbox 180 890 213 910; x_wconf 92 eng ltr the   ocrx_word word_1_263 bbox 222 890 341 916; x_wconf 88 eng ltr acquisition   ocrx_word word_1_264 bbox 352 890 373 910; x_wconf 92 eng ltr of   ocrx_word word_1_265 bbox 384 891 433 910; x_wconf 92 eng ltr Bear   ocrx_word word_1_266 bbox 442 891 522 910; x_wconf 88 eng ltr Stearns   ocrx_word word_1_267 bbox 531 890 572 910; x_wconf 96 eng ltr will   ocrx_word word_1_268 bbox 583 890 642 910; x_wconf 92 eng ltr result   ocrx_word word_1_269 bbox 653 890 670 910; x_wconf 96 eng ltr in   ocrx_word word_1_270 bbox 680 895 719 916; x_wconf 93 eng ltr any   ocrx_word word_1_271 bbox 728 892 760 910; x_wconf 93 eng ltr net   ocrx_word word_1_272 bbox 768 892 812 910; x_wconf 90 eng ltr cost   ocrx_word word_1_273 bbox 820 892 840 910; x_wconf 93 eng ltr to   ocrx_word word_1_274 bbox 849 890 882 910; x_wconf 93 eng ltr the   ocrx_word word_1_275 bbox 891 892 997 916; x_wconf 86 eng ltr taxpayers

       ocr_line line_1_24 bbox 182 922 1014 948; baseline -0.001 -5; x_size 26; x_descenders 5; x_ascenders 5  ocrx_word word_1_276 bbox 182 922 275 948; x_wconf 90 eng ltr resulting   ocrx_word word_1_277 bbox 285 922 335 943; x_wconf 89 eng ltr from   ocrx_word word_1_278 bbox 347 922 380 943; x_wconf 91 eng ltr the   ocrx_word word_1_279 bbox 388 922 458 943; x_wconf 86 eng ltr failure   ocrx_word word_1_280 bbox 468 924 488 943; x_wconf 91 eng ltr to   ocrx_word word_1_281 bbox 498 927 557 948; x_wconf 90 eng ltr repay   ocrx_word word_1_282 bbox 566 922 599 943; x_wconf 93 eng ltr the   ocrx_word word_1_283 bbox 608 922 703 948; x_wconf 91 eng ltr principal   ocrx_word word_1_284 bbox 714 922 751 943; x_wconf 89 eng ltr and   ocrx_word word_1_285 bbox 763 922 842 943; x_wconf 88 eng ltr interest   ocrx_word word_1_286 bbox 851 922 872 943; x_wconf 93 eng ltr of   ocrx_word word_1_287 bbox 881 922 914 943; x_wconf 92 eng ltr the   ocrx_word word_1_288 bbox 924 923 1014 942; x_wconf 88 eng ltr FRBNY

       ocr_line line_1_25 bbox 182 954 234 975; baseline 0 0; x_size 26.892778; x_descenders 5.8927779; x_ascenders 5  ocrx_word word_1_289 bbox 182 954 234 975; x_wconf 89 eng ltr loan.










  page
  ATTACHMENT A

  ocr







    ocr_page page_1 image "/tmp/apache-tika-2383921602374521151.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 480 736 744 758
      ocr_par ltr par_1_1 bbox 480 736 744 758
       ocr_line line_1_1 bbox 480 736 744 758; baseline 0 0; x_size 30; x_descenders 7.5; x_ascenders 7.5  ocrx_word word_1_1 bbox 480 736 713 758; x_wconf 89 eng ltr ATTACHMENT   ocrx_word word_1_2 bbox 721 736 744 758; x_wconf 94 eng ltr A











 2019-10-30 16:00:22.190 INFO  (qtp1690716179-17) [c:documents s:shard2 r:core_node4 x:documents_shard2_replica_n3] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: Looking at page 0
 2019-10-30 16:00:22.242 INFO  (qtp1690716179-17) [c:documents s:shard2 r:core_node4 x:documents_shard2_replica_n3] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: Looking at page 1
 2019-10-30 16:00:22.265 INFO  (qtp1690716179-17) [c:documents s:shard2 r:core_node4 x:documents_shard2_replica_n3] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: Looking at page 2
 2019-10-30 16:00:22.319 INFO  (qtp1690716179-17) [c:documents s:shard2 r:core_node4 x:documents_shard2_replica_n3] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: Looking at page 3
 2019-10-30 16:00:22.344 INFO  (qtp1690716179-17) [c:documents s:shard2 r:core_node4 x:documents_shard2_replica_n3] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: Looking at page 4
 2019-10-30 16:00:22.405 INFO  (qtp1690716179-17) [c:documents s:shard2 r:core_node4 x:documents_shard2_replica_n3] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: Looking at page 5
 2019-10-30 16:00:22.423 INFO  (qtp1690716179-17) [c:documents s:shard2 r:core_node4 x:documents_shard2_replica_n3] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: Looking at page 6
 2019-10-30 16:00:22.426 INFO  (qtp1690716179-17) [c:documents s:shard2 r:core_node4 x:documents_shard2_replica_n3] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: finish with id=./load_testing_files/129bearstearnsacquisitionloan.pdf
 2019-10-30 16:00:22.514 INFO  (qtp1690716179-17) [c:documents s:shard2 r:core_node4 x:documents_shard2_replica_n3] o.a.s.u.p.LogUpdateProcessorFactory [documents_shard2_replica_n3]  webapp=/solr path=/update/speeches params={literal.id=./load_testing_files/129bearstearnsacquisitionloan.pdf&commit=false}{add=[./load_testing_files/129bearstearnsacquisitionloan.pdf (1648834613008662528)]} 0 17145
 2019-10-30 16:00:26.242 INFO  (qtp1690716179-19) [c:documents s:shard1 r:core_node2 x:documents_shard1_replica_n1] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: id=doc2
 2019-10-30 16:00:26.247 INFO  (qtp1690716179-19) [c:documents s:shard1 r:core_node2 x:documents_shard1_replica_n1] o.a.s.u.p.StatelessScriptUpdateProcessorFactory Here comes some base 64: ZG9jMg==
 2019-10-30 16:00:26.250 INFO  (qtp1690716179-19) [c:documents s:shard1 r:core_node2 x:documents_shard1_replica_n1] o.a.s.u.p.StatelessScriptUpdateProcessorFactory process-speech#processAdd: content=

  date 2014-07-14T20:17:48Z
  pdf:PDFVersion 1.5
  xmp:CreatorTool Acrobat PDFMaker 11 for Word
  Company
  stream_content_type application/pdf
  access_permission:modify_annotations true
  access_permission:can_print_degraded true
  dc:creator Federal Reserve Board
  dcterms:created 2014-07-14T19:27:34Z
  Last-Modified 2014-07-14T20:17:48Z
  dcterms:modified 2014-07-14T20:17:48Z
  dc:format application/pdf; version=1.5
  xmpMM:DocumentID uuid:6a10150b-84e4-4254-947c-fd46e762e1ae
  Last-Save-Date 2014-07-14T20:17:48Z
  pdf:docinfo:creator_tool Acrobat PDFMaker 11 for Word
  access_permission:fill_in_form true
  pdf:docinfo:modified 2014-07-14T20:17:48Z
  stream_name alvarez20140715a.pdf
  meta:save-date 2014-07-14T20:17:48Z
  pdf:encrypted false
  modified 2014-07-14T20:17:48Z
  pdf:docinfo:custom:SourceModified D:20140714185513
  Content-Type application/pdf
  stream_size 53019
  pdf:docinfo:creator Federal Reserve Board
  X-Parsed-By org.apache.tika.parser.DefaultParser
  X-Parsed-By org.apache.tika.parser.pdf.PDFParser
  X-Parsed-By class org.apache.tika.parser.ocr.TesseractOCRParser
  creator Federal Reserve Board
  meta:author Federal Reserve Board
  meta:creation-date 2014-07-14T19:27:34Z
  stream_source_info myfile
  created Mon Jul 14 19:27:34 UTC 2014
  access_permission:extract_for_accessibility true
  access_permission:assemble_document true
  xmpTPg:NPages 7
  Creation-Date 2014-07-14T19:27:34Z
  access_permission:extract_content true
  pdf:docinfo:custom:Company
  access_permission:can_print true
  SourceModified D:20140714185513
  Author Federal Reserve Board
  producer Adobe PDF Library 11.0
  access_permission:can_modify true
  pdf:docinfo:producer Adobe PDF Library 11.0
  pdf:docinfo:created 2014-07-14T19:27:34Z


   page
  For release on delivery
 10:00 a.m. EDT
 July 15, 2014











 Statement by

  Scott G. Alvarez

  General Counsel

  Board of Governors of the Federal Reserve System

  before the

  Subcommittee on Oversight and Investigations

  of the

  Committee on Financial Services

  U.S. House of Representatives

  Washington, D.C.

  July 15, 2014



  ocr







    ocr_page page_1 image "/tmp/apache-tika-8070914100995529200.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 144 148 365 226
      ocr_par ltr par_1_1 bbox 144 148 365 226
       ocr_line line_1_1 bbox 146 148 365 171; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_1 bbox 146 149 177 166; x_wconf 86 eng ltr For   ocrx_word word_1_2 bbox 185 148 249 166; x_wconf 78 eng ltr release   ocrx_word word_1_3 bbox 256 153 278 166; x_wconf 92 eng ltr on   ocrx_word word_1_4 bbox 287 148 365 171; x_wconf 84 eng ltr delivery

       ocr_line line_1_2 bbox 146 176 298 194; baseline -0.007 0; x_size 23.296295; x_descenders 5.2962961; x_ascenders 5  ocrx_word word_1_5 bbox 146 176 198 194; x_wconf 86 eng 10:00   ocrx_word word_1_6 bbox 205 180 244 194; x_wconf 88 eng ltr a.m.   ocrx_word word_1_7 bbox 254 177 298 193; x_wconf 93 eng ltr EDT

       ocr_line line_1_3 bbox 144 203 273 226; baseline 0 -5; x_size 21.921053; x_descenders 4.9210525; x_ascenders 4.9210525  ocrx_word word_1_8 bbox 144 203 184 226; x_wconf 84 eng ltr July   ocrx_word word_1_9 bbox 191 204 218 224; x_wconf 73 eng 15,   ocrx_word word_1_10 bbox 227 204 273 221; x_wconf 91 eng 2014





     ocr_carea block_1_2 bbox 368 507 856 1026
      ocr_par ltr par_1_2 bbox 368 507 856 1026
       ocr_line line_1_4 bbox 550 507 675 530; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_11 bbox 550 508 645 525; x_wconf 79 eng ltr Statement   ocrx_word word_1_12 bbox 652 507 675 530; x_wconf 86 eng ltr by

       ocr_line line_1_5 bbox 533 562 691 580; baseline 0 0; x_size 23.233986; x_descenders 5.2339869; x_ascenders 5  ocrx_word word_1_13 bbox 533 563 581 580; x_wconf 84 eng ltr Scott   ocrx_word word_1_14 bbox 588 563 608 580; x_wconf 88 eng ltr G.   ocrx_word word_1_15 bbox 617 562 691 580; x_wconf 81 eng ltr Alvarez

       ocr_line line_1_6 bbox 533 617 690 635; baseline 0 0; x_size 23.233986; x_descenders 5.2339869; x_ascenders 5  ocrx_word word_1_16 bbox 533 617 605 635; x_wconf 82 eng ltr General   ocrx_word word_1_17 bbox 614 617 690 635; x_wconf 86 eng ltr Counsel

       ocr_line line_1_7 bbox 368 673 856 695; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_18 bbox 368 673 423 690; x_wconf 84 eng ltr Board   ocrx_word word_1_19 bbox 431 673 451 690; x_wconf 91 eng ltr of   ocrx_word word_1_20 bbox 458 673 557 690; x_wconf 83 eng ltr Governors   ocrx_word word_1_21 bbox 565 673 584 690; x_wconf 91 eng ltr of   ocrx_word word_1_22 bbox 590 673 619 690; x_wconf 86 eng ltr the   ocrx_word word_1_23 bbox 627 673 695 690; x_wconf 87 eng ltr Federal   ocrx_word word_1_24 bbox 705 673 780 690; x_wconf 84 eng ltr Reserve   ocrx_word word_1_25 bbox 787 673 856 695; x_wconf 84 eng ltr System

       ocr_line line_1_8 bbox 565 728 659 746; baseline 0 0; x_size 23.6366; x_descenders 5.6366014; x_ascenders 4  ocrx_word word_1_26 bbox 565 728 624 746; x_wconf 84 eng ltr before   ocrx_word word_1_27 bbox 631 728 659 746; x_wconf 89 eng ltr the

       ocr_line line_1_9 bbox 388 783 836 806; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_28 bbox 388 783 525 801; x_wconf 85 eng ltr Subcommittee   ocrx_word word_1_29 bbox 532 787 554 801; x_wconf 89 eng ltr on   ocrx_word word_1_30 bbox 562 783 655 806; x_wconf 85 eng ltr Oversight   ocrx_word word_1_31 bbox 662 783 695 801; x_wconf 85 eng ltr and   ocrx_word word_1_32 bbox 705 783 836 806; x_wconf 84 eng ltr Investigations

       ocr_line line_1_10 bbox 585 838 639 856; baseline 0 0; x_size 23.233986; x_descenders 5.2339869; x_ascenders 5  ocrx_word word_1_33 bbox 585 838 604 856; x_wconf 88 eng ltr of   ocrx_word word_1_34 bbox 611 838 639 856; x_wconf 92 eng ltr the

       ocr_line line_1_11 bbox 453 893 771 911; baseline 0 0; x_size 23.233986; x_descenders 5.2339869; x_ascenders 5  ocrx_word word_1_35 bbox 453 893 558 911; x_wconf 82 eng ltr Committee   ocrx_word word_1_36 bbox 566 898 588 911; x_wconf 94 eng ltr on   ocrx_word word_1_37 bbox 597 893 682 911; x_wconf 80 eng ltr Financial   ocrx_word word_1_38 bbox 691 893 771 911; x_wconf 85 eng ltr Services

       ocr_line line_1_12 bbox 467 949 758 971; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_39 bbox 467 949 506 966; x_wconf 33 eng ltr U.St   ocrx_word word_1_40 bbox 515 949 574 966; x_wconf 87 eng ltr House   ocrx_word word_1_41 bbox 582 949 601 966; x_wconf 92 eng ltr of   ocrx_word word_1_42 bbox 608 949 758 971; x_wconf 85 eng ltr Representatives

       ocr_line line_1_13 bbox 526 1004 697 1026; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_43 bbox 526 1004 645 1026; x_wconf 75 eng ltr Washington,   ocrx_word word_1_44 bbox 655 1004 697 1022; x_wconf 79 eng ltr DC.





     ocr_carea block_1_3 bbox 547 1059 676 1082
      ocr_par ltr par_1_3 bbox 547 1059 676 1082
       ocr_line line_1_14 bbox 547 1059 676 1082; baseline 0 -5; x_size 23.238094; x_descenders 5.8095236; x_ascenders 5.8095236  ocrx_word word_1_45 bbox 547 1059 587 1082; x_wconf 85 eng ltr July   ocrx_word word_1_46 bbox 594 1060 621 1080; x_wconf 73 eng 15,   ocrx_word word_1_47 bbox 630 1060 676 1077; x_wconf 86 eng 2014










  page
  Chairman McHenry, Ranking Member Green, and other members of the subcommittee,

  thank you for the opportunity to testify about the Federal Reserve’s supervisory activities

  pertaining to banking organizations and their account relationships with law-abiding businesses.

  In my testimony, I will describe the legal framework governing the establishment and

  maintenance of customer accounts and the regulatory expectations the Federal Reserve has

  established for the banking organizations we supervise.  I will also highlight related aspects of

  our examination and enforcement process in this area.

  Let me begin by saying that the Federal Reserve believes it is important that banking

  organizations provide services to consumers and businesses whose activities comply with

  applicable laws.  It is equally important that the banks we supervise do not facilitate or

  participate in illegal activity.  Indeed, during the past several years the Federal Reserve has

  provided information to the banking organizations we supervise to clarify the requirements for

  providing account services to law-abiding businesses.

  Legal Framework and the Federal Reserve’s Regulatory Expectations

  Congress, through the Bank Secrecy Act (BSA), requires banking organizations to

  establish and maintain anti-money-laundering (AML) programs designed to detect when services

  provided by the organization are being used for illegal purposes.  By law, each Federal Reserve-

  regulated institution, like other depository institutions, must have a BSA program that contains

  four critical elements, including a system of internal controls to ensure ongoing compliance with

  the BSA, independent testing of the bank’s compliance with the BSA, training of appropriate

  bank personnel, and the designation of an individual responsible for coordinating and monitoring

  day-to-day compliance with the BSA.1  Under the general rubric of “know your customer” laws

  1  See 31 U.S.C. § 5318(h) and Board of Governors Regulation H (12 C.F.R. § 208.63) (BSA program requirements
 for state member banks).



  ocr







    ocr_page page_1 image "/tmp/apache-tika-1111057972773679075.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 144 148 1076 1330
      ocr_par ltr par_1_1 bbox 144 148 1065 502
       ocr_line line_1_1 bbox 217 148 1056 171; baseline 0 -5; x_size 21; x_descenders 3; x_ascenders 5  ocrx_word word_1_1 bbox 217 148 309 166; x_wconf 80 eng ltr Chairman   ocrx_word word_1_2 bbox 319 149 413 171; x_wconf 88 eng ltr McHenry,   ocrx_word word_1_3 bbox 422 148 501 171; x_wconf 86 eng ltr Ranking   ocrx_word word_1_4 bbox 510 148 589 166; x_wconf 89 eng ltr Member   ocrx_word word_1_5 bbox 596 149 658 169; x_wconf 86 eng ltr Green,   ocrx_word word_1_6 bbox 666 148 699 166; x_wconf 92 eng ltr and   ocrx_word word_1_7 bbox 707 148 755 166; x_wconf 88 eng ltr other   ocrx_word word_1_8 bbox 763 148 849 166; x_wconf 87 eng ltr members   ocrx_word word_1_9 bbox 856 148 876 166; x_wconf 91 eng ltr of   ocrx_word word_1_10 bbox 882 148 910 166; x_wconf 92 eng ltr the   ocrx_word word_1_11 bbox 918 148 1056 169; x_wconf 87 eng ltr subcommittee,

       ocr_line line_1_2 bbox 144 203 1000 226; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_12 bbox 144 203 197 221; x_wconf 81 eng ltr thank   ocrx_word word_1_13 bbox 204 208 238 226; x_wconf 92 eng ltr you   ocrx_word word_1_14 bbox 246 203 273 221; x_wconf 87 eng ltr for   ocrx_word word_1_15 bbox 279 203 308 221; x_wconf 88 eng ltr the   ocrx_word word_1_16 bbox 315 203 427 226; x_wconf 93 eng ltr opportunity   ocrx_word word_1_17 bbox 433 205 450 221; x_wconf 92 eng ltr to   ocrx_word word_1_18 bbox 457 203 517 226; x_wconf 82 eng ltr testify   ocrx_word word_1_19 bbox 524 203 576 221; x_wconf 82 eng ltr about   ocrx_word word_1_20 bbox 583 203 611 221; x_wconf 91 eng ltr the   ocrx_word word_1_21 bbox 619 203 687 221; x_wconf 83 eng ltr Federal   ocrx_word word_1_22 bbox 697 204 790 221; x_wconf 82 eng ltr Reserve’s   ocrx_word word_1_23 bbox 797 203 908 226; x_wconf 81 eng ltr supervisory   ocrx_word word_1_24 bbox 915 203 1000 221; x_wconf 84 eng ltr activities

       ocr_line line_1_3 bbox 145 259 1065 281; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_25 bbox 145 259 240 281; x_wconf 82 eng ltr pertaining   ocrx_word word_1_26 bbox 247 260 265 276; x_wconf 92 eng ltr to   ocrx_word word_1_27 bbox 273 259 348 281; x_wconf 86 eng ltr banking   ocrx_word word_1_28 bbox 356 259 484 281; x_wconf 83 eng ltr organizations   ocrx_word word_1_29 bbox 491 259 524 276; x_wconf 94 eng ltr and   ocrx_word word_1_30 bbox 532 259 575 276; x_wconf 92 eng ltr their   ocrx_word word_1_31 bbox 582 260 656 276; x_wconf 82 eng ltr account   ocrx_word word_1_32 bbox 663 259 784 281; x_wconf 83 eng ltr relationships   ocrx_word word_1_33 bbox 791 259 832 276; x_wconf 89 eng ltr with   ocrx_word word_1_34 bbox 841 259 953 281; x_wconf 90 eng ltr law-abiding   ocrx_word word_1_35 bbox 961 259 1065 276; x_wconf 86 eng ltr businesses.

       ocr_line line_1_4 bbox 147 314 966 336; baseline 0.001 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_36 bbox 147 315 162 331; x_wconf 95 eng ltr In   ocrx_word word_1_37 bbox 171 318 201 336; x_wconf 93 eng ltr my   ocrx_word word_1_38 bbox 207 314 305 336; x_wconf 77 eng ltr testimony,   ocrx_word word_1_39 bbox 316 315 319 331; x_wconf 98 eng ltr I   ocrx_word word_1_40 bbox 327 314 363 331; x_wconf 95 eng ltr will   ocrx_word word_1_41 bbox 371 314 449 332; x_wconf 87 eng ltr describe   ocrx_word word_1_42 bbox 456 314 485 332; x_wconf 92 eng ltr the   ocrx_word word_1_43 bbox 493 314 536 336; x_wconf 90 eng ltr legal   ocrx_word word_1_44 bbox 545 314 649 332; x_wconf 87 eng ltr framework   ocrx_word word_1_45 bbox 656 314 752 336; x_wconf 86 eng ltr governing   ocrx_word word_1_46 bbox 759 314 787 332; x_wconf 93 eng ltr the   ocrx_word word_1_47 bbox 795 314 926 332; x_wconf 80 eng ltr establishment   ocrx_word word_1_48 bbox 933 314 966 332; x_wconf 90 eng ltr and

       ocr_line line_1_5 bbox 145 369 1015 392; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_49 bbox 145 369 264 387; x_wconf 83 eng ltr maintenance   ocrx_word word_1_50 bbox 272 369 291 387; x_wconf 88 eng ltr of   ocrx_word word_1_51 bbox 298 371 385 387; x_wconf 82 eng ltr customer   ocrx_word word_1_52 bbox 392 371 474 387; x_wconf 82 eng ltr accounts   ocrx_word word_1_53 bbox 482 369 514 387; x_wconf 93 eng ltr and   ocrx_word word_1_54 bbox 522 369 550 387; x_wconf 90 eng ltr the   ocrx_word word_1_55 bbox 559 369 656 392; x_wconf 84 eng ltr regulatory   ocrx_word word_1_56 bbox 662 369 781 392; x_wconf 87 eng ltr expectations   ocrx_word word_1_57 bbox 788 369 816 387; x_wconf 89 eng ltr the   ocrx_word word_1_58 bbox 825 369 893 387; x_wconf 87 eng ltr Federal   ocrx_word word_1_59 bbox 902 370 977 387; x_wconf 90 eng ltr Reserve   ocrx_word word_1_60 bbox 985 369 1015 387; x_wconf 83 eng ltr has

       ocr_line line_1_6 bbox 145 424 1048 447; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_61 bbox 145 424 249 442; x_wconf 87 eng ltr established   ocrx_word word_1_62 bbox 257 424 284 442; x_wconf 90 eng ltr for   ocrx_word word_1_63 bbox 291 424 319 442; x_wconf 92 eng ltr the   ocrx_word word_1_64 bbox 327 424 402 447; x_wconf 86 eng ltr banking   ocrx_word word_1_65 bbox 410 424 538 447; x_wconf 86 eng ltr organizations   ocrx_word word_1_66 bbox 545 429 572 442; x_wconf 92 eng ltr we   ocrx_word word_1_67 bbox 579 424 673 447; x_wconf 88 eng ltr supervise.   ocrx_word word_1_68 bbox 690 425 693 442; x_wconf 98 eng ltr   I     ocrx_word word_1_69 bbox 701 424 736 442; x_wconf 96 eng ltr will   ocrx_word word_1_70 bbox 745 424 782 442; x_wconf 86 eng ltr also   ocrx_word word_1_71 bbox 790 424 876 447; x_wconf 87 eng ltr highlight   ocrx_word word_1_72 bbox 883 424 946 442; x_wconf 88 eng ltr related   ocrx_word word_1_73 bbox 954 426 1022 447; x_wconf 91 eng ltr aspects   ocrx_word word_1_74 bbox 1029 424 1048 442; x_wconf 88 eng ltr of

       ocr_line line_1_7 bbox 145 479 660 502; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_75 bbox 145 484 176 497; x_wconf 92 eng ltr our   ocrx_word word_1_76 bbox 183 479 299 497; x_wconf 88 eng ltr examination   ocrx_word word_1_77 bbox 307 479 340 497; x_wconf 91 eng ltr and   ocrx_word word_1_78 bbox 348 479 467 497; x_wconf 91 eng ltr enforcement   ocrx_word word_1_79 bbox 474 484 544 502; x_wconf 90 eng ltr process   ocrx_word word_1_80 bbox 553 479 568 497; x_wconf 96 eng ltr in   ocrx_word word_1_81 bbox 576 479 610 497; x_wconf 89 eng ltr this   ocrx_word word_1_82 bbox 617 484 660 497; x_wconf 89 eng ltr area.




      ocr_par ltr par_1_2 bbox 145 535 1051 833
       ocr_line line_1_8 bbox 218 535 1029 557; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_83 bbox 218 535 247 552; x_wconf 87 eng ltr Let   ocrx_word word_1_84 bbox 255 539 282 552; x_wconf 91 eng ltr me   ocrx_word word_1_85 bbox 290 535 341 557; x_wconf 90 eng ltr begin   ocrx_word word_1_86 bbox 350 535 373 557; x_wconf 93 eng ltr by   ocrx_word word_1_87 bbox 379 535 440 557; x_wconf 91 eng ltr saying   ocrx_word word_1_88 bbox 447 535 483 552; x_wconf 92 eng ltr that   ocrx_word word_1_89 bbox 490 535 518 552; x_wconf 92 eng ltr the   ocrx_word word_1_90 bbox 526 535 594 552; x_wconf 88 eng ltr Federal   ocrx_word word_1_91 bbox 604 535 679 552; x_wconf 89 eng ltr Reserve   ocrx_word word_1_92 bbox 687 535 764 552; x_wconf 88 eng ltr believes   ocrx_word word_1_93 bbox 772 535 784 552; x_wconf 95 eng ltr it   ocrx_word word_1_94 bbox 792 535 805 552; x_wconf 97 eng ltr is   ocrx_word word_1_95 bbox 814 535 905 557; x_wconf 92 eng ltr important   ocrx_word word_1_96 bbox 912 535 947 552; x_wconf 92 eng ltr that   ocrx_word word_1_97 bbox 955 535 1029 557; x_wconf 88 eng ltr banking

       ocr_line line_1_9 bbox 145 590 1002 612; baseline 0 -4; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_98 bbox 145 590 273 612; x_wconf 87 eng ltr organizations   ocrx_word word_1_99 bbox 281 590 352 612; x_wconf 85 eng ltr provide   ocrx_word word_1_100 bbox 359 590 435 608; x_wconf 84 eng ltr services   ocrx_word word_1_101 bbox 442 592 460 608; x_wconf 90 eng ltr to   ocrx_word word_1_102 bbox 467 594 568 608; x_wconf 89 eng ltr consumers   ocrx_word word_1_103 bbox 576 590 608 608; x_wconf 94 eng ltr and   ocrx_word word_1_104 bbox 617 590 716 608; x_wconf 84 eng ltr businesses   ocrx_word word_1_105 bbox 723 590 784 608; x_wconf 82 eng ltr whose   ocrx_word word_1_106 bbox 791 590 876 608; x_wconf 88 eng ltr activities   ocrx_word word_1_107 bbox 884 590 955 612; x_wconf 84 eng ltr comply   ocrx_word word_1_108 bbox 961 590 1002 608; x_wconf 93 eng ltr with

       ocr_line line_1_10 bbox 145 645 975 668; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_109 bbox 145 645 242 668; x_wconf 84 eng ltr applicable   ocrx_word word_1_110 bbox 250 645 296 663; x_wconf 90 eng ltr laws.   ocrx_word word_1_111 bbox 313 646 325 663; x_wconf 88 eng ltr It   ocrx_word word_1_112 bbox 333 645 346 663; x_wconf 97 eng ltr is   ocrx_word word_1_113 bbox 354 645 424 668; x_wconf 89 eng ltr equally   ocrx_word word_1_114 bbox 431 645 523 668; x_wconf 87 eng ltr important   ocrx_word word_1_115 bbox 529 645 565 663; x_wconf 88 eng ltr that   ocrx_word word_1_116 bbox 571 645 599 663; x_wconf 93 eng ltr the   ocrx_word word_1_117 bbox 608 645 662 663; x_wconf 89 eng ltr banks   ocrx_word word_1_118 bbox 668 649 695 663; x_wconf 94 eng ltr we   ocrx_word word_1_119 bbox 703 645 792 668; x_wconf 90 eng ltr supervise   ocrx_word word_1_120 bbox 800 645 822 663; x_wconf 90 eng ltr do   ocrx_word word_1_121 bbox 830 647 859 663; x_wconf 89 eng ltr not   ocrx_word word_1_122 bbox 866 645 949 663; x_wconf 84 eng ltr facilitate   ocrx_word word_1_123 bbox 956 649 975 663; x_wconf 91 eng ltr or

       ocr_line line_1_11 bbox 145 700 1016 723; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_124 bbox 145 700 244 723; x_wconf 90 eng ltr participate   ocrx_word word_1_125 bbox 253 700 268 718; x_wconf 97 eng ltr in   ocrx_word word_1_126 bbox 278 700 334 723; x_wconf 87 eng ltr illegal   ocrx_word word_1_127 bbox 342 700 418 723; x_wconf 91 eng ltr activity.   ocrx_word word_1_128 bbox 435 700 501 721; x_wconf 88 eng ltr Indeed,   ocrx_word word_1_129 bbox 510 700 571 723; x_wconf 88 eng ltr during   ocrx_word word_1_130 bbox 578 700 606 718; x_wconf 90 eng ltr the   ocrx_word word_1_131 bbox 614 702 652 723; x_wconf 84 eng ltr past   ocrx_word word_1_132 bbox 658 700 723 718; x_wconf 90 eng ltr several   ocrx_word word_1_133 bbox 732 705 781 723; x_wconf 90 eng ltr years   ocrx_word word_1_134 bbox 788 700 817 718; x_wconf 91 eng ltr the   ocrx_word word_1_135 bbox 825 700 894 718; x_wconf 91 eng ltr Federal   ocrx_word word_1_136 bbox 903 701 978 718; x_wconf 89 eng ltr Reserve   ocrx_word word_1_137 bbox 986 700 1016 718; x_wconf 91 eng ltr has

       ocr_line line_1_12 bbox 145 755 1051 778; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_138 bbox 145 755 228 778; x_wconf 92 eng ltr provided   ocrx_word word_1_139 bbox 237 755 347 773; x_wconf 91 eng ltr information   ocrx_word word_1_140 bbox 355 757 372 773; x_wconf 92 eng ltr to   ocrx_word word_1_141 bbox 379 755 408 773; x_wconf 92 eng ltr the   ocrx_word word_1_142 bbox 416 755 491 778; x_wconf 93 eng ltr banking   ocrx_word word_1_143 bbox 499 755 626 778; x_wconf 89 eng ltr organizations   ocrx_word word_1_144 bbox 633 760 660 773; x_wconf 91 eng ltr we   ocrx_word word_1_145 bbox 667 755 757 778; x_wconf 93 eng ltr supervise   ocrx_word word_1_146 bbox 764 757 781 773; x_wconf 92 eng ltr to   ocrx_word word_1_147 bbox 789 755 851 778; x_wconf 91 eng ltr clarify   ocrx_word word_1_148 bbox 857 755 886 773; x_wconf 92 eng ltr the   ocrx_word word_1_149 bbox 894 755 1017 778; x_wconf 88 eng ltr requirements   ocrx_word word_1_150 bbox 1024 755 1051 773; x_wconf 91 eng ltr for

       ocr_line line_1_13 bbox 145 811 658 833; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_151 bbox 145 811 236 833; x_wconf 92 eng ltr providing   ocrx_word word_1_152 bbox 244 812 318 828; x_wconf 89 eng ltr account   ocrx_word word_1_153 bbox 324 811 401 828; x_wconf 90 eng ltr services   ocrx_word word_1_154 bbox 408 812 425 828; x_wconf 94 eng ltr to   ocrx_word word_1_155 bbox 434 811 545 833; x_wconf 89 eng ltr law-abiding   ocrx_word word_1_156 bbox 554 811 658 828; x_wconf 92 eng ltr businesses.




      ocr_par ltr par_1_3 bbox 146 866 858 889
       ocr_line line_1_14 bbox 146 866 858 889; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_157 bbox 146 866 199 889; x_wconf 88 eng ltr Legal   ocrx_word word_1_158 bbox 209 866 328 884; x_wconf 89 eng ltr Framework   ocrx_word word_1_159 bbox 335 866 372 884; x_wconf 88 eng ltr and   ocrx_word word_1_160 bbox 380 866 411 884; x_wconf 90 eng ltr the   ocrx_word word_1_161 bbox 419 866 494 884; x_wconf 91 eng ltr Federal   ocrx_word word_1_162 bbox 504 867 600 884; x_wconf 82 eng ltr Reserve’s   ocrx_word word_1_163 bbox 608 866 721 889; x_wconf 86 eng ltr Regulatory   ocrx_word word_1_164 bbox 729 866 858 889; x_wconf 83 eng ltr Expectations




      ocr_par ltr par_1_4 bbox 144 921 1076 1330
       ocr_line line_1_15 bbox 217 921 1007 944; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_165 bbox 217 922 309 944; x_wconf 90 eng ltr Congress,   ocrx_word word_1_166 bbox 317 921 390 944; x_wconf 90 eng ltr through   ocrx_word word_1_167 bbox 398 921 426 939; x_wconf 89 eng ltr the   ocrx_word word_1_168 bbox 435 921 484 939; x_wconf 89 eng ltr Bank   ocrx_word word_1_169 bbox 491 922 566 944; x_wconf 88 eng ltr Secrecy   ocrx_word word_1_170 bbox 572 922 606 939; x_wconf 85 eng ltr Act   ocrx_word word_1_171 bbox 614 921 679 943; x_wconf 87 eng ltr (BSA),   ocrx_word word_1_172 bbox 689 921 764 944; x_wconf 91 eng ltr requires   ocrx_word word_1_173 bbox 772 921 846 944; x_wconf 87 eng ltr banking   ocrx_word word_1_174 bbox 854 921 983 944; x_wconf 84 eng ltr organizations   ocrx_word word_1_175 bbox 990 923 1007 939; x_wconf 90 eng ltr to

       ocr_line line_1_16 bbox 145 976 1076 999; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_176 bbox 145 976 227 994; x_wconf 90 eng ltr establish   ocrx_word word_1_177 bbox 235 976 267 994; x_wconf 91 eng ltr and   ocrx_word word_1_178 bbox 276 976 357 994; x_wconf 93 eng ltr maintain   ocrx_word word_1_179 bbox 365 976 583 999; x_wconf 65 eng ltr anti»money»laundering   ocrx_word word_1_180 bbox 592 976 658 999; x_wconf 90 eng ltr (AML)   ocrx_word word_1_181 bbox 667 981 756 999; x_wconf 92 eng ltr programs   ocrx_word word_1_182 bbox 763 976 846 999; x_wconf 89 eng ltr designed   ocrx_word word_1_183 bbox 854 978 872 994; x_wconf 91 eng ltr to   ocrx_word word_1_184 bbox 879 976 936 994; x_wconf 89 eng ltr detect   ocrx_word word_1_185 bbox 942 976 992 994; x_wconf 92 eng ltr when   ocrx_word word_1_186 bbox 1000 976 1076 994; x_wconf 89 eng ltr services

       ocr_line line_1_17 bbox 145 1031 1067 1054; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_187 bbox 145 1031 228 1054; x_wconf 92 eng ltr provided   ocrx_word word_1_188 bbox 237 1031 259 1054; x_wconf 91 eng ltr by   ocrx_word word_1_189 bbox 265 1031 294 1049; x_wconf 92 eng ltr the   ocrx_word word_1_190 bbox 301 1031 419 1054; x_wconf 90 eng ltr organization   ocrx_word word_1_191 bbox 427 1036 455 1049; x_wconf 91 eng ltr are   ocrx_word word_1_192 bbox 463 1031 514 1054; x_wconf 91 eng ltr being   ocrx_word word_1_193 bbox 522 1031 564 1049; x_wconf 91 eng ltr used   ocrx_word word_1_194 bbox 571 1031 599 1049; x_wconf 91 eng ltr for   ocrx_word word_1_195 bbox 607 1031 663 1054; x_wconf 89 eng ltr illegal   ocrx_word word_1_196 bbox 672 1036 760 1054; x_wconf 91 eng ltr purposes.   ocrx_word word_1_197 bbox 776 1032 803 1054; x_wconf 93 eng ltr By   ocrx_word word_1_198 bbox 810 1031 847 1052; x_wconf 86 eng ltr law,   ocrx_word word_1_199 bbox 856 1031 898 1049; x_wconf 86 eng ltr each   ocrx_word word_1_200 bbox 907 1031 975 1049; x_wconf 91 eng ltr Federal   ocrx_word word_1_201 bbox 985 1032 1067 1049; x_wconf 91 eng ltr Reserve-

       ocr_line line_1_18 bbox 146 1087 1054 1109; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_202 bbox 146 1087 232 1109; x_wconf 89 eng ltr regulated   ocrx_word word_1_203 bbox 241 1087 341 1107; x_wconf 84 eng ltr institution.   ocrx_word word_1_204 bbox 351 1087 384 1104; x_wconf 94 eng ltr like   ocrx_word word_1_205 bbox 392 1087 440 1104; x_wconf 91 eng ltr other   ocrx_word word_1_206 bbox 447 1087 547 1109; x_wconf 90 eng ltr depository   ocrx_word word_1_207 bbox 555 1087 664 1107; x_wconf 83 eng ltr institutions,   ocrx_word word_1_208 bbox 673 1088 719 1104; x_wconf 94 eng ltr must   ocrx_word word_1_209 bbox 726 1087 769 1104; x_wconf 90 eng ltr have   ocrx_word word_1_210 bbox 777 1091 787 1104; x_wconf 97 eng ltr a   ocrx_word word_1_211 bbox 794 1087 839 1104; x_wconf 84 eng ltr BSA   ocrx_word word_1_212 bbox 846 1091 925 1109; x_wconf 85 eng ltr program   ocrx_word word_1_213 bbox 933 1087 968 1104; x_wconf 89 eng ltr that   ocrx_word word_1_214 bbox 975 1087 1054 1104; x_wconf 92 eng ltr contains

       ocr_line line_1_19 bbox 144 1142 1070 1164; baseline 0 -4; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_215 bbox 144 1142 184 1160; x_wconf 87 eng ltr four   ocrx_word word_1_216 bbox 191 1142 254 1160; x_wconf 91 eng ltr critical   ocrx_word word_1_217 bbox 263 1142 352 1162; x_wconf 86 eng ltr elements,   ocrx_word word_1_218 bbox 362 1142 449 1164; x_wconf 87 eng ltr including   ocrx_word word_1_219 bbox 457 1146 467 1160; x_wconf 89 eng ltr a   ocrx_word word_1_220 bbox 474 1144 538 1164; x_wconf 89 eng ltr system   ocrx_word word_1_221 bbox 547 1142 566 1160; x_wconf 93 eng ltr of   ocrx_word word_1_222 bbox 574 1142 643 1160; x_wconf 91 eng ltr internal   ocrx_word word_1_223 bbox 652 1142 728 1160; x_wconf 89 eng ltr controls   ocrx_word word_1_224 bbox 735 1144 752 1160; x_wconf 96 eng ltr to   ocrx_word word_1_225 bbox 760 1146 821 1160; x_wconf 91 eng ltr ensure   ocrx_word word_1_226 bbox 828 1142 905 1164; x_wconf 89 eng ltr ongoing   ocrx_word word_1_227 bbox 913 1142 1022 1164; x_wconf 87 eng ltr compliance   ocrx_word word_1_228 bbox 1029 1142 1070 1160; x_wconf 93 eng ltr with

       ocr_line line_1_20 bbox 144 1197 1037 1220; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_229 bbox 144 1197 173 1215; x_wconf 93 eng ltr the   ocrx_word word_1_230 bbox 181 1198 230 1218; x_wconf 87 eng ltr BSA,   ocrx_word word_1_231 bbox 240 1197 355 1220; x_wconf 87 eng ltr independent   ocrx_word word_1_232 bbox 361 1197 424 1220; x_wconf 89 eng ltr testing   ocrx_word word_1_233 bbox 432 1197 451 1215; x_wconf 88 eng ltr of   ocrx_word word_1_234 bbox 457 1197 486 1215; x_wconf 93 eng ltr the   ocrx_word word_1_235 bbox 494 1197 556 1215; x_wconf 84 eng ltr bank’s   ocrx_word word_1_236 bbox 563 1197 672 1220; x_wconf 89 eng ltr compliance   ocrx_word word_1_237 bbox 679 1197 720 1215; x_wconf 92 eng ltr with   ocrx_word word_1_238 bbox 728 1197 756 1215; x_wconf 89 eng ltr the   ocrx_word word_1_239 bbox 765 1198 814 1218; x_wconf 89 eng ltr BSA,   ocrx_word word_1_240 bbox 822 1197 895 1220; x_wconf 89 eng ltr training   ocrx_word word_1_241 bbox 903 1197 922 1215; x_wconf 89 eng ltr of   ocrx_word word_1_242 bbox 929 1197 1037 1220; x_wconf 84 eng ltr appropriate

       ocr_line line_1_21 bbox 145 1252 1075 1275; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_243 bbox 145 1252 190 1270; x_wconf 90 eng ltr bank   ocrx_word word_1_244 bbox 198 1252 294 1275; x_wconf 88 eng ltr personnel,   ocrx_word word_1_245 bbox 303 1252 335 1270; x_wconf 92 eng ltr and   ocrx_word word_1_246 bbox 343 1252 371 1270; x_wconf 97 eng ltr the   ocrx_word word_1_247 bbox 379 1252 487 1275; x_wconf 88 eng ltr designation   ocrx_word word_1_248 bbox 495 1252 514 1270; x_wconf 88 eng ltr of   ocrx_word word_1_249 bbox 521 1257 542 1270; x_wconf 91 eng ltr an   ocrx_word word_1_250 bbox 551 1252 645 1270; x_wconf 90 eng ltr individual   ocrx_word word_1_251 bbox 654 1252 761 1275; x_wconf 90 eng ltr responsible   ocrx_word word_1_252 bbox 768 1252 795 1270; x_wconf 90 eng ltr for   ocrx_word word_1_253 bbox 803 1252 922 1275; x_wconf 91 eng ltr coordinating   ocrx_word word_1_254 bbox 930 1252 962 1270; x_wconf 91 eng ltr and   ocrx_word word_1_255 bbox 971 1252 1075 1275; x_wconf 89 eng ltr monitoring

       ocr_line line_1_22 bbox 145 1305 1063 1330; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_256 bbox 145 1307 248 1330; x_wconf 85 eng ltr day-to-day   ocrx_word word_1_257 bbox 255 1307 364 1330; x_wconf 91 eng ltr compliance   ocrx_word word_1_258 bbox 370 1307 412 1325; x_wconf 92 eng ltr with   ocrx_word word_1_259 bbox 420 1307 448 1325; x_wconf 93 eng ltr the   ocrx_word word_1_260 bbox 456 1305 516 1325; x_wconf 80 eng ltr BSA.l   ocrx_word word_1_261 bbox 530 1307 588 1325; x_wconf 92 eng ltr Under   ocrx_word word_1_262 bbox 594 1307 623 1325; x_wconf 93 eng ltr the   ocrx_word word_1_263 bbox 631 1307 698 1330; x_wconf 89 eng ltr general   ocrx_word word_1_264 bbox 708 1307 763 1325; x_wconf 92 eng ltr rubric   ocrx_word word_1_265 bbox 770 1307 789 1325; x_wconf 83 eng ltr of   ocrx_word word_1_266 bbox 797 1307 859 1325; x_wconf 86 eng ltr “know   ocrx_word word_1_267 bbox 866 1312 909 1330; x_wconf 94 eng ltr your   ocrx_word word_1_268 bbox 916 1308 1013 1325; x_wconf 90 eng ltr customer"   ocrx_word word_1_269 bbox 1022 1307 1063 1325; x_wconf 91 eng ltr laws





     ocr_carea block_1_2 bbox 144 1396 1071 1439
      ocr_par ltr par_1_5 bbox 144 1396 1071 1439
       ocr_line line_1_23 bbox 145 1396 1071 1416; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_270 bbox 145 1396 150 1405; x_wconf 61 eng  1    ocrx_word word_1_271 bbox 161 1398 189 1412; x_wconf 85 eng ltr See   ocrx_word word_1_272 bbox 195 1398 214 1412; x_wconf 86 eng 31   ocrx_word word_1_273 bbox 221 1398 232 1412; x_wconf 95 eng ltr U   ocrx_word word_1_274 bbox 240 1398 249 1412; x_wconf 85 eng ltr S   ocrx_word word_1_275 bbox 256 1398 272 1412; x_wconf 89 eng ltr C.   ocrx_word word_1_276 bbox 279 1397 287 1414; x_wconf 77 eng §   ocrx_word word_1_277 bbox 294 1397 355 1416; x_wconf 78 eng ltr 5318(h)   ocrx_word word_1_278 bbox 362 1397 389 1412; x_wconf 88 eng ltr and   ocrx_word word_1_279 bbox 397 1397 443 1412; x_wconf 89 eng ltr Board   ocrx_word word_1_280 bbox 450 1398 466 1412; x_wconf 84 eng ltr of   ocrx_word word_1_281 bbox 472 1398 555 1412; x_wconf 86 eng ltr Governors   ocrx_word word_1_282 bbox 562 1397 647 1416; x_wconf 87 eng ltr Regulation   ocrx_word word_1_283 bbox 655 1398 666 1412; x_wconf 96 eng ltr  H    ocrx_word word_1_284 bbox 674 1397 698 1416; x_wconf 80 eng (12   ocrx_word word_1_285 bbox 705 1398 755 1412; x_wconf 90 eng ltr C.F.R.   ocrx_word word_1_286 bbox 763 1397 771 1414; x_wconf 81 eng §   ocrx_word word_1_287 bbox 778 1397 838 1416; x_wconf 77 eng 208.63)   ocrx_word word_1_288 bbox 845 1397 889 1416; x_wconf 84 eng ltr (BSA   ocrx_word word_1_289 bbox 895 1401 961 1416; x_wconf 89 eng ltr program   ocrx_word word_1_290 bbox 968 1397 1071 1416; x_wconf 86 eng ltr requirements

       ocr_line line_1_24 bbox 144 1421 341 1439; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_291 bbox 144 1421 167 1435; x_wconf 91 eng ltr for   ocrx_word word_1_292 bbox 173 1422 208 1435; x_wconf 82 eng ltr state   ocrx_word word_1_293 bbox 215 1421 279 1435; x_wconf 87 eng ltr member   ocrx_word word_1_294 bbox 285 1421 341 1439; x_wconf 84 eng ltr banks).










  page
  - 2 -

 and regulations, each banking organization is also required to maintain a customer identification

  program as part of the BSA compliance program and perform due diligence on its customers.2

  In addition, a banking organization must identify and report known or suspected criminal

  violations of the BSA or certain other federal laws and suspicious transactions related to money-

  laundering activity.3  Criminal prosecutors at the Department of Justice and other law

  enforcement officials have direct access to the database that holds these Suspicious Activity

  Reports and rely on this information to initiate criminal investigations.

  The Federal Reserve and the other federal banking agencies have published an

  examination manual intended to provide practical and flexible guidance to examiners and

  banking organizations regarding acceptable customer due-diligence and risk-mitigation practices

  as part of an effective BSA program.4  The Federal Reserve expects a banking organization to

  maintain adequate policies and procedures to address risks associated with customer

  relationships.  The scope of these policies and procedures will depend on the banking

  organization’s ongoing assessment of the risks posed by the particular customer relationship.  A

  banking organization takes many factors into account when conducting a customer risk

  assessment including, in particular, the standards the customer has in place to ensure compliance

  with applicable laws and regulations, and the relationship the customer seeks with the banking

  organization.  It is essential that banking organizations make a judgment as to customers with

  respect to the level of risk they pose.

  2  See 31 C.F.R. § 103.121 and Board of Governors Regulations H and K at 12 C.F.R. §§ 208.63(b)(2), 211.5(m)(2),
 and 211.24(j)(2) (customer identification requirements).
 3  See 12 C.F.R. § 208.62 and Regulations K and Y at 12 C.F.R. §§ 211.5(k), 211.24(f), and 225.4(f) (suspicious
 activity reporting requirements).
 4  See Federal Financial Institutions Examination Council (2010), “Bank Secrecy Act/Anti-Money Laundering
 Examination Manual” (April 29).



  ocr







    ocr_page page_1 image "/tmp/apache-tika-8591412721899008467.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 144 149 1072 1164
      ocr_par ltr par_1_1 bbox 144 149 1069 557
       ocr_line line_1_1 bbox 593 149 631 166; baseline 0 -6; x_size 14.143075; x_descenders 3.1430748; x_ascenders 3.1430745  ocrx_word word_1_1 bbox 593 158 599 160; x_wconf 96 eng _   ocrx_word word_1_2 bbox 607 149 617 166; x_wconf 78 eng 2   ocrx_word word_1_3 bbox 625 158 631 160; x_wconf 61 eng .

       ocr_line line_1_2 bbox 145 203 1067 226; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_4 bbox 145 203 177 221; x_wconf 93 eng ltr and   ocrx_word word_1_5 bbox 186 203 295 226; x_wconf 80 eng ltr regulations,   ocrx_word word_1_6 bbox 304 203 346 221; x_wconf 92 eng ltr each   ocrx_word word_1_7 bbox 354 203 429 226; x_wconf 79 eng ltr banking   ocrx_word word_1_8 bbox 437 203 555 226; x_wconf 82 eng ltr organization   ocrx_word word_1_9 bbox 564 203 578 221; x_wconf 89 eng ltr is   ocrx_word word_1_10 bbox 585 203 622 221; x_wconf 82 eng ltr also   ocrx_word word_1_11 bbox 631 203 707 226; x_wconf 82 eng ltr required   ocrx_word word_1_12 bbox 715 205 733 221; x_wconf 91 eng ltr to   ocrx_word word_1_13 bbox 741 203 822 221; x_wconf 82 eng ltr maintain   ocrx_word word_1_14 bbox 830 208 840 221; x_wconf 92 eng ltr a   ocrx_word word_1_15 bbox 847 205 934 221; x_wconf 85 eng ltr customer   ocrx_word word_1_16 bbox 942 203 1067 221; x_wconf 83 eng ltr identification

       ocr_line line_1_3 bbox 145 256 1048 281; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_17 bbox 145 263 224 281; x_wconf 85 eng ltr program   ocrx_word word_1_18 bbox 232 263 250 276; x_wconf 88 eng ltr as   ocrx_word word_1_19 bbox 258 261 294 281; x_wconf 90 eng ltr part   ocrx_word word_1_20 bbox 301 259 321 276; x_wconf 91 eng ltr of   ocrx_word word_1_21 bbox 327 259 355 276; x_wconf 91 eng ltr the   ocrx_word word_1_22 bbox 364 259 408 276; x_wconf 93 eng ltr BSA   ocrx_word word_1_23 bbox 416 259 524 281; x_wconf 82 eng ltr compliance   ocrx_word word_1_24 bbox 532 263 611 281; x_wconf 87 eng ltr program   ocrx_word word_1_25 bbox 619 259 652 276; x_wconf 92 eng ltr and   ocrx_word word_1_26 bbox 661 259 735 281; x_wconf 87 eng ltr perform   ocrx_word word_1_27 bbox 743 259 776 276; x_wconf 92 eng ltr due   ocrx_word word_1_28 bbox 784 259 870 281; x_wconf 86 eng ltr diligence   ocrx_word word_1_29 bbox 878 263 900 276; x_wconf 95 eng ltr on   ocrx_word word_1_30 bbox 909 259 929 276; x_wconf 96 eng ltr its   ocrx_word word_1_31 bbox 937 256 1048 276; x_wconf 85 eng ltr customers.z

       ocr_line line_1_4 bbox 147 314 999 336; baseline 0.001 -5; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_32 bbox 147 315 162 331; x_wconf 95 eng ltr In   ocrx_word word_1_33 bbox 171 314 253 334; x_wconf 75 eng ltr addition,   ocrx_word word_1_34 bbox 261 318 271 332; x_wconf 88 eng ltr a   ocrx_word word_1_35 bbox 279 314 353 336; x_wconf 85 eng ltr banking   ocrx_word word_1_36 bbox 361 314 479 336; x_wconf 78 eng ltr organization   ocrx_word word_1_37 bbox 488 316 533 332; x_wconf 89 eng ltr must   ocrx_word word_1_38 bbox 541 314 614 336; x_wconf 90 eng ltr identify   ocrx_word word_1_39 bbox 621 314 653 332; x_wconf 92 eng ltr and   ocrx_word word_1_40 bbox 662 316 717 336; x_wconf 88 eng ltr repon   ocrx_word word_1_41 bbox 725 314 787 332; x_wconf 88 eng ltr known   ocrx_word word_1_42 bbox 796 318 815 332; x_wconf 86 eng ltr or   ocrx_word word_1_43 bbox 822 314 913 336; x_wconf 78 eng ltr suspected   ocrx_word word_1_44 bbox 921 314 999 332; x_wconf 89 eng ltr criminal

       ocr_line line_1_5 bbox 144 369 1069 392; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_45 bbox 144 369 238 387; x_wconf 88 eng ltr violations   ocrx_word word_1_46 bbox 246 369 265 387; x_wconf 89 eng ltr of   ocrx_word word_1_47 bbox 271 369 299 387; x_wconf 88 eng ltr the   ocrx_word word_1_48 bbox 308 370 352 387; x_wconf 86 eng ltr BSA   ocrx_word word_1_49 bbox 359 373 378 387; x_wconf 90 eng ltr or   ocrx_word word_1_50 bbox 386 369 448 387; x_wconf 82 eng ltr certain   ocrx_word word_1_51 bbox 457 369 505 387; x_wconf 88 eng ltr other   ocrx_word word_1_52 bbox 511 369 576 387; x_wconf 87 eng ltr federal   ocrx_word word_1_53 bbox 586 369 627 387; x_wconf 91 eng ltr laws   ocrx_word word_1_54 bbox 635 369 667 387; x_wconf 89 eng ltr and   ocrx_word word_1_55 bbox 675 369 774 392; x_wconf 84 eng ltr suspicious   ocrx_word word_1_56 bbox 781 369 894 387; x_wconf 82 eng ltr transactions   ocrx_word word_1_57 bbox 903 369 965 387; x_wconf 87 eng ltr related   ocrx_word word_1_58 bbox 972 371 990 387; x_wconf 88 eng ltr to   ocrx_word word_1_59 bbox 998 373 1069 392; x_wconf 93 eng ltr money-

       ocr_line line_1_6 bbox 146 421 965 447; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_60 bbox 146 424 245 447; x_wconf 89 eng ltr Iaundering   ocrx_word word_1_61 bbox 253 421 339 447; x_wconf 72 eng ltr activity.3   ocrx_word word_1_62 bbox 353 424 435 442; x_wconf 89 eng ltr Criminal   ocrx_word word_1_63 bbox 445 426 553 447; x_wconf 87 eng ltr prosecutors   ocrx_word word_1_64 bbox 560 426 577 442; x_wconf 89 eng ltr at   ocrx_word word_1_65 bbox 583 424 611 442; x_wconf 87 eng ltr the   ocrx_word word_1_66 bbox 620 425 731 447; x_wconf 89 eng ltr Department   ocrx_word word_1_67 bbox 738 424 758 442; x_wconf 88 eng ltr of   ocrx_word word_1_68 bbox 764 424 828 442; x_wconf 83 eng ltr Justice   ocrx_word word_1_69 bbox 836 424 868 442; x_wconf 89 eng ltr and   ocrx_word word_1_70 bbox 877 424 925 442; x_wconf 87 eng ltr other   ocrx_word word_1_71 bbox 933 424 965 442; x_wconf 90 eng ltr law

       ocr_line line_1_7 bbox 145 479 1026 502; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_72 bbox 145 479 263 497; x_wconf 91 eng ltr enforcement   ocrx_word word_1_73 bbox 271 479 348 497; x_wconf 86 eng ltr officials   ocrx_word word_1_74 bbox 356 479 399 497; x_wconf 92 eng ltr have   ocrx_word word_1_75 bbox 407 479 460 497; x_wconf 90 eng ltr direct   ocrx_word word_1_76 bbox 467 484 527 497; x_wconf 86 eng ltr access   ocrx_word word_1_77 bbox 534 481 552 497; x_wconf 91 eng ltr to   ocrx_word word_1_78 bbox 559 479 587 497; x_wconf 89 eng ltr the   ocrx_word word_1_79 bbox 595 479 676 497; x_wconf 86 eng ltr database   ocrx_word word_1_80 bbox 683 479 718 497; x_wconf 91 eng ltr that   ocrx_word word_1_81 bbox 726 479 776 497; x_wconf 91 eng ltr holds   ocrx_word word_1_82 bbox 783 479 831 497; x_wconf 85 eng ltr these   ocrx_word word_1_83 bbox 839 479 941 502; x_wconf 87 eng ltr Suspicious   ocrx_word word_1_84 bbox 948 479 1026 502; x_wconf 92 eng ltr Activity

       ocr_line line_1_8 bbox 146 535 819 557; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_85 bbox 146 535 218 557; x_wconf 88 eng ltr Reports   ocrx_word word_1_86 bbox 225 535 258 552; x_wconf 92 eng ltr and   ocrx_word word_1_87 bbox 267 535 302 557; x_wconf 91 eng ltr rely   ocrx_word word_1_88 bbox 309 539 331 552; x_wconf 93 eng ltr on   ocrx_word word_1_89 bbox 339 535 372 552; x_wconf 91 eng ltr this   ocrx_word word_1_90 bbox 381 535 491 552; x_wconf 87 eng ltr information   ocrx_word word_1_91 bbox 499 536 516 552; x_wconf 90 eng ltr to   ocrx_word word_1_92 bbox 525 535 589 552; x_wconf 90 eng ltr initiate   ocrx_word word_1_93 bbox 597 535 674 552; x_wconf 92 eng ltr criminal   ocrx_word word_1_94 bbox 684 535 819 557; x_wconf 88 eng ltr investigations.




      ocr_par ltr par_1_2 bbox 144 590 1072 1164
       ocr_line line_1_9 bbox 216 590 968 612; baseline 0 -4; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_95 bbox 216 590 252 608; x_wconf 89 eng ltr The   ocrx_word word_1_96 bbox 261 590 329 608; x_wconf 88 eng ltr Federal   ocrx_word word_1_97 bbox 339 591 413 608; x_wconf 87 eng ltr Reserve   ocrx_word word_1_98 bbox 421 590 454 608; x_wconf 90 eng ltr and   ocrx_word word_1_99 bbox 462 590 490 608; x_wconf 90 eng ltr the   ocrx_word word_1_100 bbox 497 590 545 608; x_wconf 90 eng ltr other   ocrx_word word_1_101 bbox 552 590 616 608; x_wconf 86 eng ltr federal   ocrx_word word_1_102 bbox 626 590 700 612; x_wconf 86 eng ltr banking   ocrx_word word_1_103 bbox 708 590 789 612; x_wconf 87 eng ltr agencies   ocrx_word word_1_104 bbox 797 590 841 608; x_wconf 89 eng ltr have   ocrx_word word_1_105 bbox 849 590 939 612; x_wconf 88 eng ltr published   ocrx_word word_1_106 bbox 948 594 968 608; x_wconf 94 eng ltr an

       ocr_line line_1_10 bbox 145 645 1002 668; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_107 bbox 145 645 261 663; x_wconf 85 eng ltr examination   ocrx_word word_1_108 bbox 270 645 337 663; x_wconf 85 eng ltr manual   ocrx_word word_1_109 bbox 347 645 426 663; x_wconf 87 eng ltr intended   ocrx_word word_1_110 bbox 434 647 452 663; x_wconf 88 eng ltr to   ocrx_word word_1_111 bbox 460 645 531 668; x_wconf 90 eng ltr provide   ocrx_word word_1_112 bbox 539 645 618 668; x_wconf 89 eng ltr practical   ocrx_word word_1_113 bbox 627 645 660 663; x_wconf 89 eng ltr and   ocrx_word word_1_114 bbox 667 645 740 663; x_wconf 86 eng ltr flexible   ocrx_word word_1_115 bbox 747 645 832 668; x_wconf 84 eng ltr guidance   ocrx_word word_1_116 bbox 839 647 857 663; x_wconf 90 eng ltr to   ocrx_word word_1_117 bbox 865 645 962 663; x_wconf 86 eng ltr examiners   ocrx_word word_1_118 bbox 969 645 1002 663; x_wconf 89 eng ltr and

       ocr_line line_1_11 bbox 145 700 1072 723; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_119 bbox 145 700 220 723; x_wconf 89 eng ltr banking   ocrx_word word_1_120 bbox 228 700 356 723; x_wconf 90 eng ltr organizations   ocrx_word word_1_121 bbox 364 700 453 723; x_wconf 88 eng ltr regarding   ocrx_word word_1_122 bbox 461 700 561 723; x_wconf 88 eng ltr acceptable   ocrx_word word_1_123 bbox 569 702 656 718; x_wconf 87 eng ltr customer   ocrx_word word_1_124 bbox 663 700 792 723; x_wconf 89 eng ltr due-diligence   ocrx_word word_1_125 bbox 799 700 832 718; x_wconf 87 eng ltr and   ocrx_word word_1_126 bbox 841 700 980 723; x_wconf 89 eng ltr risk-mitigation   ocrx_word word_1_127 bbox 989 700 1072 723; x_wconf 88 eng ltr practices

       ocr_line line_1_12 bbox 145 753 1046 778; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_128 bbox 145 760 163 773; x_wconf 94 eng ltr as   ocrx_word word_1_129 bbox 171 757 207 778; x_wconf 90 eng ltr part   ocrx_word word_1_130 bbox 214 755 233 773; x_wconf 94 eng ltr of   ocrx_word word_1_131 bbox 240 760 260 773; x_wconf 98 eng ltr an   ocrx_word word_1_132 bbox 269 755 351 773; x_wconf 84 eng ltr effective   ocrx_word word_1_133 bbox 360 756 404 773; x_wconf 89 eng ltr BSA   ocrx_word word_1_134 bbox 412 753 507 778; x_wconf 74 eng ltr program"   ocrx_word word_1_135 bbox 520 755 556 773; x_wconf 92 eng ltr The   ocrx_word word_1_136 bbox 564 755 632 773; x_wconf 91 eng ltr Federal   ocrx_word word_1_137 bbox 642 756 717 773; x_wconf 87 eng ltr Reserve   ocrx_word word_1_138 bbox 724 757 795 778; x_wconf 84 eng ltr expects   ocrx_word word_1_139 bbox 802 760 812 773; x_wconf 96 eng ltr a   ocrx_word word_1_140 bbox 819 755 894 778; x_wconf 91 eng ltr banking   ocrx_word word_1_141 bbox 902 755 1021 778; x_wconf 86 eng ltr organization   ocrx_word word_1_142 bbox 1028 757 1046 773; x_wconf 91 eng ltr to

       ocr_line line_1_13 bbox 145 811 953 833; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_143 bbox 145 811 227 828; x_wconf 94 eng ltr maintain   ocrx_word word_1_144 bbox 235 811 318 833; x_wconf 87 eng ltr adequate   ocrx_word word_1_145 bbox 326 811 399 833; x_wconf 86 eng ltr policies   ocrx_word word_1_146 bbox 407 811 439 828; x_wconf 89 eng ltr and   ocrx_word word_1_147 bbox 448 811 551 833; x_wconf 88 eng ltr procedures   ocrx_word word_1_148 bbox 558 812 575 828; x_wconf 91 eng ltr to   ocrx_word word_1_149 bbox 583 811 654 828; x_wconf 88 eng ltr address   ocrx_word word_1_150 bbox 662 811 705 828; x_wconf 87 eng ltr risks   ocrx_word word_1_151 bbox 713 811 809 828; x_wconf 89 eng ltr associated   ocrx_word word_1_152 bbox 816 811 858 828; x_wconf 93 eng ltr with   ocrx_word word_1_153 bbox 866 812 953 828; x_wconf 88 eng ltr customer

       ocr_line line_1_14 bbox 145 866 962 888; baseline 0 -4; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_154 bbox 145 866 271 888; x_wconf 85 eng ltr relationships.   ocrx_word word_1_155 bbox 285 866 321 884; x_wconf 94 eng ltr The   ocrx_word word_1_156 bbox 328 870 382 888; x_wconf 89 eng ltr scope   ocrx_word word_1_157 bbox 389 866 409 884; x_wconf 90 eng ltr of   ocrx_word word_1_158 bbox 415 866 463 884; x_wconf 89 eng ltr these   ocrx_word word_1_159 bbox 471 866 544 888; x_wconf 89 eng ltr policies   ocrx_word word_1_160 bbox 551 866 583 884; x_wconf 89 eng ltr and   ocrx_word word_1_161 bbox 592 866 696 888; x_wconf 87 eng ltr procedures   ocrx_word word_1_162 bbox 702 866 738 883; x_wconf 96 eng ltr will   ocrx_word word_1_163 bbox 746 866 813 888; x_wconf 87 eng ltr depend   ocrx_word word_1_164 bbox 822 870 843 884; x_wconf 88 eng ltr on   ocrx_word word_1_165 bbox 851 866 880 884; x_wconf 93 eng ltr the   ocrx_word word_1_166 bbox 888 866 962 888; x_wconf 89 eng ltr banking

       ocr_line line_1_15 bbox 145 921 1064 944; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_167 bbox 145 921 281 944; x_wconf 85 eng ltr organization’s   ocrx_word word_1_168 bbox 288 921 365 944; x_wconf 86 eng ltr ongoing   ocrx_word word_1_169 bbox 372 923 478 939; x_wconf 88 eng ltr assessment   ocrx_word word_1_170 bbox 485 921 505 939; x_wconf 85 eng ltr of   ocrx_word word_1_171 bbox 511 921 539 939; x_wconf 93 eng ltr the   ocrx_word word_1_172 bbox 547 921 590 939; x_wconf 89 eng ltr risks   ocrx_word word_1_173 bbox 598 921 652 944; x_wconf 89 eng ltr posed   ocrx_word word_1_174 bbox 660 921 683 944; x_wconf 89 eng ltr by   ocrx_word word_1_175 bbox 689 921 718 939; x_wconf 86 eng ltr the   ocrx_word word_1_176 bbox 726 921 816 944; x_wconf 88 eng ltr particular   ocrx_word word_1_177 bbox 823 923 910 939; x_wconf 88 eng ltr customer   ocrx_word word_1_178 bbox 918 921 1034 944; x_wconf 90 eng ltr relationship.   ocrx_word word_1_179 bbox 1048 922 1064 939; x_wconf 96 eng ltr A

       ocr_line line_1_16 bbox 145 976 980 999; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_180 bbox 145 976 220 999; x_wconf 90 eng ltr banking   ocrx_word word_1_181 bbox 228 976 346 999; x_wconf 90 eng ltr organization   ocrx_word word_1_182 bbox 354 976 402 994; x_wconf 89 eng ltr takes   ocrx_word word_1_183 bbox 410 981 462 999; x_wconf 90 eng ltr many   ocrx_word word_1_184 bbox 468 976 532 994; x_wconf 88 eng ltr factors   ocrx_word word_1_185 bbox 541 976 576 994; x_wconf 88 eng ltr into   ocrx_word word_1_186 bbox 583 978 657 994; x_wconf 87 eng ltr account   ocrx_word word_1_187 bbox 663 976 714 994; x_wconf 91 eng ltr when   ocrx_word word_1_188 bbox 722 976 826 999; x_wconf 88 eng ltr conducting   ocrx_word word_1_189 bbox 834 981 844 994; x_wconf 93 eng ltr a   ocrx_word word_1_190 bbox 851 978 938 994; x_wconf 89 eng ltr customer   ocrx_word word_1_191 bbox 946 976 980 994; x_wconf 90 eng ltr risk

       ocr_line line_1_17 bbox 145 1031 1072 1054; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_192 bbox 145 1033 250 1049; x_wconf 89 eng ltr assessment   ocrx_word word_1_193 bbox 258 1031 351 1054; x_wconf 74 eng ltr including,   ocrx_word word_1_194 bbox 361 1031 376 1049; x_wconf 94 eng ltr in   ocrx_word word_1_195 bbox 385 1031 480 1054; x_wconf 74 eng ltr particular,   ocrx_word word_1_196 bbox 488 1031 516 1049; x_wconf 92 eng ltr the   ocrx_word word_1_197 bbox 523 1031 613 1049; x_wconf 90 eng ltr standards   ocrx_word word_1_198 bbox 620 1031 648 1049; x_wconf 92 eng ltr the   ocrx_word word_1_199 bbox 656 1033 743 1049; x_wconf 88 eng ltr customer   ocrx_word word_1_200 bbox 750 1031 780 1049; x_wconf 94 eng ltr has   ocrx_word word_1_201 bbox 789 1031 804 1049; x_wconf 94 eng ltr in   ocrx_word word_1_202 bbox 813 1031 862 1054; x_wconf 92 eng ltr place   ocrx_word word_1_203 bbox 869 1033 886 1049; x_wconf 91 eng ltr to   ocrx_word word_1_204 bbox 894 1036 955 1049; x_wconf 89 eng ltr ensure   ocrx_word word_1_205 bbox 962 1031 1072 1054; x_wconf 86 eng ltr compliance

       ocr_line line_1_18 bbox 144 1087 1049 1109; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_206 bbox 144 1087 185 1104; x_wconf 92 eng ltr with   ocrx_word word_1_207 bbox 193 1087 290 1109; x_wconf 91 eng ltr applicable   ocrx_word word_1_208 bbox 299 1087 340 1104; x_wconf 89 eng ltr laws   ocrx_word word_1_209 bbox 348 1087 380 1104; x_wconf 89 eng ltr and   ocrx_word word_1_210 bbox 389 1087 498 1109; x_wconf 73 eng ltr regulations   ocrx_word word_1_211 bbox 507 1087 540 1104; x_wconf 87 eng ltr and   ocrx_word word_1_212 bbox 547 1087 575 1104; x_wconf 92 eng ltr the   ocrx_word word_1_213 bbox 584 1087 695 1109; x_wconf 88 eng ltr relationship   ocrx_word word_1_214 bbox 702 1087 730 1104; x_wconf 95 eng ltr the   ocrx_word word_1_215 bbox 738 1088 825 1104; x_wconf 91 eng ltr customer   ocrx_word word_1_216 bbox 831 1087 882 1104; x_wconf 85 eng ltr seeks   ocrx_word word_1_217 bbox 889 1087 930 1104; x_wconf 92 eng ltr with   ocrx_word word_1_218 bbox 938 1087 966 1104; x_wconf 91 eng ltr the   ocrx_word word_1_219 bbox 974 1087 1049 1109; x_wconf 89 eng ltr banking

       ocr_line line_1_19 bbox 145 1142 1040 1164; baseline 0.001 -5; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_220 bbox 145 1142 268 1164; x_wconf 85 eng ltr organization.   ocrx_word word_1_221 bbox 285 1143 296 1160; x_wconf 92 eng ltr It   ocrx_word word_1_222 bbox 304 1142 318 1160; x_wconf 92 eng ltr is   ocrx_word word_1_223 bbox 325 1142 405 1160; x_wconf 82 eng ltr essential   ocrx_word word_1_224 bbox 414 1142 449 1160; x_wconf 87 eng ltr that   ocrx_word word_1_225 bbox 457 1142 531 1164; x_wconf 88 eng ltr banking   ocrx_word word_1_226 bbox 539 1142 667 1164; x_wconf 81 eng ltr organizations   ocrx_word word_1_227 bbox 675 1142 725 1160; x_wconf 88 eng ltr make   ocrx_word word_1_228 bbox 732 1142 839 1164; x_wconf 89 eng ltr ajudgment   ocrx_word word_1_229 bbox 846 1146 864 1160; x_wconf 88 eng ltr as   ocrx_word word_1_230 bbox 871 1144 889 1160; x_wconf 86 eng ltr to   ocrx_word word_1_231 bbox 897 1144 992 1160; x_wconf 80 eng ltr customers   ocrx_word word_1_232 bbox 999 1142 1040 1160; x_wconf 93 eng ltr with





     ocr_carea block_1_2 bbox 145 1197 494 1220
      ocr_par ltr par_1_3 bbox 145 1197 494 1220
       ocr_line line_1_20 bbox 145 1197 494 1220; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_233 bbox 145 1199 211 1220; x_wconf 88 eng ltr respect   ocrx_word word_1_234 bbox 218 1199 235 1215; x_wconf 89 eng ltr to   ocrx_word word_1_235 bbox 243 1197 271 1215; x_wconf 90 eng ltr the   ocrx_word word_1_236 bbox 280 1197 322 1215; x_wconf 92 eng ltr level   ocrx_word word_1_237 bbox 331 1197 351 1215; x_wconf 85 eng ltr of   ocrx_word word_1_238 bbox 358 1197 392 1215; x_wconf 92 eng ltr risk   ocrx_word word_1_239 bbox 399 1197 440 1220; x_wconf 88 eng ltr they   ocrx_word word_1_240 bbox 447 1201 494 1220; x_wconf 67 eng ltr pose,





     ocr_carea block_1_3 bbox 144 1304 1070 1439
      ocr_par ltr par_1_4 bbox 144 1304 1070 1347
       ocr_line line_1_21 bbox 144 1304 1070 1324; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_241 bbox 144 1304 150 1313; x_wconf 66 eng  2    ocrx_word word_1_242 bbox 161 1306 189 1320; x_wconf 89 eng ltr See   ocrx_word word_1_243 bbox 195 1306 214 1320; x_wconf 83 eng 31   ocrx_word word_1_244 bbox 220 1306 266 1320; x_wconf 91 eng ltr C.F.R   ocrx_word word_1_245 bbox 278 1306 286 1322; x_wconf 78 eng §   ocrx_word word_1_246 bbox 294 1306 356 1320; x_wconf 77 eng 103.121   ocrx_word word_1_247 bbox 363 1306 390 1320; x_wconf 88 eng ltr and   ocrx_word word_1_248 bbox 398 1306 443 1320; x_wconf 87 eng ltr Board   ocrx_word word_1_249 bbox 450 1306 466 1320; x_wconf 89 eng ltr of   ocrx_word word_1_250 bbox 472 1306 554 1320; x_wconf 84 eng ltr Governors   ocrx_word word_1_251 bbox 561 1306 654 1324; x_wconf 87 eng ltr Regulations   ocrx_word word_1_252 bbox 661 1306 672 1320; x_wconf 95 eng ltr  H    ocrx_word word_1_253 bbox 680 1306 707 1320; x_wconf 92 eng ltr and   ocrx_word word_1_254 bbox 715 1306 727 1320; x_wconf 90 eng ltr K   ocrx_word word_1_255 bbox 733 1307 747 1320; x_wconf 84 eng ltr at   ocrx_word word_1_256 bbox 753 1306 771 1320; x_wconf 91 eng 12   ocrx_word word_1_257 bbox 778 1306 789 1320; x_wconf 85 eng ltr C   ocrx_word word_1_258 bbox 797 1306 828 1320; x_wconf 67 eng ltr FR.   ocrx_word word_1_259 bbox 835 1306 853 1322; x_wconf 84 eng §§   ocrx_word word_1_260 bbox 860 1306 964 1324; x_wconf 74 eng ltr 208.63(b)(2),   ocrx_word word_1_261 bbox 971 1306 1070 1324; x_wconf 72 eng ltr 211.5(m)(2),

       ocr_line line_1_22 bbox 145 1329 591 1347; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_262 bbox 145 1329 172 1343; x_wconf 82 eng ltr and   ocrx_word word_1_263 bbox 179 1329 207 1343; x_wconf 91 eng 211   ocrx_word word_1_264 bbox 214 1329 274 1347; x_wconf 68 eng 24(1)(2)   ocrx_word word_1_265 bbox 281 1329 360 1347; x_wconf 84 eng ltr (customer   ocrx_word word_1_266 bbox 367 1329 471 1343; x_wconf 84 eng ltr identification   ocrx_word word_1_267 bbox 478 1329 591 1347; x_wconf 86 eng ltr requirements).




      ocr_par ltr par_1_5 bbox 144 1350 1043 1393
       ocr_line line_1_23 bbox 144 1350 1043 1370; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_268 bbox 144 1350 150 1359; x_wconf 66 eng  3    ocrx_word word_1_269 bbox 161 1352 189 1366; x_wconf 90 eng ltr See   ocrx_word word_1_270 bbox 196 1352 214 1366; x_wconf 97 eng 12   ocrx_word word_1_271 bbox 220 1352 266 1366; x_wconf 89 eng ltr C.F.R   ocrx_word word_1_272 bbox 278 1352 286 1368; x_wconf 77 eng §   ocrx_word word_1_273 bbox 293 1352 347 1366; x_wconf 70 eng 208.62   ocrx_word word_1_274 bbox 353 1352 380 1366; x_wconf 91 eng ltr and   ocrx_word word_1_275 bbox 388 1352 481 1370; x_wconf 88 eng ltr Regulations   ocrx_word word_1_276 bbox 488 1352 500 1366; x_wconf 90 eng ltr K   ocrx_word word_1_277 bbox 506 1352 534 1366; x_wconf 93 eng ltr and   ocrx_word word_1_278 bbox 541 1352 553 1366; x_wconf 86 eng ltr Y   ocrx_word word_1_279 bbox 560 1353 574 1366; x_wconf 88 eng ltr at   ocrx_word word_1_280 bbox 580 1352 598 1366; x_wconf 90 eng 12   ocrx_word word_1_281 bbox 605 1352 655 1366; x_wconf 85 eng ltr C.F.R.   ocrx_word word_1_282 bbox 663 1352 681 1368; x_wconf 81 eng §§   ocrx_word word_1_283 bbox 688 1352 759 1370; x_wconf 74 eng ltr 211.5(k),   ocrx_word word_1_284 bbox 766 1352 844 1370; x_wconf 75 eng ltr 211.24(f),   ocrx_word word_1_285 bbox 851 1352 878 1366; x_wconf 90 eng ltr and   ocrx_word word_1_286 bbox 885 1352 948 1370; x_wconf 84 eng ltr 225.4(f)   ocrx_word word_1_287 bbox 955 1352 1043 1370; x_wconf 80 eng ltr (suspicmus

       ocr_line line_1_24 bbox 145 1375 402 1393; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_288 bbox 145 1375 204 1393; x_wconf 84 eng ltr activity   ocrx_word word_1_289 bbox 210 1375 281 1393; x_wconf 86 eng ltr reporting   ocrx_word word_1_290 bbox 288 1375 402 1393; x_wconf 80 eng ltr requirements).




      ocr_par ltr par_1_6 bbox 144 1396 1026 1439
       ocr_line line_1_25 bbox 144 1396 1026 1416; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_291 bbox 144 1396 150 1405; x_wconf 58 eng  4    ocrx_word word_1_292 bbox 161 1398 189 1412; x_wconf 86 eng ltr See   ocrx_word word_1_293 bbox 196 1397 253 1412; x_wconf 90 eng ltr Federal   ocrx_word word_1_294 bbox 261 1397 332 1412; x_wconf 89 eng ltr Financial   ocrx_word word_1_295 bbox 341 1397 428 1412; x_wconf 88 eng ltr Institutions   ocrx_word word_1_296 bbox 435 1397 535 1412; x_wconf 83 eng ltr Examination   ocrx_word word_1_297 bbox 542 1397 602 1412; x_wconf 87 eng ltr Council   ocrx_word word_1_298 bbox 610 1397 666 1416; x_wconf 77 eng (2010),   ocrx_word word_1_299 bbox 674 1397 723 1412; x_wconf 79 eng ltr “Bank   ocrx_word word_1_300 bbox 729 1398 792 1416; x_wconf 86 eng ltr Secrecy   ocrx_word word_1_301 bbox 797 1397 930 1416; x_wconf 87 eng ltr Act/Anti-Money   ocrx_word word_1_302 bbox 937 1397 1026 1416; x_wconf 88 eng ltr Laundering

       ocr_line line_1_26 bbox 145 1421 406 1439; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_303 bbox 145 1421 245 1435; x_wconf 86 eng ltr Examination   ocrx_word word_1_304 bbox 253 1421 320 1435; x_wconf 82 eng ltr Manual"   ocrx_word word_1_305 bbox 327 1421 373 1439; x_wconf 91 eng ltr (April   ocrx_word word_1_306 bbox 381 1421 406 1439; x_wconf 78 eng 29)










  page
  - 3 -


  The purpose of these policies is to ensure banking organizations provide services to law-

  abiding customers.  The decision to establish, limit, or terminate a particular customer

  relationship is a decision for the banking organization.  This decision may be based on various

  factors, including a banking organization’s assessment of the risks associated with offering

  banking services to a particular customer, and its capacity and systems to effectively manage

  those risks.  It is not the Board’s policy to discourage banking organizations from offering

  services to any class of law-abiding financial services consumers or businesses.

  Payment Services Offered by Nonbanks

  Many of the questions that have arisen with respect to the customer due-diligence

  expectations of the federal banking agencies relate to the involvement of nonbanks as

  intermediaries or providers of financial services, including money services businesses (MSBs)

  and third-party payment processors (TPPPs).  MSBs provide financial services, such as check

  cashing, money remittance, and other services, to customers that do not have traditional bank

  accounts.  Some MSBs include large, globally active companies while others are small

  businesses such as gas stations and convenience stores offering financial products and services.

  By comparison, TPPPs are bank customers that provide payment-processing services to

  merchants and other entities such as telemarketers and online businesses.  Both MSBs and

  TPPPs engage in transactions with individuals and companies who are not direct customers of

  the bank.

  The Federal Reserve follows guidance issued in 2005 by the federal banking agencies

  and the Financial Crimes Enforcement Network (FinCEN) governing account relationships with

  ocr







    ocr_page page_1 image "/tmp/apache-tika-353267252227495906.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 144 149 1066 1275
      ocr_par ltr par_1_1 bbox 593 149 631 166
       ocr_line line_1_1 bbox 593 149 631 166; baseline 0 -6; x_size 14.155738; x_descenders 3.1557376; x_ascenders 3.1557376  ocrx_word word_1_1 bbox 593 158 599 160; x_wconf 96 eng _   ocrx_word word_1_2 bbox 607 149 617 166; x_wconf 78 eng 3   ocrx_word word_1_3 bbox 625 158 631 160; x_wconf 61 eng .




      ocr_par ltr par_1_2 bbox 144 203 1066 557
       ocr_line line_1_2 bbox 216 203 1066 226; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_4 bbox 216 203 252 221; x_wconf 90 eng ltr The   ocrx_word word_1_5 bbox 261 208 334 226; x_wconf 82 eng ltr purpose   ocrx_word word_1_6 bbox 342 203 361 221; x_wconf 91 eng ltr of   ocrx_word word_1_7 bbox 367 203 416 221; x_wconf 81 eng ltr these   ocrx_word word_1_8 bbox 424 203 496 226; x_wconf 83 eng ltr policies   ocrx_word word_1_9 bbox 505 203 518 221; x_wconf 94 eng ltr is   ocrx_word word_1_10 bbox 525 205 543 221; x_wconf 89 eng ltr to   ocrx_word word_1_11 bbox 551 208 611 221; x_wconf 85 eng ltr ensure   ocrx_word word_1_12 bbox 620 203 694 226; x_wconf 83 eng ltr banking   ocrx_word word_1_13 bbox 703 203 830 226; x_wconf 81 eng ltr organizations   ocrx_word word_1_14 bbox 838 203 910 226; x_wconf 87 eng ltr provide   ocrx_word word_1_15 bbox 917 203 993 221; x_wconf 84 eng ltr services   ocrx_word word_1_16 bbox 1000 205 1017 221; x_wconf 92 eng ltr to   ocrx_word word_1_17 bbox 1026 203 1066 221; x_wconf 65 eng ltr law»

       ocr_line line_1_3 bbox 145 259 969 281; baseline 0 -5; x_size 20; x_descenders 3; x_ascenders 4  ocrx_word word_1_18 bbox 145 259 215 281; x_wconf 83 eng ltr abiding   ocrx_word word_1_19 bbox 223 260 323 276; x_wconf 85 eng ltr customers.   ocrx_word word_1_20 bbox 338 259 374 276; x_wconf 87 eng ltr The   ocrx_word word_1_21 bbox 381 259 459 276; x_wconf 92 eng ltr decision   ocrx_word word_1_22 bbox 467 260 484 276; x_wconf 89 eng ltr to   ocrx_word word_1_23 bbox 492 259 579 279; x_wconf 81 eng ltr establish,   ocrx_word word_1_24 bbox 589 259 637 279; x_wconf 84 eng ltr limit.   ocrx_word word_1_25 bbox 645 263 664 276; x_wconf 92 eng ltr or   ocrx_word word_1_26 bbox 671 259 760 276; x_wconf 82 eng ltr terminate   ocrx_word word_1_27 bbox 768 263 778 276; x_wconf 97 eng ltr a   ocrx_word word_1_28 bbox 785 259 875 281; x_wconf 87 eng ltr particular   ocrx_word word_1_29 bbox 883 260 969 276; x_wconf 90 eng ltr customer

       ocr_line line_1_4 bbox 145 314 1050 336; baseline 0.001 -5; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_30 bbox 145 314 256 336; x_wconf 81 eng ltr relationship   ocrx_word word_1_31 bbox 265 314 279 332; x_wconf 93 eng ltr is   ocrx_word word_1_32 bbox 286 318 296 332; x_wconf 89 eng ltr a   ocrx_word word_1_33 bbox 303 314 380 332; x_wconf 82 eng ltr decision   ocrx_word word_1_34 bbox 388 314 416 332; x_wconf 92 eng ltr for   ocrx_word word_1_35 bbox 422 314 450 332; x_wconf 93 eng ltr the   ocrx_word word_1_36 bbox 459 314 533 336; x_wconf 85 eng ltr banking   ocrx_word word_1_37 bbox 541 314 665 336; x_wconf 86 eng ltr organization.   ocrx_word word_1_38 bbox 679 314 721 332; x_wconf 90 eng ltr This   ocrx_word word_1_39 bbox 728 314 806 332; x_wconf 86 eng ltr decision   ocrx_word word_1_40 bbox 815 318 855 336; x_wconf 92 eng ltr may   ocrx_word word_1_41 bbox 862 314 882 332; x_wconf 91 eng ltr be   ocrx_word word_1_42 bbox 891 314 942 332; x_wconf 83 eng ltr based   ocrx_word word_1_43 bbox 950 318 972 332; x_wconf 94 eng ltr on   ocrx_word word_1_44 bbox 980 314 1050 332; x_wconf 85 eng ltr various

       ocr_line line_1_5 bbox 144 369 1016 392; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_45 bbox 144 369 213 390; x_wconf 75 eng ltr factors,   ocrx_word word_1_46 bbox 223 369 311 392; x_wconf 82 eng ltr including   ocrx_word word_1_47 bbox 318 373 328 387; x_wconf 90 eng ltr a   ocrx_word word_1_48 bbox 336 369 410 392; x_wconf 83 eng ltr banking   ocrx_word word_1_49 bbox 418 369 554 392; x_wconf 88 eng ltr organization's   ocrx_word word_1_50 bbox 562 371 668 387; x_wconf 77 eng ltr assessment   ocrx_word word_1_51 bbox 675 369 694 387; x_wconf 88 eng ltr of   ocrx_word word_1_52 bbox 700 369 728 387; x_wconf 91 eng ltr the   ocrx_word word_1_53 bbox 737 369 780 387; x_wconf 90 eng ltr risks   ocrx_word word_1_54 bbox 787 369 884 387; x_wconf 81 eng ltr associated   ocrx_word word_1_55 bbox 891 369 932 387; x_wconf 94 eng ltr with   ocrx_word word_1_56 bbox 941 369 1016 392; x_wconf 85 eng ltr offering

       ocr_line line_1_6 bbox 145 424 1035 447; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_57 bbox 145 424 220 447; x_wconf 85 eng ltr banking   ocrx_word word_1_58 bbox 228 424 304 442; x_wconf 88 eng ltr services   ocrx_word word_1_59 bbox 311 426 328 442; x_wconf 91 eng ltr to   ocrx_word word_1_60 bbox 336 429 346 442; x_wconf 94 eng ltr a   ocrx_word word_1_61 bbox 353 424 443 447; x_wconf 90 eng ltr particular   ocrx_word word_1_62 bbox 451 426 542 445; x_wconf 89 eng ltr customer,   ocrx_word word_1_63 bbox 551 424 583 442; x_wconf 91 eng ltr and   ocrx_word word_1_64 bbox 592 424 612 442; x_wconf 84 eng ltr its   ocrx_word word_1_65 bbox 620 424 699 447; x_wconf 87 eng ltr capacity   ocrx_word word_1_66 bbox 706 424 738 442; x_wconf 92 eng ltr and   ocrx_word word_1_67 bbox 746 426 821 447; x_wconf 87 eng ltr systems   ocrx_word word_1_68 bbox 828 426 846 442; x_wconf 92 eng ltr to   ocrx_word word_1_69 bbox 853 424 955 447; x_wconf 87 eng ltr effectively   ocrx_word word_1_70 bbox 962 429 1035 447; x_wconf 89 eng ltr manage

       ocr_line line_1_7 bbox 144 479 1008 502; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_71 bbox 144 479 194 497; x_wconf 89 eng ltr those   ocrx_word word_1_72 bbox 202 479 250 497; x_wconf 91 eng ltr risks.   ocrx_word word_1_73 bbox 267 480 278 497; x_wconf 95 eng ltr It   ocrx_word word_1_74 bbox 286 479 300 497; x_wconf 90 eng ltr is   ocrx_word word_1_75 bbox 308 481 337 497; x_wconf 93 eng ltr not   ocrx_word word_1_76 bbox 343 479 372 497; x_wconf 91 eng ltr the   ocrx_word word_1_77 bbox 381 479 454 497; x_wconf 82 eng ltr Board’s   ocrx_word word_1_78 bbox 462 479 521 502; x_wconf 92 eng ltr policy   ocrx_word word_1_79 bbox 527 481 544 497; x_wconf 92 eng ltr to   ocrx_word word_1_80 bbox 552 479 654 502; x_wconf 81 eng ltr discourage   ocrx_word word_1_81 bbox 663 479 737 502; x_wconf 95 eng ltr banking   ocrx_word word_1_82 bbox 745 479 873 502; x_wconf 87 eng ltr organizations   ocrx_word word_1_83 bbox 880 479 925 497; x_wconf 91 eng ltr from   ocrx_word word_1_84 bbox 933 479 1008 502; x_wconf 88 eng ltr offering

       ocr_line line_1_8 bbox 144 535 905 557; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_85 bbox 144 535 220 552; x_wconf 89 eng ltr services   ocrx_word word_1_86 bbox 227 536 245 552; x_wconf 90 eng ltr to   ocrx_word word_1_87 bbox 252 539 286 557; x_wconf 92 eng ltr any   ocrx_word word_1_88 bbox 293 535 338 552; x_wconf 89 eng ltr class   ocrx_word word_1_89 bbox 346 535 365 552; x_wconf 96 eng ltr of   ocrx_word word_1_90 bbox 373 535 485 557; x_wconf 88 eng ltr law-abiding   ocrx_word word_1_91 bbox 492 535 574 552; x_wconf 87 eng ltr financial   ocrx_word word_1_92 bbox 582 535 658 552; x_wconf 89 eng ltr services   ocrx_word word_1_93 bbox 666 539 767 552; x_wconf 87 eng ltr consumers   ocrx_word word_1_94 bbox 774 539 793 552; x_wconf 92 eng ltr or   ocrx_word word_1_95 bbox 801 535 905 552; x_wconf 88 eng ltr businesses.




      ocr_par ltr par_1_3 bbox 146 590 552 613
       ocr_line line_1_9 bbox 146 590 552 613; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_96 bbox 146 591 234 613; x_wconf 89 eng ltr Payment   ocrx_word word_1_97 bbox 241 590 324 608; x_wconf 87 eng ltr Services   ocrx_word word_1_98 bbox 331 590 409 608; x_wconf 82 eng ltr Offered   ocrx_word word_1_99 bbox 418 590 442 613; x_wconf 89 eng ltr by   ocrx_word word_1_100 bbox 450 590 552 608; x_wconf 88 eng ltr Nonbanks




      ocr_par ltr par_1_4 bbox 144 645 1057 1215
       ocr_line line_1_10 bbox 218 645 999 668; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_101 bbox 218 646 272 668; x_wconf 93 eng ltr Many   ocrx_word word_1_102 bbox 278 645 298 663; x_wconf 95 eng ltr of   ocrx_word word_1_103 bbox 304 645 332 663; x_wconf 91 eng ltr the   ocrx_word word_1_104 bbox 340 645 429 668; x_wconf 84 eng ltr questions   ocrx_word word_1_105 bbox 436 645 472 663; x_wconf 90 eng ltr that   ocrx_word word_1_106 bbox 479 645 522 663; x_wconf 89 eng ltr have   ocrx_word word_1_107 bbox 530 645 585 663; x_wconf 88 eng ltr arisen   ocrx_word word_1_108 bbox 592 645 634 663; x_wconf 89 eng ltr with   ocrx_word word_1_109 bbox 643 647 709 668; x_wconf 84 eng ltr respect   ocrx_word word_1_110 bbox 715 647 733 663; x_wconf 88 eng ltr to   ocrx_word word_1_111 bbox 740 645 768 663; x_wconf 90 eng ltr the   ocrx_word word_1_112 bbox 776 647 863 663; x_wconf 89 eng ltr customer   ocrx_word word_1_113 bbox 870 645 999 668; x_wconf 83 eng ltr due-diligence

       ocr_line line_1_11 bbox 145 700 964 723; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_114 bbox 145 700 263 723; x_wconf 85 eng ltr expectations   ocrx_word word_1_115 bbox 271 700 290 718; x_wconf 92 eng ltr of   ocrx_word word_1_116 bbox 296 700 324 718; x_wconf 92 eng ltr the   ocrx_word word_1_117 bbox 331 700 396 718; x_wconf 82 eng ltr federal   ocrx_word word_1_118 bbox 405 700 480 723; x_wconf 91 eng ltr banking   ocrx_word word_1_119 bbox 488 700 569 723; x_wconf 87 eng ltr agencies   ocrx_word word_1_120 bbox 577 700 628 718; x_wconf 88 eng ltr relate   ocrx_word word_1_121 bbox 635 702 653 718; x_wconf 91 eng ltr to   ocrx_word word_1_122 bbox 660 700 688 718; x_wconf 92 eng ltr the   ocrx_word word_1_123 bbox 697 700 815 718; x_wconf 89 eng ltr involvement   ocrx_word word_1_124 bbox 822 700 841 718; x_wconf 91 eng ltr of   ocrx_word word_1_125 bbox 848 700 938 718; x_wconf 85 eng ltr nonbanks   ocrx_word word_1_126 bbox 946 705 964 718; x_wconf 92 eng ltr as

       ocr_line line_1_12 bbox 146 755 1048 778; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_127 bbox 146 755 280 773; x_wconf 88 eng ltr intermediaries   ocrx_word word_1_128 bbox 288 760 307 773; x_wconf 96 eng ltr or   ocrx_word word_1_129 bbox 314 755 403 778; x_wconf 94 eng ltr providers   ocrx_word word_1_130 bbox 411 755 430 773; x_wconf 91 eng ltr of   ocrx_word word_1_131 bbox 436 755 518 773; x_wconf 89 eng ltr financial   ocrx_word word_1_132 bbox 526 755 607 776; x_wconf 83 eng ltr services,   ocrx_word word_1_133 bbox 617 755 704 778; x_wconf 90 eng ltr including   ocrx_word word_1_134 bbox 713 760 777 778; x_wconf 92 eng ltr money   ocrx_word word_1_135 bbox 783 755 859 773; x_wconf 85 eng ltr services   ocrx_word word_1_136 bbox 868 755 967 773; x_wconf 89 eng ltr businesses   ocrx_word word_1_137 bbox 975 755 1048 778; x_wconf 87 eng ltr (MSBs)

       ocr_line line_1_13 bbox 145 811 1043 833; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_138 bbox 145 811 177 828; x_wconf 92 eng ltr and   ocrx_word word_1_139 bbox 185 811 287 833; x_wconf 88 eng ltr third-party   ocrx_word word_1_140 bbox 294 812 376 833; x_wconf 86 eng ltr payment   ocrx_word word_1_141 bbox 383 815 482 833; x_wconf 88 eng ltr processors   ocrx_word word_1_142 bbox 490 811 573 833; x_wconf 90 eng ltr (TPPPs).   ocrx_word word_1_143 bbox 589 811 646 828; x_wconf 86 eng ltr MSBs   ocrx_word word_1_144 bbox 654 811 725 833; x_wconf 86 eng ltr provide   ocrx_word word_1_145 bbox 733 811 814 828; x_wconf 90 eng ltr financial   ocrx_word word_1_146 bbox 823 811 904 831; x_wconf 85 eng ltr services,   ocrx_word word_1_147 bbox 912 811 954 828; x_wconf 88 eng ltr such   ocrx_word word_1_148 bbox 962 815 981 828; x_wconf 91 eng ltr as   ocrx_word word_1_149 bbox 988 811 1043 828; x_wconf 90 eng ltr check

       ocr_line line_1_14 bbox 145 866 1038 888; baseline 0 -4; x_size 23.632183; x_descenders 5.6321836; x_ascenders 4  ocrx_word word_1_150 bbox 145 866 221 888; x_wconf 85 eng ltr cashing,   ocrx_word word_1_151 bbox 230 870 295 888; x_wconf 86 eng ltr money   ocrx_word word_1_152 bbox 302 866 406 886; x_wconf 82 eng ltr remittance,   ocrx_word word_1_153 bbox 414 866 447 884; x_wconf 93 eng ltr and   ocrx_word word_1_154 bbox 455 866 503 884; x_wconf 87 eng ltr other   ocrx_word word_1_155 bbox 510 866 591 886; x_wconf 83 eng ltr services,   ocrx_word word_1_156 bbox 599 868 617 884; x_wconf 92 eng ltr to   ocrx_word word_1_157 bbox 625 868 720 884; x_wconf 83 eng ltr customers   ocrx_word word_1_158 bbox 727 866 763 884; x_wconf 85 eng ltr that   ocrx_word word_1_159 bbox 770 866 792 884; x_wconf 91 eng ltr do   ocrx_word word_1_160 bbox 801 868 830 884; x_wconf 89 eng ltr not   ocrx_word word_1_161 bbox 837 866 881 884; x_wconf 90 eng ltr have   ocrx_word word_1_162 bbox 888 866 984 884; x_wconf 88 eng ltr traditional   ocrx_word word_1_163 bbox 993 866 1038 884; x_wconf 89 eng ltr bank

       ocr_line line_1_15 bbox 145 921 975 944; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_164 bbox 145 923 232 939; x_wconf 80 eng ltr accounts.   ocrx_word word_1_165 bbox 247 922 300 939; x_wconf 86 eng ltr some   ocrx_word word_1_166 bbox 308 922 366 939; x_wconf 86 eng ltr MSBs   ocrx_word word_1_167 bbox 374 921 443 939; x_wconf 88 eng ltr include   ocrx_word word_1_168 bbox 451 921 501 944; x_wconf 88 eng ltr large,   ocrx_word word_1_169 bbox 510 921 588 944; x_wconf 90 eng ltr globally   ocrx_word word_1_170 bbox 595 921 651 939; x_wconf 87 eng ltr active   ocrx_word word_1_171 bbox 658 921 759 944; x_wconf 86 eng ltr companies   ocrx_word word_1_172 bbox 766 921 818 939; x_wconf 94 eng ltr while   ocrx_word word_1_173 bbox 826 921 883 939; x_wconf 88 eng ltr others   ocrx_word word_1_174 bbox 891 925 918 939; x_wconf 92 eng ltr are   ocrx_word word_1_175 bbox 926 921 975 939; x_wconf 93 eng ltr small

       ocr_line line_1_16 bbox 145 976 1057 999; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_176 bbox 145 976 245 994; x_wconf 88 eng ltr businesses   ocrx_word word_1_177 bbox 252 976 294 994; x_wconf 89 eng ltr such   ocrx_word word_1_178 bbox 302 981 320 994; x_wconf 88 eng ltr as   ocrx_word word_1_179 bbox 328 981 358 999; x_wconf 92 eng ltr gas   ocrx_word word_1_180 bbox 366 976 438 994; x_wconf 89 eng ltr stations   ocrx_word word_1_181 bbox 445 976 478 994; x_wconf 91 eng ltr and   ocrx_word word_1_182 bbox 486 976 604 994; x_wconf 91 eng ltr convenience   ocrx_word word_1_183 bbox 612 978 666 994; x_wconf 86 eng ltr stores   ocrx_word word_1_184 bbox 674 976 749 999; x_wconf 88 eng ltr offering   ocrx_word word_1_185 bbox 757 976 838 994; x_wconf 88 eng ltr financial   ocrx_word word_1_186 bbox 848 976 928 999; x_wconf 89 eng ltr products   ocrx_word word_1_187 bbox 936 976 968 994; x_wconf 92 eng ltr and   ocrx_word word_1_188 bbox 976 976 1057 994; x_wconf 87 eng ltr services.

       ocr_line line_1_17 bbox 146 1031 985 1054; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_189 bbox 146 1032 172 1054; x_wconf 92 eng ltr By   ocrx_word word_1_190 bbox 179 1031 294 1054; x_wconf 74 eng ltr comparison,   ocrx_word word_1_191 bbox 302 1032 366 1049; x_wconf 89 eng ltr TPPPs   ocrx_word word_1_192 bbox 373 1036 401 1049; x_wconf 92 eng ltr are   ocrx_word word_1_193 bbox 409 1031 454 1049; x_wconf 96 eng ltr bank   ocrx_word word_1_194 bbox 461 1033 557 1049; x_wconf 93 eng ltr customers   ocrx_word word_1_195 bbox 564 1031 599 1049; x_wconf 92 eng ltr that   ocrx_word word_1_196 bbox 607 1031 678 1054; x_wconf 91 eng ltr provide   ocrx_word word_1_197 bbox 686 1031 877 1054; x_wconf 91 eng ltr payment-processing   ocrx_word word_1_198 bbox 884 1031 960 1049; x_wconf 94 eng ltr services   ocrx_word word_1_199 bbox 967 1033 985 1049; x_wconf 92 eng ltr to

       ocr_line line_1_18 bbox 145 1087 1009 1104; baseline 0 0; x_size 22.229885; x_descenders 5.2298851; x_ascenders 4  ocrx_word word_1_200 bbox 145 1087 242 1104; x_wconf 91 eng ltr merchants   ocrx_word word_1_201 bbox 249 1087 282 1104; x_wconf 87 eng ltr and   ocrx_word word_1_202 bbox 290 1087 338 1104; x_wconf 90 eng ltr other   ocrx_word word_1_203 bbox 345 1087 413 1104; x_wconf 90 eng ltr entities   ocrx_word word_1_204 bbox 420 1087 463 1104; x_wconf 90 eng ltr such   ocrx_word word_1_205 bbox 471 1091 489 1104; x_wconf 92 eng ltr as   ocrx_word word_1_206 bbox 496 1087 624 1104; x_wconf 91 eng ltr telemarketers   ocrx_word word_1_207 bbox 632 1087 664 1104; x_wconf 89 eng ltr and   ocrx_word word_1_208 bbox 673 1087 731 1104; x_wconf 89 eng ltr online   ocrx_word word_1_209 bbox 739 1087 843 1104; x_wconf 89 eng ltr businesses.   ocrx_word word_1_210 bbox 859 1087 902 1104; x_wconf 90 eng ltr Both   ocrx_word word_1_211 bbox 912 1087 969 1104; x_wconf 85 eng ltr MSBs   ocrx_word word_1_212 bbox 977 1087 1009 1104; x_wconf 90 eng ltr and

       ocr_line line_1_19 bbox 144 1142 1047 1164; baseline 0.001 -5; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_213 bbox 144 1143 208 1160; x_wconf 92 eng ltr TPPPs   ocrx_word word_1_214 bbox 215 1146 281 1164; x_wconf 89 eng ltr engage   ocrx_word word_1_215 bbox 290 1142 305 1159; x_wconf 95 eng ltr in   ocrx_word word_1_216 bbox 313 1142 427 1160; x_wconf 87 eng ltr transactions   ocrx_word word_1_217 bbox 434 1142 475 1160; x_wconf 94 eng ltr with   ocrx_word word_1_218 bbox 484 1142 588 1160; x_wconf 87 eng ltr individuals   ocrx_word word_1_219 bbox 596 1142 628 1160; x_wconf 88 eng ltr and   ocrx_word word_1_220 bbox 636 1142 737 1164; x_wconf 84 eng ltr companies   ocrx_word word_1_221 bbox 744 1142 784 1160; x_wconf 92 eng ltr who   ocrx_word word_1_222 bbox 792 1146 820 1160; x_wconf 90 eng ltr are   ocrx_word word_1_223 bbox 828 1144 857 1160; x_wconf 91 eng ltr not   ocrx_word word_1_224 bbox 864 1142 918 1160; x_wconf 92 eng ltr direct   ocrx_word word_1_225 bbox 925 1144 1020 1160; x_wconf 86 eng ltr customers   ocrx_word word_1_226 bbox 1028 1142 1047 1160; x_wconf 85 eng ltr of

       ocr_line line_1_20 bbox 144 1197 230 1215; baseline 0 0; x_size 23.632183; x_descenders 5.6321836; x_ascenders 4  ocrx_word word_1_227 bbox 144 1197 173 1215; x_wconf 88 eng ltr the   ocrx_word word_1_228 bbox 181 1197 230 1215; x_wconf 83 eng ltr bank,




      ocr_par ltr par_1_5 bbox 216 1252 1039 1275
       ocr_line line_1_21 bbox 216 1252 1039 1275; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_229 bbox 216 1252 252 1270; x_wconf 92 eng ltr The   ocrx_word word_1_230 bbox 261 1252 329 1270; x_wconf 90 eng ltr Federal   ocrx_word word_1_231 bbox 339 1253 413 1270; x_wconf 86 eng ltr Reserve   ocrx_word word_1_232 bbox 421 1252 492 1270; x_wconf 88 eng ltr follows   ocrx_word word_1_233 bbox 499 1252 584 1275; x_wconf 87 eng ltr guidance   ocrx_word word_1_234 bbox 593 1252 649 1270; x_wconf 86 eng ltr issued   ocrx_word word_1_235 bbox 659 1252 674 1270; x_wconf 94 eng ltr in   ocrx_word word_1_236 bbox 683 1253 729 1270; x_wconf 87 eng 2005   ocrx_word word_1_237 bbox 737 1252 760 1275; x_wconf 91 eng ltr by   ocrx_word word_1_238 bbox 766 1252 794 1270; x_wconf 95 eng ltr the   ocrx_word word_1_239 bbox 801 1252 866 1270; x_wconf 92 eng ltr federal   ocrx_word word_1_240 bbox 875 1252 950 1275; x_wconf 91 eng ltr banking   ocrx_word word_1_241 bbox 958 1252 1039 1275; x_wconf 88 eng ltr agencies





     ocr_carea block_1_2 bbox 145 1307 1067 1330
      ocr_par ltr par_1_6 bbox 145 1307 1067 1330
       ocr_line line_1_22 bbox 145 1307 1067 1330; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_242 bbox 145 1307 177 1325; x_wconf 93 eng ltr and   ocrx_word word_1_243 bbox 185 1307 213 1325; x_wconf 94 eng ltr the   ocrx_word word_1_244 bbox 222 1307 307 1325; x_wconf 86 eng ltr Financial   ocrx_word word_1_245 bbox 316 1307 384 1325; x_wconf 87 eng ltr Crimes   ocrx_word word_1_246 bbox 392 1307 514 1325; x_wconf 92 eng ltr Enforcement   ocrx_word word_1_247 bbox 522 1307 604 1325; x_wconf 94 eng ltr Network   ocrx_word word_1_248 bbox 612 1307 705 1330; x_wconf 90 eng ltr (FinCEN)   ocrx_word word_1_249 bbox 714 1307 809 1330; x_wconf 91 eng ltr governing   ocrx_word word_1_250 bbox 817 1309 890 1325; x_wconf 91 eng ltr account   ocrx_word word_1_251 bbox 898 1307 1019 1330; x_wconf 86 eng ltr relationships   ocrx_word word_1_252 bbox 1025 1307 1067 1325; x_wconf 93 eng ltr with










  page
  - 4 -

 MSBs.5  That guidance confirms that banking organizations may provide banking services to

  MSBs that operate lawfully.  The guidance is intended to assist banks in the decision to open and

  maintain accounts for legitimate businesses by identifying the programs and procedures they

  should have in place to perform customer due diligence and monitoring of these customers for

  suspicious activity.

  The Federal Reserve also follows the interagency examination manual and related

  guidance issued by FinCEN when evaluating the procedures banking organizations use to

  manage account relationships with TPPPs.6  These entities often use their commercial bank

  accounts to conduct payment processing for their merchant clients.  The guidance is designed to

  assist banking organizations in designing and implementing policies and systems for monitoring

  and managing the risks associated with the payment and lending products they offer.  The

  objective of the guidance and the Federal Reserve’s supervisory activities is to direct banking

  organizations to take appropriate steps to offer their services to legitimate and law-abiding

  customers, and to minimize the risk of facilitating money laundering, terrorist financing, or other

  illicit activity.

  Examination and Enforcement Process

  In 1986, Congress included in the Money Laundering Control Act the requirement that

  the Federal Reserve and other federal banking agencies examine the AML program and

  procedures banking organizations use to assure compliance with the BSA and report problems

  5  See Financial Crimes Enforcement Network, the Board of Governors of the Federal Reserve System, the Federal
 Deposit Insurance Corporation, the National Credit Union Administration, the Office of the Comptroller of the
 Currency, and the Office of Thrift Supervision (2005), “Interagency Interpretive Guidance on Providing Banking
 Services to Money Services Businesses Operating in the United States” (April 26).
 6  See infra note 4 at pp. 239-242.  See also Financial Crimes Enforcement Network (2012) “Risk Associated with
 Third-Party Payment Processors” (October 22).



  ocr







    ocr_page page_1 image "/tmp/apache-tika-8978138986357070234.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 144 149 1074 1164
      ocr_par ltr par_1_1 bbox 145 149 1074 447
       ocr_line line_1_1 bbox 593 149 631 166; baseline 0 -6; x_size 21.365095; x_descenders 6; x_ascenders 4.3650947  ocrx_word word_1_1 bbox 593 158 599 160; x_wconf 97 eng  _    ocrx_word word_1_2 bbox 606 149 617 166; x_wconf 88 eng 4   ocrx_word word_1_3 bbox 625 158 631 160; x_wconf 65 eng .

       ocr_line line_1_2 bbox 146 201 1037 226; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_4 bbox 146 201 218 221; x_wconf 75 eng ltr MSBs.5   ocrx_word word_1_5 bbox 232 203 275 221; x_wconf 84 eng ltr That   ocrx_word word_1_6 bbox 282 203 367 226; x_wconf 87 eng ltr guidance   ocrx_word word_1_7 bbox 374 203 458 221; x_wconf 80 eng ltr confirms   ocrx_word word_1_8 bbox 465 203 501 221; x_wconf 86 eng ltr that   ocrx_word word_1_9 bbox 508 203 583 226; x_wconf 79 eng ltr banking   ocrx_word word_1_10 bbox 591 203 719 226; x_wconf 81 eng ltr organizations   ocrx_word word_1_11 bbox 727 208 767 226; x_wconf 91 eng ltr may   ocrx_word word_1_12 bbox 774 203 845 226; x_wconf 90 eng ltr provide   ocrx_word word_1_13 bbox 854 203 928 226; x_wconf 83 eng ltr banking   ocrx_word word_1_14 bbox 936 203 1012 221; x_wconf 85 eng ltr services   ocrx_word word_1_15 bbox 1019 205 1037 221; x_wconf 91 eng ltr to

       ocr_line line_1_3 bbox 146 259 1074 281; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_16 bbox 146 259 203 276; x_wconf 84 eng ltr MSBs   ocrx_word word_1_17 bbox 210 259 246 276; x_wconf 88 eng ltr that   ocrx_word word_1_18 bbox 253 260 322 281; x_wconf 90 eng ltr operate   ocrx_word word_1_19 bbox 330 259 413 281; x_wconf 75 eng ltr lawfully   ocrx_word word_1_20 bbox 427 259 463 276; x_wconf 88 eng ltr The   ocrx_word word_1_21 bbox 471 259 556 281; x_wconf 83 eng ltr guidance   ocrx_word word_1_22 bbox 564 259 578 276; x_wconf 87 eng ltr is   ocrx_word word_1_23 bbox 586 259 666 276; x_wconf 88 eng ltr intended   ocrx_word word_1_24 bbox 673 260 691 276; x_wconf 91 eng ltr to   ocrx_word word_1_25 bbox 699 259 750 276; x_wconf 83 eng ltr assist   ocrx_word word_1_26 bbox 757 259 811 276; x_wconf 86 eng ltr banks   ocrx_word word_1_27 bbox 820 259 835 276; x_wconf 93 eng ltr in   ocrx_word word_1_28 bbox 843 259 871 276; x_wconf 89 eng ltr the   ocrx_word word_1_29 bbox 879 259 956 276; x_wconf 85 eng ltr decision   ocrx_word word_1_30 bbox 964 261 982 276; x_wconf 93 eng ltr to   ocrx_word word_1_31 bbox 989 263 1034 281; x_wconf 90 eng ltr open   ocrx_word word_1_32 bbox 1042 259 1074 276; x_wconf 88 eng ltr and

       ocr_line line_1_4 bbox 145 314 1034 336; baseline 0 -4; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_33 bbox 145 314 227 332; x_wconf 75 eng ltr maintain   ocrx_word word_1_34 bbox 235 316 317 332; x_wconf 81 eng ltr accounts   ocrx_word word_1_35 bbox 324 314 351 332; x_wconf 92 eng ltr for   ocrx_word word_1_36 bbox 359 314 453 336; x_wconf 78 eng ltr legitimate   ocrx_word word_1_37 bbox 461 314 561 332; x_wconf 88 eng ltr businesses   ocrx_word word_1_38 bbox 569 314 591 336; x_wconf 88 eng ltr by   ocrx_word word_1_39 bbox 599 314 701 336; x_wconf 82 eng ltr identifying   ocrx_word word_1_40 bbox 709 314 737 332; x_wconf 88 eng ltr the   ocrx_word word_1_41 bbox 745 318 834 336; x_wconf 83 eng ltr programs   ocrx_word word_1_42 bbox 841 314 874 332; x_wconf 91 eng ltr and   ocrx_word word_1_43 bbox 883 314 986 336; x_wconf 84 eng ltr procedures   ocrx_word word_1_44 bbox 993 314 1034 336; x_wconf 83 eng ltr they

       ocr_line line_1_5 bbox 145 369 1048 392; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_45 bbox 145 369 207 387; x_wconf 85 eng ltr should   ocrx_word word_1_46 bbox 215 369 258 387; x_wconf 89 eng ltr have   ocrx_word word_1_47 bbox 267 369 283 387; x_wconf 95 eng ltr in   ocrx_word word_1_48 bbox 291 369 340 392; x_wconf 88 eng ltr place   ocrx_word word_1_49 bbox 347 371 364 387; x_wconf 90 eng ltr to   ocrx_word word_1_50 bbox 372 369 447 392; x_wconf 88 eng ltr perform   ocrx_word word_1_51 bbox 455 371 542 387; x_wconf 87 eng ltr customer   ocrx_word word_1_52 bbox 549 369 582 387; x_wconf 89 eng ltr due   ocrx_word word_1_53 bbox 590 369 676 392; x_wconf 84 eng ltr diligence   ocrx_word word_1_54 bbox 684 369 716 387; x_wconf 88 eng ltr and   ocrx_word word_1_55 bbox 725 369 829 391; x_wconf 80 eng ltr monitoring   ocrx_word word_1_56 bbox 837 369 856 387; x_wconf 92 eng ltr of   ocrx_word word_1_57 bbox 863 369 911 387; x_wconf 88 eng ltr these   ocrx_word word_1_58 bbox 918 371 1014 387; x_wconf 90 eng ltr customers   ocrx_word word_1_59 bbox 1021 369 1048 387; x_wconf 94 eng ltr for

       ocr_line line_1_6 bbox 145 424 326 447; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_60 bbox 145 424 243 447; x_wconf 82 eng ltr suspicious   ocrx_word word_1_61 bbox 251 424 326 447; x_wconf 88 eng ltr activity.




      ocr_par ltr par_1_2 bbox 145 479 1074 999
       ocr_line line_1_7 bbox 216 479 1002 502; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_62 bbox 216 479 252 497; x_wconf 93 eng ltr The   ocrx_word word_1_63 bbox 261 479 329 497; x_wconf 83 eng ltr Federal   ocrx_word word_1_64 bbox 339 480 413 497; x_wconf 91 eng ltr Reserve   ocrx_word word_1_65 bbox 421 479 458 497; x_wconf 93 eng ltr also   ocrx_word word_1_66 bbox 466 479 537 497; x_wconf 87 eng ltr follows   ocrx_word word_1_67 bbox 544 479 572 497; x_wconf 96 eng ltr the   ocrx_word word_1_68 bbox 581 479 691 502; x_wconf 92 eng ltr interagency   ocrx_word word_1_69 bbox 697 479 814 497; x_wconf 84 eng ltr examination   ocrx_word word_1_70 bbox 823 479 890 497; x_wconf 90 eng ltr manual   ocrx_word word_1_71 bbox 899 479 931 497; x_wconf 93 eng ltr and   ocrx_word word_1_72 bbox 940 479 1002 497; x_wconf 83 eng ltr related

       ocr_line line_1_8 bbox 145 535 1004 557; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_73 bbox 145 535 230 557; x_wconf 85 eng ltr guidance   ocrx_word word_1_74 bbox 238 535 295 552; x_wconf 94 eng ltr issued   ocrx_word word_1_75 bbox 304 535 326 557; x_wconf 88 eng ltr by   ocrx_word word_1_76 bbox 334 535 411 552; x_wconf 87 eng ltr FinCEN   ocrx_word word_1_77 bbox 419 535 469 552; x_wconf 94 eng ltr when   ocrx_word word_1_78 bbox 477 535 575 557; x_wconf 89 eng ltr evaluating   ocrx_word word_1_79 bbox 582 535 611 552; x_wconf 93 eng ltr the   ocrx_word word_1_80 bbox 619 535 722 557; x_wconf 88 eng ltr procedures   ocrx_word word_1_81 bbox 730 535 805 557; x_wconf 87 eng ltr banking   ocrx_word word_1_82 bbox 813 535 942 557; x_wconf 87 eng ltr organizations   ocrx_word word_1_83 bbox 950 539 979 552; x_wconf 91 eng ltr use   ocrx_word word_1_84 bbox 986 536 1004 552; x_wconf 92 eng ltr to

       ocr_line line_1_9 bbox 145 587 1021 612; baseline 0 -4; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_85 bbox 145 594 218 612; x_wconf 87 eng ltr manage   ocrx_word word_1_86 bbox 225 592 299 608; x_wconf 84 eng ltr account   ocrx_word word_1_87 bbox 307 590 427 612; x_wconf 80 eng ltr relationships   ocrx_word word_1_88 bbox 434 590 475 608; x_wconf 90 eng ltr with   ocrx_word word_1_89 bbox 483 587 561 608; x_wconf 84 eng ltr TPPPs.6   ocrx_word word_1_90 bbox 574 590 630 608; x_wconf 94 eng ltr These   ocrx_word word_1_91 bbox 638 590 706 608; x_wconf 88 eng ltr entities   ocrx_word word_1_92 bbox 713 590 760 608; x_wconf 87 eng ltr often   ocrx_word word_1_93 bbox 769 594 799 608; x_wconf 92 eng ltr use   ocrx_word word_1_94 bbox 806 590 849 608; x_wconf 94 eng ltr their   ocrx_word word_1_95 bbox 856 590 967 608; x_wconf 89 eng ltr commercial   ocrx_word word_1_96 bbox 976 590 1021 608; x_wconf 88 eng ltr bank

       ocr_line line_1_10 bbox 145 645 1065 668; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_97 bbox 145 647 227 663; x_wconf 83 eng ltr accounts   ocrx_word word_1_98 bbox 234 647 252 663; x_wconf 91 eng ltr to   ocrx_word word_1_99 bbox 259 645 334 663; x_wconf 89 eng ltr conduct   ocrx_word word_1_100 bbox 342 647 423 668; x_wconf 89 eng ltr payment   ocrx_word word_1_101 bbox 431 645 531 668; x_wconf 85 eng ltr processing   ocrx_word word_1_102 bbox 538 645 565 663; x_wconf 94 eng ltr for   ocrx_word word_1_103 bbox 572 645 616 663; x_wconf 92 eng ltr their   ocrx_word word_1_104 bbox 623 645 711 663; x_wconf 88 eng ltr merchant   ocrx_word word_1_105 bbox 718 645 784 663; x_wconf 79 eng ltr clients.   ocrx_word word_1_106 bbox 798 645 834 663; x_wconf 89 eng ltr The   ocrx_word word_1_107 bbox 842 645 927 667; x_wconf 83 eng ltr guidance   ocrx_word word_1_108 bbox 936 645 949 663; x_wconf 88 eng ltr is   ocrx_word word_1_109 bbox 957 645 1040 668; x_wconf 85 eng ltr designed   ocrx_word word_1_110 bbox 1047 647 1065 663; x_wconf 88 eng ltr to

       ocr_line line_1_11 bbox 145 700 1067 723; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_111 bbox 145 700 196 718; x_wconf 89 eng ltr assist   ocrx_word word_1_112 bbox 203 700 278 723; x_wconf 89 eng ltr banking   ocrx_word word_1_113 bbox 286 700 414 723; x_wconf 88 eng ltr organizations   ocrx_word word_1_114 bbox 423 700 438 718; x_wconf 97 eng ltr in   ocrx_word word_1_115 bbox 446 700 537 723; x_wconf 91 eng ltr designing   ocrx_word word_1_116 bbox 545 700 578 718; x_wconf 89 eng ltr and   ocrx_word word_1_117 bbox 587 700 717 723; x_wconf 88 eng ltr implementing   ocrx_word word_1_118 bbox 726 700 798 723; x_wconf 89 eng ltr policies   ocrx_word word_1_119 bbox 806 700 838 718; x_wconf 91 eng ltr and   ocrx_word word_1_120 bbox 846 702 921 723; x_wconf 87 eng ltr systems   ocrx_word word_1_121 bbox 928 700 956 718; x_wconf 94 eng ltr for   ocrx_word word_1_122 bbox 963 700 1067 723; x_wconf 87 eng ltr monitoring

       ocr_line line_1_12 bbox 145 755 1005 778; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_123 bbox 145 755 177 773; x_wconf 93 eng ltr and   ocrx_word word_1_124 bbox 186 755 278 778; x_wconf 86 eng ltr managing   ocrx_word word_1_125 bbox 285 755 314 773; x_wconf 94 eng ltr the   ocrx_word word_1_126 bbox 322 755 365 773; x_wconf 88 eng ltr risks   ocrx_word word_1_127 bbox 372 755 469 773; x_wconf 90 eng ltr associated   ocrx_word word_1_128 bbox 476 755 518 773; x_wconf 95 eng ltr with   ocrx_word word_1_129 bbox 525 755 554 773; x_wconf 94 eng ltr the   ocrx_word word_1_130 bbox 562 757 643 778; x_wconf 90 eng ltr payment   ocrx_word word_1_131 bbox 650 755 682 773; x_wconf 93 eng ltr and   ocrx_word word_1_132 bbox 692 755 760 778; x_wconf 91 eng ltr lending   ocrx_word word_1_133 bbox 769 755 850 778; x_wconf 83 eng ltr products   ocrx_word word_1_134 bbox 857 755 898 778; x_wconf 92 eng ltr they   ocrx_word word_1_135 bbox 904 755 954 773; x_wconf 88 eng ltr offer.   ocrx_word word_1_136 bbox 969 755 1005 773; x_wconf 89 eng ltr The

       ocr_line line_1_13 bbox 145 811 1040 833; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_137 bbox 145 811 231 833; x_wconf 91 eng ltr objective   ocrx_word word_1_138 bbox 239 811 258 828; x_wconf 93 eng ltr of   ocrx_word word_1_139 bbox 264 811 292 828; x_wconf 89 eng ltr the   ocrx_word word_1_140 bbox 300 811 385 833; x_wconf 91 eng ltr guidance   ocrx_word word_1_141 bbox 393 811 425 828; x_wconf 93 eng ltr and   ocrx_word word_1_142 bbox 433 811 461 828; x_wconf 96 eng ltr the   ocrx_word word_1_143 bbox 469 811 538 828; x_wconf 89 eng ltr Federal   ocrx_word word_1_144 bbox 547 811 640 828; x_wconf 87 eng ltr Reserve’s   ocrx_word word_1_145 bbox 647 811 758 833; x_wconf 91 eng ltr supervisory   ocrx_word word_1_146 bbox 765 811 850 828; x_wconf 89 eng ltr activities   ocrx_word word_1_147 bbox 859 811 872 828; x_wconf 91 eng ltr is   ocrx_word word_1_148 bbox 879 812 897 828; x_wconf 93 eng ltr to   ocrx_word word_1_149 bbox 905 811 958 828; x_wconf 91 eng ltr direct   ocrx_word word_1_150 bbox 966 811 1040 833; x_wconf 89 eng ltr banking

       ocr_line line_1_14 bbox 145 866 1010 888; baseline 0 -4; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_151 bbox 145 866 273 888; x_wconf 88 eng ltr organizations   ocrx_word word_1_152 bbox 280 868 297 884; x_wconf 92 eng ltr to   ocrx_word word_1_153 bbox 304 866 343 884; x_wconf 90 eng ltr take   ocrx_word word_1_154 bbox 351 866 458 888; x_wconf 87 eng ltr appropriate   ocrx_word word_1_155 bbox 466 868 512 888; x_wconf 89 eng ltr steps   ocrx_word word_1_156 bbox 519 868 537 884; x_wconf 94 eng ltr to   ocrx_word word_1_157 bbox 545 866 590 884; x_wconf 85 eng ltr offer   ocrx_word word_1_158 bbox 597 866 640 884; x_wconf 89 eng ltr their   ocrx_word word_1_159 bbox 647 866 723 884; x_wconf 85 eng ltr services   ocrx_word word_1_160 bbox 730 868 747 884; x_wconf 90 eng ltr to   ocrx_word word_1_161 bbox 756 866 850 888; x_wconf 90 eng ltr legitimate   ocrx_word word_1_162 bbox 857 866 890 884; x_wconf 88 eng ltr and   ocrx_word word_1_163 bbox 899 866 1010 888; x_wconf 88 eng ltr law-abiding

       ocr_line line_1_15 bbox 145 921 1074 944; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_164 bbox 145 923 245 941; x_wconf 77 eng ltr customers.   ocrx_word word_1_165 bbox 254 921 286 939; x_wconf 88 eng ltr and   ocrx_word word_1_166 bbox 294 923 312 939; x_wconf 91 eng ltr to   ocrx_word word_1_167 bbox 320 921 409 939; x_wconf 93 eng ltr minimize   ocrx_word word_1_168 bbox 416 921 444 939; x_wconf 90 eng ltr the   ocrx_word word_1_169 bbox 452 921 486 939; x_wconf 91 eng ltr risk   ocrx_word word_1_170 bbox 494 921 513 939; x_wconf 94 eng ltr of   ocrx_word word_1_171 bbox 519 921 621 944; x_wconf 88 eng ltr facilitating   ocrx_word word_1_172 bbox 630 925 694 944; x_wconf 93 eng ltr money   ocrx_word word_1_173 bbox 702 921 806 944; x_wconf 77 eng ltr laundering.   ocrx_word word_1_174 bbox 815 921 890 939; x_wconf 89 eng ltr terrorist   ocrx_word word_1_175 bbox 897 921 991 944; x_wconf 75 eng ltr financing.   ocrx_word word_1_176 bbox 1000 925 1018 939; x_wconf 90 eng ltr or   ocrx_word word_1_177 bbox 1026 921 1074 939; x_wconf 88 eng ltr other

       ocr_line line_1_16 bbox 146 976 276 999; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_178 bbox 146 976 195 994; x_wconf 88 eng ltr illicit   ocrx_word word_1_179 bbox 202 976 276 999; x_wconf 87 eng ltr activity.




      ocr_par ltr par_1_3 bbox 146 1032 542 1050
       ocr_line line_1_17 bbox 146 1032 542 1050; baseline 0.003 -1; x_size 22.158749; x_descenders 5.1587486; x_ascenders 4  ocrx_word word_1_180 bbox 146 1032 274 1050; x_wconf 83 eng ltr Examination   ocrx_word word_1_181 bbox 283 1032 319 1050; x_wconf 89 eng ltr and   ocrx_word word_1_182 bbox 329 1032 459 1050; x_wconf 89 eng ltr Enforcement   ocrx_word word_1_183 bbox 468 1033 542 1050; x_wconf 86 eng ltr Process




      ocr_par ltr par_1_4 bbox 219 1087 1050 1109
       ocr_line line_1_18 bbox 219 1087 1050 1109; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_184 bbox 219 1087 234 1104; x_wconf 93 eng ltr In   ocrx_word word_1_185 bbox 243 1087 294 1107; x_wconf 83 eng 1986.   ocrx_word word_1_186 bbox 303 1087 390 1109; x_wconf 85 eng ltr Congress   ocrx_word word_1_187 bbox 399 1087 479 1104; x_wconf 88 eng ltr included   ocrx_word word_1_188 bbox 488 1087 503 1104; x_wconf 93 eng ltr in   ocrx_word word_1_189 bbox 511 1087 539 1104; x_wconf 93 eng ltr the   ocrx_word word_1_190 bbox 548 1087 614 1109; x_wconf 93 eng ltr Money   ocrx_word word_1_191 bbox 622 1087 729 1109; x_wconf 92 eng ltr Laundering   ocrx_word word_1_192 bbox 738 1087 808 1104; x_wconf 87 eng ltr Control   ocrx_word word_1_193 bbox 816 1087 850 1104; x_wconf 93 eng ltr Act   ocrx_word word_1_194 bbox 857 1087 885 1104; x_wconf 94 eng ltr the   ocrx_word word_1_195 bbox 893 1087 1008 1109; x_wconf 87 eng ltr requirement   ocrx_word word_1_196 bbox 1014 1087 1050 1104; x_wconf 90 eng ltr that




      ocr_par ltr par_1_5 bbox 144 1142 984 1164
       ocr_line line_1_19 bbox 144 1142 984 1164; baseline -0.001 -4; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_197 bbox 144 1142 173 1160; x_wconf 90 eng ltr the   ocrx_word word_1_198 bbox 181 1142 249 1160; x_wconf 88 eng ltr Federal   ocrx_word word_1_199 bbox 259 1143 334 1160; x_wconf 89 eng ltr Reserve   ocrx_word word_1_200 bbox 341 1142 374 1160; x_wconf 88 eng ltr and   ocrx_word word_1_201 bbox 382 1142 430 1160; x_wconf 91 eng ltr other   ocrx_word word_1_202 bbox 437 1142 501 1160; x_wconf 88 eng ltr federal   ocrx_word word_1_203 bbox 510 1142 585 1164; x_wconf 90 eng ltr banking   ocrx_word word_1_204 bbox 593 1142 674 1164; x_wconf 90 eng ltr agencies   ocrx_word word_1_205 bbox 682 1142 762 1160; x_wconf 88 eng ltr examine   ocrx_word word_1_206 bbox 769 1142 797 1160; x_wconf 86 eng ltr the   ocrx_word word_1_207 bbox 804 1143 856 1159; x_wconf 93 eng ltr AML   ocrx_word word_1_208 bbox 865 1146 943 1164; x_wconf 89 eng ltr program   ocrx_word word_1_209 bbox 951 1142 984 1160; x_wconf 90 eng ltr and





     ocr_carea block_1_2 bbox 145 1197 1048 1220
      ocr_par ltr par_1_6 bbox 145 1197 1048 1220
       ocr_line line_1_20 bbox 145 1197 1048 1220; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_210 bbox 145 1197 248 1220; x_wconf 84 eng ltr procedures   ocrx_word word_1_211 bbox 256 1197 331 1220; x_wconf 89 eng ltr banking   ocrx_word word_1_212 bbox 339 1197 468 1220; x_wconf 88 eng ltr organizations   ocrx_word word_1_213 bbox 476 1201 505 1215; x_wconf 91 eng ltr use   ocrx_word word_1_214 bbox 512 1199 530 1215; x_wconf 90 eng ltr to   ocrx_word word_1_215 bbox 538 1201 596 1215; x_wconf 87 eng ltr assure   ocrx_word word_1_216 bbox 603 1197 712 1220; x_wconf 89 eng ltr compliance   ocrx_word word_1_217 bbox 719 1197 760 1215; x_wconf 91 eng ltr with   ocrx_word word_1_218 bbox 768 1197 796 1215; x_wconf 92 eng ltr the   ocrx_word word_1_219 bbox 805 1198 849 1215; x_wconf 86 eng ltr BSA   ocrx_word word_1_220 bbox 856 1197 889 1215; x_wconf 89 eng ltr and   ocrx_word word_1_221 bbox 898 1199 953 1220; x_wconf 88 eng ltr report   ocrx_word word_1_222 bbox 961 1197 1048 1220; x_wconf 88 eng ltr problems





     ocr_carea block_1_3 bbox 144 1304 1061 1439
      ocr_par ltr par_1_7 bbox 144 1304 1061 1393
       ocr_line line_1_21 bbox 144 1304 1061 1324; baseline 0 -4; x_size 17; x_descenders 3; x_ascenders 3  ocrx_word word_1_223 bbox 144 1304 150 1313; x_wconf 76 eng 5   ocrx_word word_1_224 bbox 161 1306 189 1320; x_wconf 84 eng ltr See   ocrx_word word_1_225 bbox 196 1306 267 1320; x_wconf 88 eng ltr Financial   ocrx_word word_1_226 bbox 274 1306 331 1320; x_wconf 88 eng ltr Crimes   ocrx_word word_1_227 bbox 338 1306 440 1320; x_wconf 86 eng ltr Enforcement   ocrx_word word_1_228 bbox 446 1306 518 1323; x_wconf 74 eng ltr Network,   ocrx_word word_1_229 bbox 525 1306 548 1320; x_wconf 89 eng ltr the   ocrx_word word_1_230 bbox 556 1306 602 1320; x_wconf 89 eng ltr Board   ocrx_word word_1_231 bbox 609 1306 625 1320; x_wconf 91 eng ltr of   ocrx_word word_1_232 bbox 631 1306 714 1320; x_wconf 86 eng ltr Governors   ocrx_word word_1_233 bbox 720 1306 736 1320; x_wconf 91 eng ltr of   ocrx_word word_1_234 bbox 741 1306 764 1320; x_wconf 89 eng ltr the   ocrx_word word_1_235 bbox 772 1306 829 1320; x_wconf 80 eng ltr Federal   ocrx_word word_1_236 bbox 837 1306 899 1320; x_wconf 80 eng ltr Reserve   ocrx_word word_1_237 bbox 905 1306 967 1324; x_wconf 72 eng ltr System,   ocrx_word word_1_238 bbox 974 1306 997 1320; x_wconf 94 eng ltr the   ocrx_word word_1_239 bbox 1004 1306 1061 1320; x_wconf 87 eng ltr Federal

       ocr_line line_1_22 bbox 145 1329 1030 1347; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_240 bbox 145 1329 206 1347; x_wconf 84 eng ltr Deposrt   ocrx_word word_1_241 bbox 213 1329 288 1343; x_wconf 86 eng ltr Insurance   ocrx_word word_1_242 bbox 295 1329 394 1347; x_wconf 72 eng ltr Corporation,   ocrx_word word_1_243 bbox 401 1329 424 1343; x_wconf 91 eng ltr the   ocrx_word word_1_244 bbox 431 1329 497 1343; x_wconf 83 eng ltr National   ocrx_word word_1_245 bbox 505 1329 554 1343; x_wconf 83 eng ltr Credit   ocrx_word word_1_246 bbox 560 1329 608 1343; x_wconf 83 eng ltr Union   ocrx_word word_1_247 bbox 614 1329 738 1345; x_wconf 77 eng ltr Administration.   ocrx_word word_1_248 bbox 745 1329 768 1343; x_wconf 87 eng ltr the   ocrx_word word_1_249 bbox 775 1329 825 1343; x_wconf 83 eng ltr Office   ocrx_word word_1_250 bbox 831 1329 847 1343; x_wconf 90 eng ltr of   ocrx_word word_1_251 bbox 852 1329 876 1343; x_wconf 87 eng ltr the   ocrx_word word_1_252 bbox 882 1329 979 1347; x_wconf 87 eng ltr Comptroller   ocrx_word word_1_253 bbox 985 1329 1001 1343; x_wconf 95 eng ltr of   ocrx_word word_1_254 bbox 1006 1329 1030 1343; x_wconf 87 eng ltr the

       ocr_line line_1_23 bbox 145 1352 1048 1370; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_255 bbox 145 1352 222 1370; x_wconf 74 eng ltr Currency,   ocrx_word word_1_256 bbox 229 1352 256 1366; x_wconf 89 eng ltr and   ocrx_word word_1_257 bbox 262 1352 286 1366; x_wconf 87 eng ltr the   ocrx_word word_1_258 bbox 292 1352 342 1366; x_wconf 83 eng ltr Office   ocrx_word word_1_259 bbox 348 1352 364 1366; x_wconf 91 eng ltr of   ocrx_word word_1_260 bbox 370 1352 416 1366; x_wconf 83 eng ltr Thrift   ocrx_word word_1_261 bbox 422 1352 515 1370; x_wconf 84 eng ltr Supervrsion   ocrx_word word_1_262 bbox 523 1352 578 1370; x_wconf 67 eng (2005).   ocrx_word word_1_263 bbox 586 1352 688 1370; x_wconf 82 eng ltr “lnteragency   ocrx_word word_1_264 bbox 695 1352 785 1370; x_wconf 83 eng ltr Interpretive   ocrx_word word_1_265 bbox 792 1352 867 1366; x_wconf 88 eng ltr Guidance   ocrx_word word_1_266 bbox 874 1355 892 1366; x_wconf 93 eng ltr on   ocrx_word word_1_267 bbox 899 1352 976 1370; x_wconf 75 eng ltr Provrdrng   ocrx_word word_1_268 bbox 983 1352 1048 1370; x_wconf 83 eng ltr Banking

       ocr_line line_1_24 bbox 145 1375 800 1393; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_269 bbox 145 1375 211 1389; x_wconf 84 eng ltr Services   ocrx_word word_1_270 bbox 217 1377 231 1389; x_wconf 92 eng ltr to   ocrx_word word_1_271 bbox 239 1375 294 1393; x_wconf 86 eng ltr Money   ocrx_word word_1_272 bbox 300 1375 366 1389; x_wconf 87 eng ltr Services   ocrx_word word_1_273 bbox 373 1375 459 1389; x_wconf 81 eng ltr Businesses   ocrx_word word_1_274 bbox 465 1375 543 1393; x_wconf 81 eng ltr Operating   ocrx_word word_1_275 bbox 551 1375 564 1389; x_wconf 97 eng ltr in   ocrx_word word_1_276 bbox 570 1375 594 1389; x_wconf 87 eng ltr the   ocrx_word word_1_277 bbox 601 1375 653 1389; x_wconf 86 eng ltr United   ocrx_word word_1_278 bbox 660 1375 714 1389; x_wconf 82 eng ltr States"   ocrx_word word_1_279 bbox 722 1375 768 1393; x_wconf 90 eng ltr (April   ocrx_word word_1_280 bbox 775 1375 800 1393; x_wconf 85 eng 26)




      ocr_par ltr par_1_8 bbox 144 1396 1056 1439
       ocr_line line_1_25 bbox 144 1396 1056 1416; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_281 bbox 144 1396 150 1405; x_wconf 60 eng  5    ocrx_word word_1_282 bbox 161 1398 189 1412; x_wconf 85 eng ltr See   ocrx_word word_1_283 bbox 196 1397 233 1412; x_wconf 78 eng ltr infra   ocrx_word word_1_284 bbox 239 1399 272 1412; x_wconf 89 eng ltr note   ocrx_word word_1_285 bbox 278 1398 287 1412; x_wconf 76 eng 4   ocrx_word word_1_286 bbox 293 1399 307 1412; x_wconf 97 eng ltr at   ocrx_word word_1_287 bbox 313 1401 336 1416; x_wconf 89 eng ltr pp.   ocrx_word word_1_288 bbox 343 1398 412 1412; x_wconf 78 eng 239-242.   ocrx_word word_1_289 bbox 425 1398 452 1412; x_wconf 85 eng ltr See   ocrx_word word_1_290 bbox 458 1397 489 1412; x_wconf 88 eng ltr also   ocrx_word word_1_291 bbox 496 1397 567 1412; x_wconf 87 eng ltr Financial   ocrx_word word_1_292 bbox 575 1397 631 1412; x_wconf 89 eng ltr Crimes   ocrx_word word_1_293 bbox 639 1398 740 1412; x_wconf 89 eng ltr Enforcement   ocrx_word word_1_294 bbox 747 1397 815 1412; x_wconf 90 eng ltr Network   ocrx_word word_1_295 bbox 821 1397 873 1416; x_wconf 80 eng (2012)   ocrx_word word_1_296 bbox 880 1397 924 1412; x_wconf 80 eng ltr “Risk   ocrx_word word_1_297 bbox 930 1397 1016 1412; x_wconf 86 eng ltr Associated   ocrx_word word_1_298 bbox 1023 1397 1056 1412; x_wconf 84 eng ltr with

       ocr_line line_1_26 bbox 144 1421 523 1439; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_299 bbox 144 1421 237 1439; x_wconf 86 eng ltr Third-Party   ocrx_word word_1_300 bbox 243 1421 312 1439; x_wconf 89 eng ltr Payment   ocrx_word word_1_301 bbox 318 1421 411 1435; x_wconf 85 eng ltr Processors”   ocrx_word word_1_302 bbox 418 1421 488 1439; x_wconf 83 eng ltr (October   ocrx_word word_1_303 bbox 494 1421 523 1439; x_wconf 85 eng 22).










  page
  - 5 -

 with a bank’s procedures to management.  Under the Money Laundering Control Act, the federal

  banking agencies are required to take formal, public action against a financial institution that

  fails to establish and maintain the required program or correct problems with the program that

  were previously reported to the institution by the supervisors.

  Consistent with this mandate, the Federal Reserve generally conducts regular on-site

  examinations of each bank it is charged with supervising on an alternating basis with state

  banking supervisors.  As part of these examinations, examiners review the institution’s AML

  procedures and its compliance with the BSA.  For large, complex banking organizations, the

  safety and soundness examination process is continuous, and anti-money-laundering and BSA

  compliance is incorporated into the examination process.

  When we find that a bank has not adopted a program and procedures that properly meet

  the bank’s BSA obligations, the matter is discussed with bank management and noted in the

  institution’s report of examination.  The Federal Reserve’s enforcement actions under the BSA

  typically are aimed at correcting deficiencies in an organization’s policies and procedures for

  monitoring account activities and identifying unlawful or suspicious transactions.

  Recent Justice Department Initiative

  Finally, regarding the focus of this hearing, Operation Choke Point is an initiative of the

  Department of Justice and not an initiative of the Federal Reserve.  The Department of Justice

  has the sole authority to indict or seek criminal fines or other sanctions and to criminally

  prosecute individuals and businesses for their actions.  As we have testified previously, the

  Federal Reserve cooperates with other agencies in various enforcement actions, including by

  ocr







    ocr_page page_1 image "/tmp/apache-tika-1165268380699774723.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 144 149 1073 1275
      ocr_par ltr par_1_1 bbox 144 149 1073 392
       ocr_line line_1_1 bbox 593 149 631 166; baseline 0 -6; x_size 14.137543; x_descenders 3.1375422; x_ascenders 3.1375422  ocrx_word word_1_1 bbox 593 158 599 160; x_wconf 96 eng _   ocrx_word word_1_2 bbox 607 149 617 166; x_wconf 82 eng 5   ocrx_word word_1_3 bbox 625 158 631 160; x_wconf 61 eng .

       ocr_line line_1_2 bbox 144 203 1073 226; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_4 bbox 144 203 185 221; x_wconf 89 eng ltr with   ocrx_word word_1_5 bbox 193 208 203 221; x_wconf 98 eng ltr a   ocrx_word word_1_6 bbox 211 203 272 221; x_wconf 87 eng ltr bank’s   ocrx_word word_1_7 bbox 280 203 384 226; x_wconf 85 eng ltr procedures   ocrx_word word_1_8 bbox 391 205 409 221; x_wconf 91 eng ltr to   ocrx_word word_1_9 bbox 417 205 542 226; x_wconf 81 eng ltr management.   ocrx_word word_1_10 bbox 558 203 616 221; x_wconf 86 eng ltr Under   ocrx_word word_1_11 bbox 622 203 650 221; x_wconf 92 eng ltr the   ocrx_word word_1_12 bbox 659 204 725 226; x_wconf 90 eng ltr Money   ocrx_word word_1_13 bbox 733 203 840 226; x_wconf 88 eng ltr Laundering   ocrx_word word_1_14 bbox 849 203 919 221; x_wconf 86 eng ltr Control   ocrx_word word_1_15 bbox 927 204 966 224; x_wconf 74 eng ltr Act,   ocrx_word word_1_16 bbox 974 203 1002 221; x_wconf 86 eng ltr the   ocrx_word word_1_17 bbox 1009 203 1073 221; x_wconf 82 eng ltr federal

       ocr_line line_1_3 bbox 145 259 1034 281; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_18 bbox 145 259 220 281; x_wconf 84 eng ltr banking   ocrx_word word_1_19 bbox 228 259 309 281; x_wconf 83 eng ltr agencies   ocrx_word word_1_20 bbox 317 263 344 276; x_wconf 92 eng ltr are   ocrx_word word_1_21 bbox 353 259 430 281; x_wconf 89 eng ltr required   ocrx_word word_1_22 bbox 437 260 455 276; x_wconf 90 eng ltr to   ocrx_word word_1_23 bbox 462 259 501 276; x_wconf 90 eng ltr take   ocrx_word word_1_24 bbox 508 259 576 279; x_wconf 83 eng ltr formal.   ocrx_word word_1_25 bbox 585 259 643 281; x_wconf 83 eng ltr public   ocrx_word word_1_26 bbox 650 259 707 276; x_wconf 80 eng ltr action   ocrx_word word_1_27 bbox 715 259 782 281; x_wconf 82 eng ltr against   ocrx_word word_1_28 bbox 789 263 799 276; x_wconf 90 eng ltr a   ocrx_word word_1_29 bbox 805 259 887 276; x_wconf 88 eng ltr financial   ocrx_word word_1_30 bbox 897 259 991 276; x_wconf 85 eng ltr institution   ocrx_word word_1_31 bbox 999 259 1034 276; x_wconf 87 eng ltr that

       ocr_line line_1_4 bbox 144 314 1046 336; baseline 0 -4; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_32 bbox 144 314 185 332; x_wconf 90 eng ltr fails   ocrx_word word_1_33 bbox 192 316 209 332; x_wconf 95 eng ltr to   ocrx_word word_1_34 bbox 217 314 299 332; x_wconf 78 eng ltr establish   ocrx_word word_1_35 bbox 307 314 339 332; x_wconf 90 eng ltr and   ocrx_word word_1_36 bbox 348 314 429 332; x_wconf 78 eng ltr maintain   ocrx_word word_1_37 bbox 437 314 465 332; x_wconf 88 eng ltr the   ocrx_word word_1_38 bbox 473 314 550 336; x_wconf 84 eng ltr required   ocrx_word word_1_39 bbox 559 318 638 336; x_wconf 85 eng ltr program   ocrx_word word_1_40 bbox 646 318 665 332; x_wconf 88 eng ltr or   ocrx_word word_1_41 bbox 672 316 737 332; x_wconf 86 eng ltr correct   ocrx_word word_1_42 bbox 745 314 832 336; x_wconf 80 eng ltr problems   ocrx_word word_1_43 bbox 839 314 880 332; x_wconf 95 eng ltr with   ocrx_word word_1_44 bbox 888 314 916 332; x_wconf 88 eng ltr the   ocrx_word word_1_45 bbox 924 318 1003 336; x_wconf 84 eng ltr program   ocrx_word word_1_46 bbox 1010 314 1046 332; x_wconf 91 eng ltr that

       ocr_line line_1_5 bbox 144 369 732 392; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_47 bbox 144 373 190 387; x_wconf 87 eng ltr were   ocrx_word word_1_48 bbox 198 369 298 392; x_wconf 88 eng ltr previously   ocrx_word word_1_49 bbox 305 369 382 392; x_wconf 87 eng ltr reported   ocrx_word word_1_50 bbox 390 371 408 387; x_wconf 93 eng ltr to   ocrx_word word_1_51 bbox 415 369 443 387; x_wconf 89 eng ltr the   ocrx_word word_1_52 bbox 452 369 546 387; x_wconf 85 eng ltr institution   ocrx_word word_1_53 bbox 555 369 578 391; x_wconf 88 eng ltr by   ocrx_word word_1_54 bbox 583 369 612 387; x_wconf 93 eng ltr the   ocrx_word word_1_55 bbox 619 369 732 392; x_wconf 87 eng ltr supervisors.




      ocr_par ltr par_1_2 bbox 145 424 1048 723
       ocr_line line_1_6 bbox 217 424 1028 447; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_56 bbox 217 424 317 442; x_wconf 88 eng ltr Consistent   ocrx_word word_1_57 bbox 324 424 365 442; x_wconf 92 eng ltr with   ocrx_word word_1_58 bbox 372 424 406 442; x_wconf 85 eng ltr this   ocrx_word word_1_59 bbox 414 424 498 445; x_wconf 74 eng ltr mandate,   ocrx_word word_1_60 bbox 506 424 534 442; x_wconf 92 eng ltr the   ocrx_word word_1_61 bbox 543 424 611 442; x_wconf 87 eng ltr Federal   ocrx_word word_1_62 bbox 621 425 696 442; x_wconf 86 eng ltr Reserve   ocrx_word word_1_63 bbox 704 424 792 447; x_wconf 85 eng ltr generally   ocrx_word word_1_64 bbox 799 424 882 442; x_wconf 84 eng ltr conducts   ocrx_word word_1_65 bbox 891 424 957 447; x_wconf 86 eng ltr regular   ocrx_word word_1_66 bbox 964 424 1028 442; x_wconf 89 eng ltr on-site

       ocr_line line_1_7 bbox 145 479 1008 502; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_67 bbox 145 479 271 497; x_wconf 87 eng ltr examinations   ocrx_word word_1_68 bbox 279 479 298 497; x_wconf 92 eng ltr of   ocrx_word word_1_69 bbox 305 479 346 497; x_wconf 89 eng ltr each   ocrx_word word_1_70 bbox 355 479 400 497; x_wconf 86 eng ltr bank   ocrx_word word_1_71 bbox 408 479 420 497; x_wconf 92 eng ltr it   ocrx_word word_1_72 bbox 428 479 441 497; x_wconf 91 eng ltr is   ocrx_word word_1_73 bbox 449 479 522 502; x_wconf 87 eng ltr charged   ocrx_word word_1_74 bbox 530 479 571 497; x_wconf 96 eng ltr with   ocrx_word word_1_75 bbox 579 479 688 502; x_wconf 90 eng ltr supervising   ocrx_word word_1_76 bbox 696 484 718 497; x_wconf 98 eng ltr on   ocrx_word word_1_77 bbox 726 484 746 497; x_wconf 93 eng ltr an   ocrx_word word_1_78 bbox 754 479 855 502; x_wconf 91 eng ltr alternating   ocrx_word word_1_79 bbox 864 479 910 497; x_wconf 90 eng ltr basis   ocrx_word word_1_80 bbox 917 479 958 497; x_wconf 90 eng ltr with   ocrx_word word_1_81 bbox 966 481 1008 497; x_wconf 86 eng ltr state

       ocr_line line_1_8 bbox 145 535 1037 557; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_82 bbox 145 535 220 557; x_wconf 87 eng ltr banking   ocrx_word word_1_83 bbox 228 535 341 557; x_wconf 81 eng ltr supervisors   ocrx_word word_1_84 bbox 355 535 380 552; x_wconf 93 eng ltr As   ocrx_word word_1_85 bbox 389 537 424 557; x_wconf 86 eng ltr part   ocrx_word word_1_86 bbox 431 535 451 552; x_wconf 95 eng ltr of   ocrx_word word_1_87 bbox 457 535 505 552; x_wconf 88 eng ltr these   ocrx_word word_1_88 bbox 513 535 644 555; x_wconf 82 eng ltr examinations,   ocrx_word word_1_89 bbox 653 535 750 552; x_wconf 82 eng ltr examiners   ocrx_word word_1_90 bbox 758 535 822 552; x_wconf 88 eng ltr review   ocrx_word word_1_91 bbox 828 535 856 552; x_wconf 93 eng ltr the   ocrx_word word_1_92 bbox 865 535 978 552; x_wconf 86 eng ltr institution’s   ocrx_word word_1_93 bbox 984 535 1037 552; x_wconf 90 eng ltr AML

       ocr_line line_1_9 bbox 145 590 1031 612; baseline -0.001 -4; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_94 bbox 145 590 248 612; x_wconf 84 eng ltr procedures   ocrx_word word_1_95 bbox 256 590 288 608; x_wconf 91 eng ltr and   ocrx_word word_1_96 bbox 298 590 318 608; x_wconf 95 eng ltr its   ocrx_word word_1_97 bbox 325 590 434 612; x_wconf 87 eng ltr compliance   ocrx_word word_1_98 bbox 441 590 482 608; x_wconf 95 eng ltr with   ocrx_word word_1_99 bbox 490 590 518 608; x_wconf 89 eng ltr the   ocrx_word word_1_100 bbox 527 590 576 608; x_wconf 83 eng ltr BSA.   ocrx_word word_1_101 bbox 592 591 623 608; x_wconf 89 eng ltr For   ocrx_word word_1_102 bbox 631 590 681 612; x_wconf 83 eng ltr large,   ocrx_word word_1_103 bbox 690 590 771 612; x_wconf 87 eng ltr complex   ocrx_word word_1_104 bbox 779 590 854 612; x_wconf 88 eng ltr banking   ocrx_word word_1_105 bbox 862 590 995 612; x_wconf 74 eng ltr organizations,   ocrx_word word_1_106 bbox 1003 590 1031 608; x_wconf 94 eng ltr the

       ocr_line line_1_10 bbox 145 645 1048 668; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_107 bbox 145 645 201 668; x_wconf 87 eng ltr safety   ocrx_word word_1_108 bbox 208 645 240 663; x_wconf 84 eng ltr and   ocrx_word word_1_109 bbox 248 645 346 663; x_wconf 83 eng ltr soundness   ocrx_word word_1_110 bbox 353 645 470 663; x_wconf 83 eng ltr examination   ocrx_word word_1_111 bbox 479 649 548 668; x_wconf 88 eng ltr process   ocrx_word word_1_112 bbox 557 645 570 663; x_wconf 90 eng ltr is   ocrx_word word_1_113 bbox 578 645 687 666; x_wconf 75 eng ltr continuous.   ocrx_word word_1_114 bbox 695 645 728 663; x_wconf 91 eng ltr and   ocrx_word word_1_115 bbox 736 645 954 668; x_wconf 81 eng ltr anti-money-laundering   ocrx_word word_1_116 bbox 962 645 994 663; x_wconf 83 eng ltr and   ocrx_word word_1_117 bbox 1004 646 1048 663; x_wconf 85 eng ltr BSA

       ocr_line line_1_11 bbox 145 700 689 723; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_118 bbox 145 700 254 723; x_wconf 89 eng ltr compliance   ocrx_word word_1_119 bbox 262 700 276 718; x_wconf 91 eng ltr is   ocrx_word word_1_120 bbox 284 700 402 723; x_wconf 88 eng ltr incorporated   ocrx_word word_1_121 bbox 412 700 446 718; x_wconf 94 eng ltr into   ocrx_word word_1_122 bbox 454 700 482 718; x_wconf 90 eng ltr the   ocrx_word word_1_123 bbox 489 700 606 718; x_wconf 82 eng ltr examination   ocrx_word word_1_124 bbox 615 705 689 723; x_wconf 90 eng ltr process.




      ocr_par ltr par_1_3 bbox 144 755 1057 999
       ocr_line line_1_12 bbox 216 755 1057 778; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_125 bbox 216 755 272 773; x_wconf 90 eng ltr When   ocrx_word word_1_126 bbox 279 760 306 773; x_wconf 95 eng ltr we   ocrx_word word_1_127 bbox 313 755 350 773; x_wconf 84 eng ltr find   ocrx_word word_1_128 bbox 358 755 393 773; x_wconf 89 eng ltr that   ocrx_word word_1_129 bbox 401 760 410 773; x_wconf 85 eng ltr a   ocrx_word word_1_130 bbox 418 755 463 773; x_wconf 91 eng ltr bank   ocrx_word word_1_131 bbox 471 755 500 773; x_wconf 89 eng ltr has   ocrx_word word_1_132 bbox 508 757 537 773; x_wconf 89 eng ltr not   ocrx_word word_1_133 bbox 545 755 618 778; x_wconf 85 eng ltr adopted   ocrx_word word_1_134 bbox 626 760 636 773; x_wconf 98 eng ltr a   ocrx_word word_1_135 bbox 644 760 722 778; x_wconf 91 eng ltr program   ocrx_word word_1_136 bbox 731 755 763 773; x_wconf 85 eng ltr and   ocrx_word word_1_137 bbox 772 755 875 778; x_wconf 89 eng ltr procedures   ocrx_word word_1_138 bbox 882 755 917 773; x_wconf 90 eng ltr that   ocrx_word word_1_139 bbox 925 755 1005 778; x_wconf 93 eng ltr properly   ocrx_word word_1_140 bbox 1012 757 1057 773; x_wconf 90 eng ltr meet

       ocr_line line_1_13 bbox 144 811 1026 833; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_141 bbox 144 811 173 828; x_wconf 90 eng ltr the   ocrx_word word_1_142 bbox 181 811 242 828; x_wconf 90 eng ltr bank's   ocrx_word word_1_143 bbox 251 811 296 828; x_wconf 84 eng ltr BSA   ocrx_word word_1_144 bbox 303 811 413 833; x_wconf 83 eng ltr obligations.   ocrx_word word_1_145 bbox 421 811 449 828; x_wconf 93 eng ltr the   ocrx_word word_1_146 bbox 457 812 517 828; x_wconf 86 eng ltr matter   ocrx_word word_1_147 bbox 525 811 539 828; x_wconf 92 eng ltr is   ocrx_word word_1_148 bbox 546 811 636 828; x_wconf 86 eng ltr discussed   ocrx_word word_1_149 bbox 644 811 685 828; x_wconf 92 eng ltr with   ocrx_word word_1_150 bbox 693 811 738 828; x_wconf 90 eng ltr bank   ocrx_word word_1_151 bbox 746 812 867 833; x_wconf 89 eng ltr management   ocrx_word word_1_152 bbox 874 811 906 828; x_wconf 89 eng ltr and   ocrx_word word_1_153 bbox 915 811 966 828; x_wconf 91 eng ltr noted   ocrx_word word_1_154 bbox 975 811 991 828; x_wconf 94 eng ltr in   ocrx_word word_1_155 bbox 998 811 1026 828; x_wconf 94 eng ltr the

       ocr_line line_1_14 bbox 146 866 1055 888; baseline 0 -4; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_156 bbox 146 866 258 884; x_wconf 88 eng ltr institution‘s   ocrx_word word_1_157 bbox 266 868 322 888; x_wconf 89 eng ltr report   ocrx_word word_1_158 bbox 329 866 348 884; x_wconf 91 eng ltr of   ocrx_word word_1_159 bbox 355 866 477 884; x_wconf 87 eng ltr examination.   ocrx_word word_1_160 bbox 491 866 527 884; x_wconf 94 eng ltr The   ocrx_word word_1_161 bbox 536 866 604 884; x_wconf 89 eng ltr Federal   ocrx_word word_1_162 bbox 613 867 706 884; x_wconf 84 eng ltr Reserve’s   ocrx_word word_1_163 bbox 713 866 832 884; x_wconf 88 eng ltr enforcement   ocrx_word word_1_164 bbox 839 866 906 884; x_wconf 86 eng ltr actions   ocrx_word word_1_165 bbox 914 866 967 884; x_wconf 88 eng ltr under   ocrx_word word_1_166 bbox 973 866 1002 884; x_wconf 94 eng ltr the   ocrx_word word_1_167 bbox 1011 866 1055 884; x_wconf 89 eng ltr BSA

       ocr_line line_1_15 bbox 144 921 1038 944; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_168 bbox 144 921 228 944; x_wconf 89 eng ltr typically   ocrx_word word_1_169 bbox 234 925 262 939; x_wconf 91 eng ltr are   ocrx_word word_1_170 bbox 270 921 326 939; x_wconf 84 eng ltr aimed   ocrx_word word_1_171 bbox 335 923 351 939; x_wconf 93 eng ltr at   ocrx_word word_1_172 bbox 358 921 453 943; x_wconf 88 eng ltr correcting   ocrx_word word_1_173 bbox 461 921 574 939; x_wconf 86 eng ltr deficiencies   ocrx_word word_1_174 bbox 583 921 598 939; x_wconf 96 eng ltr in   ocrx_word word_1_175 bbox 606 925 627 939; x_wconf 91 eng ltr an   ocrx_word word_1_176 bbox 635 921 771 943; x_wconf 83 eng ltr organization’s   ocrx_word word_1_177 bbox 779 921 852 944; x_wconf 86 eng ltr policies   ocrx_word word_1_178 bbox 859 921 892 939; x_wconf 83 eng ltr and   ocrx_word word_1_179 bbox 900 921 1003 944; x_wconf 85 eng ltr procedures   ocrx_word word_1_180 bbox 1010 921 1038 939; x_wconf 90 eng ltr for

       ocr_line line_1_16 bbox 145 976 924 999; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_181 bbox 145 976 249 999; x_wconf 89 eng ltr monitoring   ocrx_word word_1_182 bbox 257 978 331 994; x_wconf 88 eng ltr account   ocrx_word word_1_183 bbox 338 976 423 994; x_wconf 86 eng ltr activities   ocrx_word word_1_184 bbox 431 976 463 994; x_wconf 90 eng ltr and   ocrx_word word_1_185 bbox 473 976 575 999; x_wconf 84 eng ltr identifying   ocrx_word word_1_186 bbox 583 976 665 994; x_wconf 90 eng ltr unlawful   ocrx_word word_1_187 bbox 674 981 693 994; x_wconf 90 eng ltr or   ocrx_word word_1_188 bbox 700 976 798 999; x_wconf 87 eng ltr suspicious   ocrx_word word_1_189 bbox 805 976 924 994; x_wconf 86 eng ltr transactions.




      ocr_par ltr par_1_4 bbox 146 1032 520 1054
       ocr_line line_1_17 bbox 146 1032 520 1054; baseline -0.003 -4; x_size 24.782608; x_descenders 5.5; x_ascenders 5.5  ocrx_word word_1_190 bbox 146 1033 214 1050; x_wconf 88 eng ltr Recent   ocrx_word word_1_191 bbox 221 1032 290 1050; x_wconf 86 eng ltr Justice   ocrx_word word_1_192 bbox 299 1033 421 1054; x_wconf 87 eng ltr Department   ocrx_word word_1_193 bbox 430 1032 520 1050; x_wconf 88 eng ltr Initiative




      ocr_par ltr par_1_5 bbox 145 1087 1062 1275
       ocr_line line_1_18 bbox 218 1087 1062 1109; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_194 bbox 218 1087 288 1109; x_wconf 83 eng ltr Finally.   ocrx_word word_1_195 bbox 297 1087 387 1109; x_wconf 89 eng ltr regarding   ocrx_word word_1_196 bbox 394 1087 422 1104; x_wconf 94 eng ltr the   ocrx_word word_1_197 bbox 429 1087 480 1104; x_wconf 88 eng ltr focus   ocrx_word word_1_198 bbox 488 1087 507 1104; x_wconf 90 eng ltr of   ocrx_word word_1_199 bbox 513 1087 547 1104; x_wconf 89 eng ltr this   ocrx_word word_1_200 bbox 555 1087 630 1109; x_wconf 84 eng ltr hearing.   ocrx_word word_1_201 bbox 639 1087 733 1109; x_wconf 87 eng ltr Operation   ocrx_word word_1_202 bbox 741 1087 802 1104; x_wconf 87 eng ltr Choke   ocrx_word word_1_203 bbox 810 1087 859 1104; x_wconf 90 eng ltr Point   ocrx_word word_1_204 bbox 867 1087 881 1104; x_wconf 91 eng ltr is   ocrx_word word_1_205 bbox 888 1091 909 1104; x_wconf 93 eng ltr an   ocrx_word word_1_206 bbox 918 1087 1001 1104; x_wconf 92 eng ltr initiative   ocrx_word word_1_207 bbox 1008 1087 1027 1104; x_wconf 92 eng ltr of   ocrx_word word_1_208 bbox 1033 1087 1062 1104; x_wconf 89 eng ltr the

       ocr_line line_1_19 bbox 146 1142 1046 1164; baseline 0 -4; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_209 bbox 146 1143 257 1164; x_wconf 89 eng ltr Department   ocrx_word word_1_210 bbox 264 1142 283 1160; x_wconf 94 eng ltr of   ocrx_word word_1_211 bbox 289 1142 354 1160; x_wconf 85 eng ltr Justice   ocrx_word word_1_212 bbox 361 1142 394 1160; x_wconf 93 eng ltr and   ocrx_word word_1_213 bbox 403 1144 432 1160; x_wconf 90 eng ltr not   ocrx_word word_1_214 bbox 439 1146 459 1160; x_wconf 90 eng ltr an   ocrx_word word_1_215 bbox 468 1142 551 1160; x_wconf 91 eng ltr initiative   ocrx_word word_1_216 bbox 559 1142 578 1160; x_wconf 95 eng ltr of   ocrx_word word_1_217 bbox 584 1142 612 1160; x_wconf 94 eng ltr the   ocrx_word word_1_218 bbox 621 1142 689 1160; x_wconf 88 eng ltr Federal   ocrx_word word_1_219 bbox 699 1143 778 1160; x_wconf 88 eng ltr Reserve.   ocrx_word word_1_220 bbox 793 1142 829 1160; x_wconf 95 eng ltr The   ocrx_word word_1_221 bbox 838 1143 949 1164; x_wconf 92 eng ltr Department   ocrx_word word_1_222 bbox 956 1142 975 1160; x_wconf 95 eng ltr of   ocrx_word word_1_223 bbox 981 1142 1046 1160; x_wconf 81 eng ltr Justice

       ocr_line line_1_20 bbox 145 1197 994 1220; baseline 0 -5; x_size 22; x_descenders 4; x_ascenders 4  ocrx_word word_1_224 bbox 145 1197 175 1215; x_wconf 79 eng ltr has   ocrx_word word_1_225 bbox 182 1197 210 1215; x_wconf 94 eng ltr the   ocrx_word word_1_226 bbox 218 1197 255 1215; x_wconf 92 eng ltr sole   ocrx_word word_1_227 bbox 263 1197 349 1219; x_wconf 89 eng ltr authority   ocrx_word word_1_228 bbox 355 1199 372 1215; x_wconf 91 eng ltr to   ocrx_word word_1_229 bbox 381 1197 434 1215; x_wconf 89 eng ltr indict   ocrx_word word_1_230 bbox 441 1201 460 1215; x_wconf 89 eng ltr or   ocrx_word word_1_231 bbox 467 1197 508 1215; x_wconf 91 eng ltr seek   ocrx_word word_1_232 bbox 515 1197 592 1215; x_wconf 86 eng ltr criminal   ocrx_word word_1_233 bbox 601 1197 646 1215; x_wconf 88 eng ltr fines   ocrx_word word_1_234 bbox 654 1201 673 1215; x_wconf 90 eng ltr or   ocrx_word word_1_235 bbox 680 1197 728 1215; x_wconf 90 eng ltr other   ocrx_word word_1_236 bbox 735 1197 823 1215; x_wconf 90 eng ltr sanctions   ocrx_word word_1_237 bbox 830 1197 863 1215; x_wconf 90 eng ltr and   ocrx_word word_1_238 bbox 871 1199 888 1215; x_wconf 91 eng ltr to   ocrx_word word_1_239 bbox 896 1197 994 1220; x_wconf 92 eng ltr criminally

       ocr_line line_1_21 bbox 145 1252 1015 1275; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_240 bbox 145 1254 235 1275; x_wconf 89 eng ltr prosecute   ocrx_word word_1_241 bbox 244 1252 348 1270; x_wconf 91 eng ltr individuals   ocrx_word word_1_242 bbox 355 1252 388 1270; x_wconf 89 eng ltr and   ocrx_word word_1_243 bbox 397 1252 496 1270; x_wconf 89 eng ltr businesses   ocrx_word word_1_244 bbox 503 1252 530 1270; x_wconf 92 eng ltr for   ocrx_word word_1_245 bbox 537 1252 580 1270; x_wconf 90 eng ltr their   ocrx_word word_1_246 bbox 587 1252 659 1270; x_wconf 88 eng ltr actions.   ocrx_word word_1_247 bbox 673 1253 698 1270; x_wconf 89 eng ltr As   ocrx_word word_1_248 bbox 705 1257 732 1270; x_wconf 93 eng ltr we   ocrx_word word_1_249 bbox 740 1252 783 1270; x_wconf 89 eng ltr have   ocrx_word word_1_250 bbox 790 1252 866 1270; x_wconf 87 eng ltr testified   ocrx_word word_1_251 bbox 875 1252 979 1275; x_wconf 74 eng ltr previously,   ocrx_word word_1_252 bbox 987 1252 1015 1270; x_wconf 92 eng ltr the





     ocr_carea block_1_2 bbox 146 1307 1035 1330
      ocr_par ltr par_1_6 bbox 146 1307 1035 1330
       ocr_line line_1_22 bbox 146 1307 1035 1330; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_253 bbox 146 1307 214 1325; x_wconf 89 eng ltr Federal   ocrx_word word_1_254 bbox 223 1308 298 1325; x_wconf 90 eng ltr Reserve   ocrx_word word_1_255 bbox 306 1309 407 1330; x_wconf 91 eng ltr cooperates   ocrx_word word_1_256 bbox 414 1307 455 1325; x_wconf 95 eng ltr with   ocrx_word word_1_257 bbox 463 1307 511 1325; x_wconf 90 eng ltr other   ocrx_word word_1_258 bbox 518 1307 600 1330; x_wconf 90 eng ltr agencies   ocrx_word word_1_259 bbox 608 1307 624 1325; x_wconf 94 eng ltr in   ocrx_word word_1_260 bbox 631 1307 701 1325; x_wconf 89 eng ltr various   ocrx_word word_1_261 bbox 708 1307 827 1325; x_wconf 91 eng ltr enforcement   ocrx_word word_1_262 bbox 834 1307 906 1328; x_wconf 72 eng ltr actions,   ocrx_word word_1_263 bbox 916 1307 1003 1330; x_wconf 91 eng ltr including   ocrx_word word_1_264 bbox 1012 1307 1035 1330; x_wconf 93 eng ltr by










  page
  - 6 -

 providing information in response to subpoenas issued by the Justice Department or other federal

  law enforcement authorities.7

  Thank you very much for inviting me to present the Federal Reserve’s views on these

  important issues.  I would be pleased to answer any questions you may have.

  7  “Patterns of Abuse: Assessing Bank Secrecy Act Compliance and Enforcement”: Hearing before the S. Comm. on
 Banking, Housing and Urban Affairs, 113th Congress (2013) (statement of Jerome H. Powell, Governor, Board of
 Governors of the Federal Reserve System).



  ocr







    ocr_page page_1 image "/tmp/apache-tika-938835056649975571.tmp"; bbox 0 0 1224 1584; ppageno 0
     ocr_carea block_1_1 bbox 145 149 1076 336
      ocr_par ltr par_1_1 bbox 145 149 1076 336
       ocr_line line_1_1 bbox 593 149 631 166; baseline 0 -6; x_size 14.156151; x_descenders 3.1561508; x_ascenders 3.1561508  ocrx_word word_1_1 bbox 593 158 599 160; x_wconf 96 eng _   ocrx_word word_1_2 bbox 607 149 617 166; x_wconf 76 eng 6   ocrx_word word_1_3 bbox 625 158 631 160; x_wconf 61 eng .

       ocr_line line_1_2 bbox 145 203 1076 226; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_4 bbox 145 203 236 226; x_wconf 89 eng ltr providing   ocrx_word word_1_5 bbox 245 203 355 221; x_wconf 81 eng ltr information   ocrx_word word_1_6 bbox 364 203 380 221; x_wconf 96 eng ltr in   ocrx_word word_1_7 bbox 389 208 470 226; x_wconf 81 eng ltr response   ocrx_word word_1_8 bbox 477 205 495 221; x_wconf 93 eng ltr to   ocrx_word word_1_9 bbox 502 203 601 226; x_wconf 81 eng ltr subpoenas   ocrx_word word_1_10 bbox 610 203 666 221; x_wconf 86 eng ltr issued   ocrx_word word_1_11 bbox 675 203 698 226; x_wconf 91 eng ltr by   ocrx_word word_1_12 bbox 704 203 732 221; x_wconf 86 eng ltr the   ocrx_word word_1_13 bbox 739 203 804 221; x_wconf 80 eng ltr Justice   ocrx_word word_1_14 bbox 813 204 924 226; x_wconf 88 eng ltr Department   ocrx_word word_1_15 bbox 931 208 950 221; x_wconf 97 eng ltr or   ocrx_word word_1_16 bbox 957 203 1005 221; x_wconf 85 eng ltr other   ocrx_word word_1_17 bbox 1011 203 1076 221; x_wconf 82 eng ltr federal

       ocr_line line_1_3 bbox 146 256 426 276; baseline 0 0; x_size 22.230846; x_descenders 5.2308455; x_ascenders 4  ocrx_word word_1_18 bbox 146 259 178 276; x_wconf 93 eng ltr law   ocrx_word word_1_19 bbox 185 259 304 276; x_wconf 83 eng ltr enforcement   ocrx_word word_1_20 bbox 311 256 426 276; x_wconf 84 eng ltr authorities.7

       ocr_line line_1_4 bbox 216 314 1038 336; baseline 0.001 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_21 bbox 216 314 277 332; x_wconf 86 eng ltr Thank   ocrx_word word_1_22 bbox 284 318 318 336; x_wconf 90 eng ltr you   ocrx_word word_1_23 bbox 325 318 368 336; x_wconf 88 eng ltr very   ocrx_word word_1_24 bbox 375 314 426 332; x_wconf 87 eng ltr much   ocrx_word word_1_25 bbox 433 314 461 332; x_wconf 89 eng ltr for   ocrx_word word_1_26 bbox 469 314 541 336; x_wconf 80 eng ltr inviting   ocrx_word word_1_27 bbox 549 318 576 332; x_wconf 91 eng ltr me   ocrx_word word_1_28 bbox 583 316 601 332; x_wconf 84 eng ltr to   ocrx_word word_1_29 bbox 609 316 677 336; x_wconf 81 eng ltr present   ocrx_word word_1_30 bbox 683 314 712 332; x_wconf 80 eng ltr the   ocrx_word word_1_31 bbox 720 314 788 332; x_wconf 86 eng ltr Federal   ocrx_word word_1_32 bbox 798 315 890 332; x_wconf 89 eng ltr Reserve's   ocrx_word word_1_33 bbox 897 314 953 332; x_wconf 82 eng ltr views   ocrx_word word_1_34 bbox 960 318 982 332; x_wconf 97 eng ltr on   ocrx_word word_1_35 bbox 990 314 1038 332; x_wconf 81 eng ltr these





     ocr_carea block_1_2 bbox 146 369 880 392
      ocr_par ltr par_1_2 bbox 146 369 880 392
       ocr_line line_1_5 bbox 146 369 880 392; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_36 bbox 146 369 237 392; x_wconf 83 eng ltr important   ocrx_word word_1_37 bbox 245 369 305 387; x_wconf 67 eng ltr issues,   ocrx_word word_1_38 bbox 321 370 324 387; x_wconf 98 eng ltr  I    ocrx_word word_1_39 bbox 332 369 391 387; x_wconf 89 eng ltr would   ocrx_word word_1_40 bbox 400 369 420 387; x_wconf 89 eng ltr be   ocrx_word word_1_41 bbox 428 369 498 392; x_wconf 89 eng ltr pleased   ocrx_word word_1_42 bbox 505 371 523 387; x_wconf 87 eng ltr to   ocrx_word word_1_43 bbox 530 373 597 387; x_wconf 89 eng ltr answer   ocrx_word word_1_44 bbox 605 373 639 391; x_wconf 86 eng ltr any   ocrx_word word_1_45 bbox 645 369 734 392; x_wconf 88 eng ltr questions   ocrx_word word_1_46 bbox 742 373 776 392; x_wconf 90 eng ltr you   ocrx_word word_1_47 bbox 785 373 825 391; x_wconf 86 eng ltr may   ocrx_word word_1_48 bbox 832 369 880 387; x_wconf 67 eng ltr have,





     ocr_carea block_1_3 bbox 145 1373 1074 1439
      ocr_par ltr par_1_3 bbox 145 1373 1074 1439
       ocr_line line_1_6 bbox 145 1373 1074 1393; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_49 bbox 145 1373 150 1382; x_wconf 69 eng 7   ocrx_word word_1_50 bbox 161 1375 233 1389; x_wconf 76 eng ltr “Patterns   ocrx_word word_1_51 bbox 239 1375 255 1389; x_wconf 84 eng ltr of   ocrx_word word_1_52 bbox 261 1375 315 1389; x_wconf 83 eng ltr Abuse:   ocrx_word word_1_53 bbox 322 1375 401 1393; x_wconf 79 eng ltr Assessrng   ocrx_word word_1_54 bbox 409 1375 449 1389; x_wconf 87 eng ltr Bank   ocrx_word word_1_55 bbox 455 1375 517 1393; x_wconf 80 eng ltr Secrecy   ocrx_word word_1_56 bbox 523 1375 551 1389; x_wconf 84 eng ltr Act   ocrx_word word_1_57 bbox 557 1375 653 1393; x_wconf 83 eng ltr Compliance   ocrx_word word_1_58 bbox 659 1375 686 1389; x_wconf 85 eng ltr and   ocrx_word word_1_59 bbox 694 1375 808 1389; x_wconf 81 eng ltr Enforcement":   ocrx_word word_1_60 bbox 816 1375 878 1393; x_wconf 82 eng ltr Hearing   ocrx_word word_1_61 bbox 885 1375 935 1389; x_wconf 85 eng ltr before   ocrx_word word_1_62 bbox 941 1375 964 1389; x_wconf 90 eng ltr the   ocrx_word word_1_63 bbox 971 1375 984 1389; x_wconf 88 eng ltr S.   ocrx_word word_1_64 bbox 992 1375 1049 1389; x_wconf 81 eng ltr Comm.   ocrx_word word_1_65 bbox 1056 1378 1074 1389; x_wconf 88 eng ltr on

       ocr_line line_1_7 bbox 145 1396 1053 1416; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_66 bbox 145 1397 215 1416; x_wconf 72 eng ltr Banking,   ocrx_word word_1_67 bbox 223 1397 288 1416; x_wconf 79 eng ltr Housing   ocrx_word word_1_68 bbox 295 1397 322 1412; x_wconf 91 eng ltr and   ocrx_word word_1_69 bbox 330 1397 377 1412; x_wconf 82 eng ltr Urban   ocrx_word word_1_70 bbox 384 1397 443 1414; x_wconf 76 eng ltr Affairs,   ocrx_word word_1_71 bbox 451 1396 490 1412; x_wconf 72 eng 113‘"   ocrx_word word_1_72 bbox 496 1398 569 1416; x_wconf 84 eng ltr Congress   ocrx_word word_1_73 bbox 576 1397 627 1416; x_wconf 81 eng (2015)   ocrx_word word_1_74 bbox 634 1397 716 1416; x_wconf 77 eng ltr (statement   ocrx_word word_1_75 bbox 722 1398 738 1412; x_wconf 88 eng ltr of   ocrx_word word_1_76 bbox 743 1398 800 1412; x_wconf 81 eng ltr Jerome   ocrx_word word_1_77 bbox 807 1398 818 1412; x_wconf 95 eng ltr  H    ocrx_word word_1_78 bbox 831 1397 889 1414; x_wconf 76 eng ltr Powell,   ocrx_word word_1_79 bbox 897 1398 976 1414; x_wconf 84 eng ltr Governor.   ocrx_word word_1_80 bbox 984 1397 1030 1412; x_wconf 90 eng ltr Board   ocrx_word word_1_81 bbox 1037 1398 1053 1412; x_wconf 84 eng ltr of

       ocr_line line_1_8 bbox 145 1421 483 1439; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_82 bbox 145 1421 228 1435; x_wconf 84 eng ltr Governors   ocrx_word word_1_83 bbox 234 1421 250 1435; x_wconf 82 eng ltr of   ocrx_word word_1_84 bbox 255 1421 279 1435; x_wconf 84 eng ltr the   ocrx_word word_1_85 bbox 286 1421 343 1435; x_wconf 86 eng ltr Federal   ocrx_word word_1_86 bbox 351 1421 413 1435; x_wconf 84 eng ltr Reserve   ocrx_word word_1_87 bbox 420 1421 483 1439; x_wconf 86 eng ltr System)








`;

function btoa(str) {
  if (Buffer.byteLength(str) !== str.length)
    throw new Error('bad string!');
  //return Buffer(str, 'binary').toString('base64');
  return str;
}

//console.log(text);



var pages = text.split(/ocr_page page_1/)

for (var page_number = 0; page_number <1;page_number++){
//for (var page_number = 0; page_number < pages.length -1;page_number++){

  // Grab content after the split on ocr_page to get the page_dimension
  //var lines = pages[page_number+1].split("\n");
  //var page_dimension = lines[0].split(";")[1].replace("bbox","").trim()
  //console.log("Page:" + page_number + " has dimension " + page_dimension);
  // Grab content before the split on ocr_page to get text_extracted
  //var lines = pages[page_number].split("\n");
  var lines = doc06creditcardspdf_page_x.split("\n")
  var foundPage = -1;
  var foundOcr = -1;
  var extracted_text = "";
  for (i = 0; i < lines.length;i++){

    if (lines[i].trim() == 'page'){
      foundPage = i;
    }
    if (lines[i].trim() == 'ocr'){
      foundOcr = i;
    }
    if (foundPage > -1 & foundOcr > -1){

      extracted_text = lines.slice(foundPage+1,foundOcr).join(" ");
      console.log("Slice from " + foundPage + " to " + foundOcr);
      foundPage = -1;
      foundOcr = -1;
    }
  }


  var page_words = doc06creditcardspdf_page_x.split(/ocrx_word/);

  var tokens_array = []
  var tokens_payloads_array = []
  for (var i = 1; i <= page_words.length;i++){
    var chunk = page_words[i];
    if (chunk == undefined){
      continue;
    }
    // process a chunk to the elements, removing spaces or empty cells.
    //console.log("*" + chunk);
    var raw_tokens = chunk.trim().split(" ");
    var tokens = []
    for(var j = 0; j< raw_tokens.length;j++){
      if (raw_tokens[j].trim() != ""){
        tokens.push(raw_tokens[j]);
      }
    }

    //logger.info(tokens.join("!"));
    if (raw_tokens.length != tokens.length){
      //logger.info("Chopped down the size of the tokens from " + raw_tokens.join("!"));
    }
    if (tokens[9] === 'ltr'){
      token = tokens[10];
    }
    else if (tokens[8] === 'eng'){
      token = tokens[9];
    }
    else {
      console.log("process-speech#processAdd: Unknown line formatting: " + tokens);
    }
    if (token == undefined){
      console.log("process-speech#processAdd: Undefined token for chunk:" + chunk);
      //console.log("process-speech#processAdd: Here is the tokens_array:" + tokens_array.join(" "));
      //console.log("Here comes the page:" + pages[page_number+1]);
    }
    else {
      token = token.replace(/\s+/g, '');
      tokens_array.push(token);

      payload = chunk.split(/bbox/)[1].split(/;/)[0].trim();
      //payload = Packages.org.apache.solr.common.util.Base64.byteArrayToBase64(payload.getBytes());
      tokens_payloads_array.push(token + '|' + payload)
    }

  }
  console.log("Tokens: " + tokens_array);
  console.log("extracted_text: " + extracted_text);


}
