// Test file of parsing the text based HOCR format.
// Run as a console command using NPM: npm test.js

var text = `df:docinfo:custom:Company
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







   ocr_page page_1 image ""/tmp/apache-tika-5429396892514649700.tmp""; bbox 0 0 1224 1584; ppageno 0
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

 thank you for the opportunity to testify about the Federal Reserveâ€™s supervisory activities

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

 Legal Framework and the Federal Reserveâ€™s Regulatory Expectations

 Congress, through the Bank Secrecy Act (BSA), requires banking organizations to

 establish and maintain anti-money-laundering (AML) programs designed to detect when services

 provided by the organization are being used for illegal purposes.  By law, each Federal Reserve-

 regulated institution, like other depository institutions, must have a BSA program that contains

 four critical elements, including a system of internal controls to ensure ongoing compliance with

 the BSA, independent testing of the bankâ€™s compliance with the BSA, training of appropriate

 bank personnel, and the designation of an individual responsible for coordinating and monitoring

 day-to-day compliance with the BSA.1  Under the general rubric of â€œknow your customerâ€ laws

 1  See 31 U.S.C. Â§ 5318(h) and Board of Governors Regulation H (12 C.F.R. Â§ 208.63) (BSA program requirements
for state member banks).



 ocr







   ocr_page page_1 image ""/tmp/apache-tika-8207706673448059204.tmp""; bbox 0 0 1224 1584; ppageno 0
    ocr_carea block_1_1 bbox 144 148 1076 1330
     ocr_par ltr par_1_1 bbox 144 148 1065 502
      ocr_line line_1_1 bbox 217 148 1056 171; baseline 0 -5; x_size 21; x_descenders 3; x_ascenders 5  ocrx_word word_1_1 bbox 217 148 309 166; x_wconf 80 eng ltr Chairman   ocrx_word word_1_2 bbox 319 149 413 171; x_wconf 88 eng ltr McHenry,   ocrx_word word_1_3 bbox 422 148 501 171; x_wconf 86 eng ltr Ranking   ocrx_word word_1_4 bbox 510 148 589 166; x_wconf 89 eng ltr Member   ocrx_word word_1_5 bbox 596 149 658 169; x_wconf 86 eng ltr Green,   ocrx_word word_1_6 bbox 666 148 699 166; x_wconf 92 eng ltr and   ocrx_word word_1_7 bbox 707 148 755 166; x_wconf 88 eng ltr other   ocrx_word word_1_8 bbox 763 148 849 166; x_wconf 87 eng ltr members   ocrx_word word_1_9 bbox 856 148 876 166; x_wconf 91 eng ltr of   ocrx_word word_1_10 bbox 882 148 910 166; x_wconf 92 eng ltr the   ocrx_word word_1_11 bbox 918 148 1056 169; x_wconf 87 eng ltr subcommittee,

      ocr_line line_1_2 bbox 144 203 1000 226; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_12 bbox 144 203 197 221; x_wconf 81 eng ltr thank   ocrx_word word_1_13 bbox 204 208 238 226; x_wconf 92 eng ltr you   ocrx_word word_1_14 bbox 246 203 273 221; x_wconf 87 eng ltr for   ocrx_word word_1_15 bbox 279 203 308 221; x_wconf 88 eng ltr the   ocrx_word word_1_16 bbox 315 203 427 226; x_wconf 93 eng ltr opportunity   ocrx_word word_1_17 bbox 433 205 450 221; x_wconf 92 eng ltr to   ocrx_word word_1_18 bbox 457 203 517 226; x_wconf 82 eng ltr testify   ocrx_word word_1_19 bbox 524 203 576 221; x_wconf 82 eng ltr about   ocrx_word word_1_20 bbox 583 203 611 221; x_wconf 91 eng ltr the   ocrx_word word_1_21 bbox 619 203 687 221; x_wconf 83 eng ltr Federal   ocrx_word word_1_22 bbox 697 204 790 221; x_wconf 82 eng ltr Reserveâ€™s   ocrx_word word_1_23 bbox 797 203 908 226; x_wconf 81 eng ltr supervisory   ocrx_word word_1_24 bbox 915 203 1000 221; x_wconf 84 eng ltr activities

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
      ocr_line line_1_14 bbox 146 866 858 889; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_157 bbox 146 866 199 889; x_wconf 88 eng ltr Legal   ocrx_word word_1_158 bbox 209 866 328 884; x_wconf 89 eng ltr Framework   ocrx_word word_1_159 bbox 335 866 372 884; x_wconf 88 eng ltr and   ocrx_word word_1_160 bbox 380 866 411 884; x_wconf 90 eng ltr the   ocrx_word word_1_161 bbox 419 866 494 884; x_wconf 91 eng ltr Federal   ocrx_word word_1_162 bbox 504 867 600 884; x_wconf 82 eng ltr Reserveâ€™s   ocrx_word word_1_163 bbox 608 866 721 889; x_wconf 86 eng ltr Regulatory   ocrx_word word_1_164 bbox 729 866 858 889; x_wconf 83 eng ltr Expectations




     ocr_par ltr par_1_4 bbox 144 921 1076 1330
      ocr_line line_1_15 bbox 217 921 1007 944; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_165 bbox 217 922 309 944; x_wconf 90 eng ltr Congress,   ocrx_word word_1_166 bbox 317 921 390 944; x_wconf 90 eng ltr through   ocrx_word word_1_167 bbox 398 921 426 939; x_wconf 89 eng ltr the   ocrx_word word_1_168 bbox 435 921 484 939; x_wconf 89 eng ltr Bank   ocrx_word word_1_169 bbox 491 922 566 944; x_wconf 88 eng ltr Secrecy   ocrx_word word_1_170 bbox 572 922 606 939; x_wconf 85 eng ltr Act   ocrx_word word_1_171 bbox 614 921 679 943; x_wconf 87 eng ltr (BSA),   ocrx_word word_1_172 bbox 689 921 764 944; x_wconf 91 eng ltr requires   ocrx_word word_1_173 bbox 772 921 846 944; x_wconf 87 eng ltr banking   ocrx_word word_1_174 bbox 854 921 983 944; x_wconf 84 eng ltr organizations   ocrx_word word_1_175 bbox 990 923 1007 939; x_wconf 90 eng ltr to

      ocr_line line_1_16 bbox 145 976 1076 999; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_176 bbox 145 976 227 994; x_wconf 90 eng ltr establish   ocrx_word word_1_177 bbox 235 976 267 994; x_wconf 91 eng ltr and   ocrx_word word_1_178 bbox 276 976 357 994; x_wconf 93 eng ltr maintain   ocrx_word word_1_179 bbox 365 976 583 999; x_wconf 65 eng ltr antiÂ»moneyÂ»laundering   ocrx_word word_1_180 bbox 592 976 658 999; x_wconf 90 eng ltr (AML)   ocrx_word word_1_181 bbox 667 981 756 999; x_wconf 92 eng ltr programs   ocrx_word word_1_182 bbox 763 976 846 999; x_wconf 89 eng ltr designed   ocrx_word word_1_183 bbox 854 978 872 994; x_wconf 91 eng ltr to   ocrx_word word_1_184 bbox 879 976 936 994; x_wconf 89 eng ltr detect   ocrx_word word_1_185 bbox 942 976 992 994; x_wconf 92 eng ltr when   ocrx_word word_1_186 bbox 1000 976 1076 994; x_wconf 89 eng ltr services

      ocr_line line_1_17 bbox 145 1031 1067 1054; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_187 bbox 145 1031 228 1054; x_wconf 92 eng ltr provided   ocrx_word word_1_188 bbox 237 1031 259 1054; x_wconf 91 eng ltr by   ocrx_word word_1_189 bbox 265 1031 294 1049; x_wconf 92 eng ltr the   ocrx_word word_1_190 bbox 301 1031 419 1054; x_wconf 90 eng ltr organization   ocrx_word word_1_191 bbox 427 1036 455 1049; x_wconf 91 eng ltr are   ocrx_word word_1_192 bbox 463 1031 514 1054; x_wconf 91 eng ltr being   ocrx_word word_1_193 bbox 522 1031 564 1049; x_wconf 91 eng ltr used   ocrx_word word_1_194 bbox 571 1031 599 1049; x_wconf 91 eng ltr for   ocrx_word word_1_195 bbox 607 1031 663 1054; x_wconf 89 eng ltr illegal   ocrx_word word_1_196 bbox 672 1036 760 1054; x_wconf 91 eng ltr purposes.   ocrx_word word_1_197 bbox 776 1032 803 1054; x_wconf 93 eng ltr By   ocrx_word word_1_198 bbox 810 1031 847 1052; x_wconf 86 eng ltr law,   ocrx_word word_1_199 bbox 856 1031 898 1049; x_wconf 86 eng ltr each   ocrx_word word_1_200 bbox 907 1031 975 1049; x_wconf 91 eng ltr Federal   ocrx_word word_1_201 bbox 985 1032 1067 1049; x_wconf 91 eng ltr Reserve-

      ocr_line line_1_18 bbox 146 1087 1054 1109; baseline 0 -5; x_size 22; x_descenders 5; x_ascenders 4  ocrx_word word_1_202 bbox 146 1087 232 1109; x_wconf 89 eng ltr regulated   ocrx_word word_1_203 bbox 241 1087 341 1107; x_wconf 84 eng ltr institution.   ocrx_word word_1_204 bbox 351 1087 384 1104; x_wconf 94 eng ltr like   ocrx_word word_1_205 bbox 392 1087 440 1104; x_wconf 91 eng ltr other   ocrx_word word_1_206 bbox 447 1087 547 1109; x_wconf 90 eng ltr depository   ocrx_word word_1_207 bbox 555 1087 664 1107; x_wconf 83 eng ltr institutions,   ocrx_word word_1_208 bbox 673 1088 719 1104; x_wconf 94 eng ltr must   ocrx_word word_1_209 bbox 726 1087 769 1104; x_wconf 90 eng ltr have   ocrx_word word_1_210 bbox 777 1091 787 1104; x_wconf 97 eng ltr a   ocrx_word word_1_211 bbox 794 1087 839 1104; x_wconf 84 eng ltr BSA   ocrx_word word_1_212 bbox 846 1091 925 1109; x_wconf 85 eng ltr program   ocrx_word word_1_213 bbox 933 1087 968 1104; x_wconf 89 eng ltr that   ocrx_word word_1_214 bbox 975 1087 1054 1104; x_wconf 92 eng ltr contains

      ocr_line line_1_19 bbox 144 1142 1070 1164; baseline 0 -4; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_215 bbox 144 1142 184 1160; x_wconf 87 eng ltr four   ocrx_word word_1_216 bbox 191 1142 254 1160; x_wconf 91 eng ltr critical   ocrx_word word_1_217 bbox 263 1142 352 1162; x_wconf 86 eng ltr elements,   ocrx_word word_1_218 bbox 362 1142 449 1164; x_wconf 87 eng ltr including   ocrx_word word_1_219 bbox 457 1146 467 1160; x_wconf 89 eng ltr a   ocrx_word word_1_220 bbox 474 1144 538 1164; x_wconf 89 eng ltr system   ocrx_word word_1_221 bbox 547 1142 566 1160; x_wconf 93 eng ltr of   ocrx_word word_1_222 bbox 574 1142 643 1160; x_wconf 91 eng ltr internal   ocrx_word word_1_223 bbox 652 1142 728 1160; x_wconf 89 eng ltr controls   ocrx_word word_1_224 bbox 735 1144 752 1160; x_wconf 96 eng ltr to   ocrx_word word_1_225 bbox 760 1146 821 1160; x_wconf 91 eng ltr ensure   ocrx_word word_1_226 bbox 828 1142 905 1164; x_wconf 89 eng ltr ongoing   ocrx_word word_1_227 bbox 913 1142 1022 1164; x_wconf 87 eng ltr compliance   ocrx_word word_1_228 bbox 1029 1142 1070 1160; x_wconf 93 eng ltr with

      ocr_line line_1_20 bbox 144 1197 1037 1220; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 4  ocrx_word word_1_229 bbox 144 1197 173 1215; x_wconf 93 eng ltr the   ocrx_word word_1_230 bbox 181 1198 230 1218; x_wconf 87 eng ltr BSA,   ocrx_word word_1_231 bbox 240 1197 355 1220; x_wconf 87 eng ltr independent   ocrx_word word_1_232 bbox 361 1197 424 1220; x_wconf 89 eng ltr testing   ocrx_word word_1_233 bbox 432 1197 451 1215; x_wconf 88 eng ltr of   ocrx_word word_1_234 bbox 457 1197 486 1215; x_wconf 93 eng ltr the   ocrx_word word_1_235 bbox 494 1197 556 1215; x_wconf 84 eng ltr bankâ€™s   ocrx_word word_1_236 bbox 563 1197 672 1220; x_wconf 89 eng ltr compliance   ocrx_word word_1_237 bbox 679 1197 720 1215; x_wconf 92 eng ltr with   ocrx_word word_1_238 bbox 728 1197 756 1215; x_wconf 89 eng ltr the   ocrx_word word_1_239 bbox 765 1198 814 1218; x_wconf 89 eng ltr BSA,   ocrx_word word_1_240 bbox 822 1197 895 1220; x_wconf 89 eng ltr training   ocrx_word word_1_241 bbox 903 1197 922 1215; x_wconf 89 eng ltr of   ocrx_word word_1_242 bbox 929 1197 1037 1220; x_wconf 84 eng ltr appropriate

      ocr_line line_1_21 bbox 145 1252 1075 1275; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_243 bbox 145 1252 190 1270; x_wconf 90 eng ltr bank   ocrx_word word_1_244 bbox 198 1252 294 1275; x_wconf 88 eng ltr personnel,   ocrx_word word_1_245 bbox 303 1252 335 1270; x_wconf 92 eng ltr and   ocrx_word word_1_246 bbox 343 1252 371 1270; x_wconf 97 eng ltr the   ocrx_word word_1_247 bbox 379 1252 487 1275; x_wconf 88 eng ltr designation   ocrx_word word_1_248 bbox 495 1252 514 1270; x_wconf 88 eng ltr of   ocrx_word word_1_249 bbox 521 1257 542 1270; x_wconf 91 eng ltr an   ocrx_word word_1_250 bbox 551 1252 645 1270; x_wconf 90 eng ltr individual   ocrx_word word_1_251 bbox 654 1252 761 1275; x_wconf 90 eng ltr responsible   ocrx_word word_1_252 bbox 768 1252 795 1270; x_wconf 90 eng ltr for   ocrx_word word_1_253 bbox 803 1252 922 1275; x_wconf 91 eng ltr coordinating   ocrx_word word_1_254 bbox 930 1252 962 1270; x_wconf 91 eng ltr and   ocrx_word word_1_255 bbox 971 1252 1075 1275; x_wconf 89 eng ltr monitoring

      ocr_line line_1_22 bbox 145 1305 1063 1330; baseline 0 -5; x_size 23; x_descenders 5; x_ascenders 5  ocrx_word word_1_256 bbox 145 1307 248 1330; x_wconf 85 eng ltr day-to-day   ocrx_word word_1_257 bbox 255 1307 364 1330; x_wconf 91 eng ltr compliance   ocrx_word word_1_258 bbox 370 1307 412 1325; x_wconf 92 eng ltr with   ocrx_word word_1_259 bbox 420 1307 448 1325; x_wconf 93 eng ltr the   ocrx_word word_1_260 bbox 456 1305 516 1325; x_wconf 80 eng ltr BSA.l   ocrx_word word_1_261 bbox 530 1307 588 1325; x_wconf 92 eng ltr Under   ocrx_word word_1_262 bbox 594 1307 623 1325; x_wconf 93 eng ltr the   ocrx_word word_1_263 bbox 631 1307 698 1330; x_wconf 89 eng ltr general   ocrx_word word_1_264 bbox 708 1307 763 1325; x_wconf 92 eng ltr rubric   ocrx_word word_1_265 bbox 770 1307 789 1325; x_wconf 83 eng ltr of   ocrx_word word_1_266 bbox 797 1307 859 1325; x_wconf 86 eng ltr â€œknow   ocrx_word word_1_267 bbox 866 1312 909 1330; x_wconf 94 eng ltr your   ocrx_word word_1_268 bbox 916 1308 1013 1325; x_wconf 90 eng ltr customer""   ocrx_word word_1_269 bbox 1022 1307 1063 1325; x_wconf 91 eng ltr laws





    ocr_carea block_1_2 bbox 144 1396 1071 1439
     ocr_par ltr par_1_5 bbox 144 1396 1071 1439
      ocr_line line_1_23 bbox 145 1396 1071 1416; baseline 0 -4; x_size 19; x_descenders 4; x_ascenders 4  ocrx_word word_1_270 bbox 145 1396 150 1405; x_wconf 61 eng  1    ocrx_word word_1_271 bbox 161 1398 189 1412; x_wconf 85 eng ltr See   ocrx_word word_1_272 bbox 195 1398 214 1412; x_wconf 86 eng 31   ocrx_word word_1_273 bbox 221 1398 232 1412; x_wconf 95 eng ltr U   ocrx_word word_1_274 bbox 240 1398 249 1412; x_wconf 85 eng ltr S   ocrx_word word_1_275 bbox 256 1398 272 1412; x_wconf 89 eng ltr C.   ocrx_word word_1_276 bbox 279 1397 287 1414; x_wconf 77 eng Â§   ocrx_word word_1_277 bbox 294 1397 355 1416; x_wconf 78 eng ltr 5318(h)   ocrx_word word_1_278 bbox 362 1397 389 1412; x_wconf 88 eng ltr and   ocrx_word word_1_279 bbox 397 1397 443 1412; x_wconf 89 eng ltr Board   ocrx_word word_1_280 bbox 450 1398 466 1412; x_wconf 84 eng ltr of   ocrx_word word_1_281 bbox 472 1398 555 1412; x_wconf 86 eng ltr Governors   ocrx_word word_1_282 bbox 562 1397 647 1416; x_wconf 87 eng ltr Regulation   ocrx_word word_1_283 bbox 655 1398 666 1412; x_wconf 96 eng ltr  H    ocrx_word word_1_284 bbox 674 1397 698 1416; x_wconf 80 eng (12   ocrx_word word_1_285 bbox 705 1398 755 1412; x_wconf 90 eng ltr C.F.R.   ocrx_word word_1_286 bbox 763 1397 771 1414; x_wconf 81 eng Â§   ocrx_word word_1_287 bbox 778 1397 838 1416; x_wconf 77 eng 208.63)   ocrx_word word_1_288 bbox 845 1397 889 1416; x_wconf 84 eng ltr (BSA   ocrx_word word_1_289 bbox 895 1401 961 1416; x_wconf 89 eng ltr program   ocrx_word word_1_290 bbox 968 1397 1071 1416; x_wconf 86 eng ltr requirements

      ocr_line line_1_24 bbox 144 1421 341 1439; baseline 0 -4; x_size 18; x_descenders 4; x_ascenders 3  ocrx_word word_1_291 bbox 144 1421 167 1435; x_wconf 91 eng ltr for   ocrx_word word_1_292 bbox 173 1422 208 1435; x_wconf 82 eng ltr state   ocrx_word word_1_293 bbox 215 1421 279 1435; x_wconf 87 eng ltr member   ocrx_word word_1_294 bbox 285 1421 341 1439; x_wconf 84 eng ltr banks).




`;

function btoa(str) {
  if (Buffer.byteLength(str) !== str.length)
    throw new Error('bad string!');
  return Buffer(str, 'binary').toString('base64');
}

//console.log(text);



var pages = text.split(/ocr_page page_1/)
console.log(pages.length);
var lines = pages[1].split("\n");
//console.log(lines[0]);
var page_bbox = lines[0].split(";")[1].replace("bbox","").trim()

var page_words = pages[1].split(/ocrx_word/);
console.log(page_words[1])
var word_pair = page_words[1].split(/ltr/);

console.log(word_pair[1].trim() + '|' + btoa(word_pair[0].split(/bbox/)[1].split(/;/)[0].trim()));

for (var i = 1; i < pages.length;i++){
  console.log(i)
}
