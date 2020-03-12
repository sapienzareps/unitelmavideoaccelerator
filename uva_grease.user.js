// ==UserScript==
// @namespace       	https://github.com/sapienzareps/unitelmavideoaccelerator/raw/master/uva_grease.user.js
// @name		UnitelmaVideoAccelerator
// @description		Unitelma Video Accelerator
// @include		https://elearning.unitelma.it/*
// @updateURL		https://github.com/sapienzareps/unitelmavideoaccelerator/raw/master/uva_grease.user.js
// @downloadURL		https://github.com/sapienzareps/unitelmavideoaccelerator/raw/master/uva_grease.user.js
// @grant    		GM_addStyle 
// @version		4
// ==/UserScript==


var cdnvideos = {
    // Algoritmi 1
	51585: "!4LwHALyA!14zUzDCkknYysHEqJdiYYzdSGHCyrf_vDYevevUHqJM",
	51586: "!pb5STCSY!uC1o49rDp50ufwUhYISkdnqunn-Ojtc_-G2a5-99KtA",
	51587: "!8PoQCKCS!3H4Xfe0o-pFxFnshBSBJ9r9STdqmEf3ZhoOC6v41Fmg",
	51588: "!JOh2RKiZ!WDTFYYyKEcWLx7uhMlTccBlAYenGNILCOQRBbgQbEZA",
	51589: "!ZGgAAYIa!544F3DdxSm3Yibv_f376pc51yZX2kwO_h-GJ9VpWEBY",
	51590: "!da4yAATA!8neIbWVTjrrzGsSBhi9wdnH-T3mHWqnzOYA0OFktP4M",
	51591: "!EOhWTKRL!UkAqOqS82M3DauJuND1q0EERS3hR-pHTRoECZT2XwQE",
	51592: "!xCwQSCYJ!Hgd1HLGQFwnFzn75kT7MFnSZGBrLI8qIUXz3RV3Dgek",
	51593: "!8Kg03IKY!-hz52bpm1tppglx3YOahrYHshsQI6DO1H7WYuZcoOwA",
	51594: "!ZH503IKK!mjK0KJ6Cxk8rTV7UypyP50omU48qBTC5MgxkNmrGUSs",
	51595: "!4Xw02ayT!Iezs5EMfnkmho9F_i3SjiUkkswZvUnenwuO7-6ksmSI",
	51596: "!NDxwTA7b!71Tqml59odNc3le6Bi5xU8ZRzenvDaHcZ7PFW_lFbz0",
	51597: "!4PxwWK7Y!g5b86A6RBRqwIHaLi_Xuasb_kwp8Z6EfbTGrtqM9idg",
	51598: "!JH4ECIiD!BqKD-mpFgGnFAh5WBqGVh4qFS-dlbe8LFSNPW5oemmg",
	51599: "!wK4mCCJY!qTEWYOO-nR9p50qi4tL2335BGtOx8zZXjUxf0gfcKrk",
	51600: "!VK4WHKiA!XOny7ddUFXHWnqJ7QKWAf7rIMQEYVNSajalPpKd5Weg",
	51601: "!lXhQBApT!hCjrNCFm_au3PGYlNyrMCdDq_F3LJub_goLJZtRABug",
	51602: "!hXoUECIT!gbsxkGfYA4YECJBGtdrITDfLicPRchjriozklzSKQCA",
	
	// Calcolo integrale
	51628: "!oTogVQqb!9V4ORrywtouiJXcCsFkVIg0GAPK-jUYHJ8FUqBt85t4",
	51502: "!ACo2iKYR!7rvQnsR0BBQ8izv83jSr0Ps-OF9JBvWJOnP9vMS-2Fo",
	51503: "!8HgGQAaD!zKVoHXZDMvQydr_za17nj00kWtfS0jG1NhP1eBaHLrE",
	51504: "!YXhRyZgK!lJczsJbHE3FY-IPLIs_OIe2xs6O4y9G3S3zlJMx7jYk",
	51505: "!0Op3jb5L!D3Ehfdg9chpeJMddd3U2pY-hwLYnQ-dluMK_aIp336k",
	51506: "!cGp21SSA!tUM7HYHvLabhnvl_H2Ftg5sEHtTmxj3fuD7hTI3cqFI",
	51507: "!8bgyjSAR!ASwVRA5JbFCW21RkW0OBiqdR6EHzXU3tHMIxrqwIoP8",
	51508: "!gHpS0Cqa!E3JEFy4o0QTfbcC35_2qUsY2OqyNtUDywPQbldFult4",
	51509: "!cf4j2JLC!bEYCvaevtrynK59wH-bKgTQREj61HoKCCGOK8BlVvCI",
	51510: "!pX4lhRJQ!5-IpdoRibVSG2lnlgt9Dz5cquNkUtQJ7bxqDwrAJStI",
	51511: "!0C4HBbpD!VDxGd5xTZa7_SjysAjBSwi-55EeJCBwpyo5Nrhj20G8",
	51512: "!9Dph0LyL!1V8HS3G9L39y39hN5WQyv2pxzfVLfZV7__KoY6UIrLc",
	51672: "!4boDVRqB!pt6RgFpueSMvZ51uVgOfV9SyzOjTNN6sE76WbYPxEsE",
	51513: "!9fwn3T6L!FwbCz1ECi-lNLWaC-lxltEE9hv31NbcbImy9zzWQzCQ",
	51514: "!dawVRZKa!bf6QRAgLhQRii-_f0_gwRCRPsAb0yVf_ZaEYqXRt7R8",
	51515: "!8O4VwRKI!LhdCuH7U1Y_-zwtXK6mUHeVTg2bGbH_Qb_17J7DiH2o",
	51516: "!sG41yLpC!7DzInMTD0ZXvNZFWLAVn3h5uFNklsCwrEbM8GW4uq3E",
	51517: "!daxlVJZQ!L4hKir9ojUWNAz6L1ZwShLP8ZzQpB3Z1rpty5BH_kDg",
	51629: "!VP5V1LoC!g0uiU6DWGMdKcrCKt3qXqswQNbcL_lFnzge3-Bunrts",
	51630: "!IfgRQZBL!IIYWWwVs7p0nGCnlm4v8uNzaR4cZ0MG_VPI9Q-pAiEc",
	51631: "!Vb4lGJ4T!fACM-NKHJpRh5LidMM0vCroGJf2Rf3hmMWJiFd84wtM",
	51632: "!ZH4lCZIB!toGB-cRPAPMk_wh14xf7s9C55HJSQq6LzUsxJvPfLPs",
	51633: "!4To0WYKR!Dinr0sqBdeP83FqribVfFjY67bCCDyAKy1-mwcgrg4k",
	51635: "!xO5xkRzD!w00lrMQenbXx8VjqJGN2NktrShpB4tfMHTM0Z6Gp4SM",
	// Manca qui: 51634

	// Metodi matematici
	// Manca qui:: 51364, 51366, 51367, 51369, 56102, 51374
	51372: "!QKwy3CYa!-rIfCanH6sU6b1Afa_hCMIbQnBnIeY77a7vZLRPnYfk",
	51373: "!QbokCAJB!cQJ6dGqT6kq5XVR9mOAZq3STek6J42Ya9b6gACdPrnw",
	51374: "!gSp2nQZB!UWaFB5GRdySIDHOa48QXFhxADZvt2U4W0vEZ5jkIeXk",
	51383: "!dHpkzaZJ!RdqkZyaNSmO90KNimDliZc7ii_IzuN1gLuUH0a5VFfY",
	51625: "!xb5AUaba!5S7E7lteDFnxOBZ4VIrAsxBwEmegoImbrxyWmFUjdxo",
	51376: "!9e4yEYJT!3Z5rBpSnR5VaUKdVyx4l7Z42AVXlzniRoY6y3t1r7G0",
	51377: "!MXxAzSKI!wqd_BEt6a-VWbNr50dm2b16KtXskzcx1zjBiA27hkDo",
	51378: "!UKwSEaAb!DkhACpUF6XS0HpB9TA-VWgpfGRslsctzK1jaF9gD4CQ",
	51379: "!ZOwyHYTJ!SISAtG4zDVZNpGFG9dk84b27aDgsdM01zbSQj5Ad5a8",
	51380: "!wa42UIha!ZM1z6S-iZWBEiRMFnoRNOrRVSZspXeHUk6z_uf_XAwA",
	51381: "!pP42jADY!OimnA4o9R3iIZVs9yhOf1lyJtUYRUeIXESkinUunvJ4",
	51382: "!lDxi0CLD!Jg7eDIrnMgCBU7bq6miXYf7BpDPfRU6KBs3v-g2DLj8",
	55484: "!cT5EGAyB!zX2a9dy3noZDZos_I5zQhtASHJb6wnwho2ej-OXRYZg",
	56103: "!JDxWxYYY!rQO8ykiK84eX-8R-Otvv1EA--O1x_fPNA-ps350ikWY",

	// Metodologie di programmazione
	51636: "!9HhGHQQA!yYuO3BdIKleYB56kE_GFkqoiM0W6zT7vMPKSzy2Mzgo",
	51638: "!tGhGRIyS!lJivZlUM7FsIohHZINjCxs7Z1Owe4s1T0VPoh3ouVIk",
	51639: "!pPhihIgR!uBVnHWm48aTM_D4iNcn5hbTW_CrKVfbAz2i9XZJH0tg",
	51640: "!dGhggaSJ!Y8w6RrIwGLFGRiaS1wlL0t5sDLoysoMVBZBd0SHCIRU",
	51641: "!lbwGDaQS!_Yd57nnNhuJ1CgElUc7DXj-OkrXqSn38eCJgv-BSOtM",
	51642: "!VPowUCYK!neb_ootu3JrrlFlAI1JR0WKw5OA0VrJxfwPH49p4Gws",
	51774: "!hSoixCpD!HkeARqslG1HuL5r0moojfEJu-hAVepPIBYV5eqNpOes",
	51777: "!lf4EDIyS!2C5ceLPFbGbtnvRLA5PIbEwfQbgEWpEZONjxCLbI8Vg",
	74971: "!ROpEmQrB!eWb7FW7sB5MWkP_SifEL6UvMITFrWkWgotG5BpPRBLc",
	51779: "!ECokhCZL!ass-DE24x69dnRcjtlnQV6pjlVRa87NkYvPF_rb4vzY",
	51780: "!RCwASa7Y!LQxRTZAQ5rNnZh4N4bIQPKLre61kB869neoRBqY3Tw4",
	51781: "!gKpWlCCR!PoNqUbJPIgKI6MODB6OS64MPlICR3oaApEtoYzWZmBU",
	// Manca qui: 51782, 51783, 51784, 51785, 51786, 51787, 51788, 51789, 51790, 51791, 51805, 51814, 51815, 51816, 51817, 51818, 51819, 51820, 51821, 51822, 51824, 51825

	// Architetture degli elaboratori
	51385: "!xSxglQhQ!rJJYzoEi7wrbQtFtue1xnryHtrlrb0DiQNty3uJsAz0",
	51386: "!9SpSWQRJ!SnZEXeJkq7Z_oaXq_jxZWoz_VBbA3CT6jP1MAAiIarc",
	51387: "!9G4E3YqI!0R1zXBxXmiuuNg6BY0eNFBN4p5INiJmmPUD1SdbqX5g",
	51388: "!xfpGlKwD!74arVMIddme61y6ZS8R_KJLOcbgy09Oz1RVzIkNQark",
	51389: "!QfxCXaYL!d0omKoNhktiumFckyec7EC5pW2q7wTglyVEkiPUqXOY",
	51390: "!sehCwaiS!uOukBCMNlNHISawVk8kyFBNnIY3pTc0lJGqWdQru3y0",
	51391: "!0XhGAYab!a06MscrdJeXxO0YPzaOXk4-Sh50UFqLhJOP7MFRqTKE",
	51392: "!FG4GXaTL!88TWNtbVbcAkrMjYuvNsSS-9tSNMnVRaPzxxpURAqvE",
	51393: "!0GgkQA5Y!wBFP5qYGMJLGInkPqDfDQfJzFpBxm12JaYould1zFN0",
	51394: "!wH5GyQCC!1ZrxApsy70QHKzmRSkaUy3ameLrLzUWBPNP3t1zT0BA",
	// Manca qui: 51395, 51396, 51397, 51398, 51399, 53578, 51945, 51946, 51947, 55014, 55015

	// Sistemi operativi 2
	76207: "!UCwGhQYS!MAFspbQFZ_S6XXyNRR5Zgg5uqMMHlhS3d38e81QZ82E",
	76188: "!kC4yjKTB!LCC8YLe8u2dgCJQTaS7XAsd3SphvqWTqP9BAoV6Yi7k",
	76110: "!oLxiUSiD!ieQAcjNpNRU79NZLEsJNIRcoXGCDugdU4SOxrCwpY5U",
	76079: "!4DokjSYS!9Vdo_356fayYyVGfp8gUs9-PxBCGfLD2yRTOaCuDM-4",
	76080: "!BOoiXA7b!IlNhqEmu3rgA8vXktvSFT2-4ITXUS6KO_BwWZuumLRM",
	76086: "!sO4EmChL!ioT11hupKgfepNUXNQEw3_lgiPU4A9jgw5ZHyiZTkRk",
	76129: "!oahS1KSK!reAyTqlmPlheA8pEcc6xfFKAOcYgMvQH2wWt6qf6ZaY",
	76112: "!1f5kGKbT!HhNpGe96W0khZu3RwVw_YwaYCLn5RhVLGzoeGAChkME",
	76229: "!Yb5kEIjC!yxstxwfPqDCTLuxYuEuZzeykiW_aTpjXZdcorMnJCLU",
	76257: "!Ebom0YQC!7W7VV70kwvgV4V-sDtaJ-F2kUxoZg7YQH_aURx4VA_A",
	76128: "!BD4GCYKS!iBEaKonn0WFyQFFeS5eRwVSoipXad0IAol9tcXo2njg",
	76113: "!kPgmlQzB!mKgJTaObt-Gbbw_PVVpiMJeaTFrwNZraOrojdAOgTaQ",
	76111: "!kTxUlIKS!RWo_nT1y718MKRYM1vuI1Wapl8n38t1QZ5aKgdbgO00",
	76130: "!kf4SESoJ!lxtJocJMAJvHUU6GRxqQaZWY3uFZ5j_aB6ZjMnWYsms",
	76205: "!EexgmQgJ!dmvJoeDcbYNyyMOQ4UbY17VJEda2ATRNGCadOMXfHmc",
	76206: "!xGwy0Awb!HDFbwF4AOlfOACPPUY2WFsI4sJ-ude616JhJyhMO1Os",
	76211: "!dboQlIoA!ObycF95VvdG_YH5H7dyNNZpyuMpwKGp310wWjkAGGdI",
	76238: "!BS4iXSKJ!UWVSgDZdoTmeL0wnpyMbGe1yOTSssImqs4t1cZHbWTo",
	76270: "!kHxwnKjI!-7c1-uLh1uqphnnT610AsvbJhSUHSnOCphOYKaamBAY",
	76272: "!pD5kAI5b!5lR4-2cm9237HtiqC88YdmCgfQ-yEBkoQhSyyFd_3Ck",
	76310: "!FLhkgIxQ!WdrNUywA683T32Jbla9rgfvnygoIv-gw2HCi1WBxw6Q",

	// Progettazione di algoritmi
	66224: "!8eg2hAhI!8Clb8_Gtoe1Udlw2yZkVSvz5JtplY6d4m7EeOhiEU2A",
	67347: "!tPwkxSYI!1VYx73ko1W8iM7HIO69nQ9AKw1HWCeU0DerOuuhQXZ0",
	67348: "!MCoQ1YwD!oXJk8VQuAzuZIoqeOeCkg3O7Ccu_TdQStjHc1Z7uCY0",
	69250: "!hDgS2IhA!tVGBUrX-PfiDGycQz199uV2CEMMoUGkxPxKBJ0k4Z04",
	69251: "!xGg2GISK!iIi9s9QbfEnrnBZKCfEFjMXmB_snEURvQ_-AalJppOY",
	67351: "!pWgg2KxY!-WJjpT1193WJvntUcpWOgNOpZG9zAkKQC9qvrGyiDJw",
	67352: "!FWxiVIxD!AjUJSgpEZPAK1gkM4as49io7-co7h4LHElgPNtC8DpM",
	67353: "!oapCgawL!dznMSfOW7hSeZMHoVCGqdKEZeZ93K4AOA7bmpDRt24Q",
	67354: "!RC4y2agJ!U1TsKHgPfuqp4z-E4UYKwfS1ma_HPU5Ckle6IS5v9CU",
	67357: "!Bb5CTYwD!aUMbGjgWDmhRC7xnTr59zzKOxLiaH3ZFHMVp-c9l6p0",
	67492: "!lTp0iCyD!XY61PuTAqO2YZFeaegnggcYuR6F3Fxx7x6qX68PNMn4",
	67572: "!0ew0jILI!SHpNiHJ9_Cjj6IyAoq01WpJAfCzgcuW2bIqryxtaOmo",
	67573: "!9ahygAZb!oUJJocm8WFcIQ1LIxl-idZUq-hahyOY0DzzkrbYJO58",
	67574: "!MX5ElaBS!B9zJQRi80whQ50B5z5RPcFSs9L3qRxL6aSrSczsmnbs",
	69252: "!lXhmBC7Z!HhtBEnIk98ouaTvwlsNdnLOXGUA24dZtwi_z7sPLwPw",
	67584: "!QepGUYTS!FiKfuE0SVDxiR-1W86SVgxaUAFbYto-GdUXX1O3HO5c",
	67585: "!UT4iCCaZ!U96B4-iuOWNmbqM0h216s9yQl0vRNuqEpDllITEJLJo",
	69253: "!wb4gxKjC!ogK3UUQGRbjQqmwiGs4SDb7uA8s46ORMt_Mr-2SvNu8",
	67478: "!5PgiTY7I!RwU9Q32PcrYC8GiL2ihrUlafkaz-C-nVbmBvVpu-P6A",
	67476: "!BLhwEILY!RQp6r8WbypwmW136-dnL5MtYWNx9WrpdOqG8A6PNOdE",
	67477: "!5XhyWKwa!4JymcQ7fP6OSTYXE8-lw4lOe-PFn4YB8cKBRXak74vI",
	67475: "!wLhkHSoA!H8cFdUKYwFz0g0bJya3Dr98687M-xaW-KiJgmdwFX7s",
	67430: "!QWgQhCpI!qxc2V2MrCpNeDTOl7sOx_TiO-V08Y66QDILfAYKzk9w",
	67370: "!sehUFYBZ!QvdBCVuC28MN0OS66ayQaFlMiCbaHF6mChtuvKmF93M",
	67369: "!heomFaIb!W7DygR5h_DL3HnFVMfi0JCkyWlD0_1mtkvK9hdgdLxc",
	69254: "!5OgSWCYB!GSuTIxbGBcT5a1Juk32wb9K4GyD8HcV6JtTlnkmGAwE",
	67367: "!5L4G1I6b!Zz-PuOQAwFxllnXdP2thWA9yo0he7TPOJulwwJhz7RM",
	69255: "!lHhWgaoS!pGhK4Ck82mkXB36_EcSfJI-wsOXwNlG9rIhF3q02jkA",
	69257: "!cCpyRYwI!mfYh37YJli6wReTbWfu3GHzl1BeHk4fNQa7RA9Nzz1M",
	67364: "!hLpyTQxC!nQqPNNB5_IroThLi_tbneonecUXNz246MWOdvFHpOtk",
	67362: "!IWxARKqA!05YfsXlouAC9gO0r79F-WZ3o4Q1dXLeGXZpIIQmKJD4",
	69259: "!ISxwzY6L!VcFGhb9fnz9fCy-B_w9Y9mc5W7e4t0BgGRFvdk5ejBU",
	67360: "!pOpm3CpQ!43iqaOU6AQRA64M05L3mijLO8rAgTP3vBI3obTZOcwc",
	67358: "!EC4CjKSI!suiKPlWT4Q6VwfGAx14SpYs-O3d88bylA5OBcKAKY6M",

	// Reti di elaboratori
	67787: "!ALxESYRZ!n-Dt_jUuJdVHYtFdDz2RkJfgAUUIcLuLT3ndB3PZx7E",
	67809: "!Vf5UDabD!4GPLbDNS6eGAIzDDf1prXeY11voqD_TLaw5YPve16qM",
	67811: "!pW4UgIaT!mzka_lhyfrFVqhj9qaR3vOPVR35BWDU7-VcOntGuP6E",
	67764: "!gL5gTa7S!71TFTXhltjEBp_AHHI_mJJMClehWtZWDBn2b3OWp6HY",
	67765: "!kSpyVa4T!Xpn7Jmz0BiC0_tRmT2_HaD0aPYuFqgqWMiZk6NfvGEQ",
	67786: "!kHwSUaTa!TmZN7ziVsGx5dwPywVohOOfwgFLU_esTRkoy3hdUH2s",
	67794: "!pDgUBKKY!nBB619l_oot2EF_lup7wu7xi6Y7g65RSkgyJcvNrRFk",
	67907: "!IHhASKJC!QaUsahJUod3RgTZtUO6RtPzygKb_W7fJ50_fQgDsJqE",
	75570: "!JS40GCST!fwpCFA8s_rhTYmAnGj_dCJKScuo35uq3Hs6FWprReik",
	75571: "!9CwCEYhR!tt2U0PZ78-LhUNR_GKjndhzc21ccCAeCoO0kiROe5Rw",
	75572: "!lHwzWRDA!1AppWdSredcXPosMLo2L0Xh3JmaMm7aYI-Lp0qCRU_4",
	75574: "!IKwhwRAC!2-W1AOOlIG-TdhkBSzE1Ja0FM-1Mu6B1ZLQtLJsryEU",
	75575: "!RTxlnBgB!JP35v_JkyXS3J9mHZSxwiId36sZAR7em5rtWe9sYnoM",
	75577: "!hb5FwZgY!TpV8hpcuDDqKOhAZgiOpLv6n-flU48ttWG2Yr6cr_YU",
	75578: "!xHphCRhA!_0Tjkvfy7pd93eKksqeiB3Lx2F2hlEEBjfvlqxCR2sg",
	75579: "!sLhynIBB!DdlgKr8GmQjbcOgiK5BV7NnTplJYeOwdvOtw07bjQPU",
	75580: "!4DhgGIYQ!66G9IlywfVlYVBoDS_6j6M5KW8HOLbVC_QEkiiRRT6Q",
	75581: "!ZXhmhCaT!v2ZJ-EmfQs5aUD6EVEAgOSq25P1-xEnhc-X4Oo-_4RU",
	75583: "!5CoWBQYQ!BjTprMdNKDLNP7Q2WfFtXQeSdomcDRqUidTB9TB5-Mo",
	75585: "!9PomlYTQ!PsVY3E_L2-PI0KGLjpg5KFKWz__opOpdZhohkSX4zwQ",
	75586: "!Rf4iUY7C!09sMz4zvmD_VtANpAHQtg1Q-Tq-RMkrQMBlvoKTdcxg",
	75588: "!9e4gkAQZ!SuC7-bWYi9jVFJqZ7wxGX72Fuqqhslk_Fvk1otz2QeI",
	75608: "!dDxSVArR!dHpdKUN7Oq39oTRhaP0iQ49QCLmmHD_o0YkwJZfCInk",
	75611: "!0CgmDCwB!phReTO_XjReVszWhWW3kqgvZWqoTbqhLbVEbEcGU1gk",
	75613: "!lfhExAya!-0n2aHNNwDFtI02duV8IrVvNg0gzTyvZZKhW4tzClhA",
	75614: "!RX4UXIhQ!XgYYLpzWY0axA_Ijtnb-0Z1ZG0ux6BkmvIgVq1NW0P4",
	75582: "!YT5WxY7J!UHLKagoS23rd3YWWDP_58Id8z_PafsSl_YQ0H2LAfyY",
	75584: "!tWwC1AJS!WUjyTFFj-8EfvyIozGmFcBQnOFI5C_0rIXe-5fzLgpA",
	75587: "!0egmAAwK!AuXJz4wnKlma9wpEwlzPVSQVpK0ESsd8N7f7reK-fz0",
	// Manca qui: 75784

	// Programmazione Web
	115864: "!FGYVCAYL!r1AmI62C6h-Lf62gS18WSYu935juWu0MvEQmLbMC1WE",
	115865: "!heJ1UARZ!6eIO_SXSsrotoLCHATLAVUabxg5JRym7lTesYtFjjKs", 
	115866: "!RSJF2SaT!MkMfIxU8dCXj9xupDa-x17GkrlxzWg40sLHM5J5Dx1I", 
	115867: "!IaYHVKRC!io9ZLUFxH9SC4mVp0tkAFw1sSaW8HiRxEQ3wrrhSCUk", 
	115868: "!8GZTwIzL!hrWhnSbpgDvjxlx_RQiP-tOzLsHonNB7iWjWGlUj0iI", 
	115869: "!VOwRSKaR!e02ih8dBYaY-cw7STf5g99n9XOi2QxzTf26CAj7ZG24", 
	115929: "!1K4XTaRC!bz0sY849Sahgl8RcaQC5uE00En2SwbUPq_n4vIjkD4s",
	115930: "!BL5lCIIQ!DCJS7x2YA8GwkUNKUspe9mYW8IEZ6hwE47x54uoCCRk",
	115931: "!8b4BFC7a!i2cX2H4iHYjg77jttCM61Mp9bGZjgnpdHZeMSqpJnIY",
	115932: "!gfgDga4D!wtft0sht4Qjs5YeqpM3INsG4tKtKKj3IpAamP8AbWjs",
	115933: "!cf5nWCSA!GoaxeSdPO8HN9QmKQYgxuTM9a-2zz6ifQm_IQ8agvxA",
	115936: "!FbpBXAjR!9y7lHvYrCQmXoG7qSbB8w8cWq-Hiv7F9sPYx8QCjVKc",
	115940: "!MH4hCAAJ!j-G9v9qqaP-I1WWesDxiU2YI0qzY-tXAUeJCx855VdM",
	115946: "!AahXCQ7K!yjXHcKYALcdoMpHs-5yDjNNqTU8G4F-xiMIgYLDw5mU",
	115947: "!4b4VACyI!eAL1B2r4izAkZhY3xrKA79eLsZZ_IE6MFbl8jT9-Acw",
	115950: "!9bp3FA6D!RkRE3Q8AokPX0bERJA0Ogeq_AOHPeeNY8qzCL6H80Zc",
	115953: "!VLhHxYyD!1lpqwc58hUrPqXlyHdNmU9unbuc3cAbQGh475aaYgs8",
	115955: "!QWpBkS4a!DYTmyURy9X8MOtW9ChuurJEZQ3gafFwz8TxqzF4evBQ",
	115960: "!lDpznaxS!C3bfTvdGiHRlepfcAZf3RNh9wrFn63JojoG-sCHlcIA",
	115968: "!oKwD3A5I!HUIOZ_HXt_DEwiwp-wgf6Je5xdH55sTp9geznBOyaog",
	115969: "!hX5HSYqY!yLPJ1216xR_9mUrgM_KMdr2bzOHGpfAnTQZH4A_xVHs",
	115970: "!JbxXwYyB!eM_cXc9cN7gTJuk-5HooE6TzRTk3J_6ZXKuAeNqr8R0",
	115971: "!NXhnRCba!d90B3CSD7f81izHChYwzjV8yXaIOuW4Sd1Z8afRNLuk",
	115972: "!QT5T2YCC!hg5bR52AXhUTp6U6v8IRtp90CqnwrvSt_h_czGIKBqw",
	115973: "!dSBhUKZC!Dai2nNFVKVuTci0cqNjdO1tpIoy4OnssqV-UjknZ23k",
	115974: "!pWADWQ4b!pCk-sVhyMDXZFoAIeUpBwoCqdTTHNsvQ_dmEXK3R8mI",
	115975: "!ESZx3aqY!f1QKxNwvVplIQZxaLq_oX9GEe4hXagSyV5x1c5dVgR0",
	115977: "!EeIRCSKJ!yLRRdKxxRdYd29t_Gd1x6ZzLENO0RTSfPwDbTdW3-bY", 
	115978: "!lbZzgaiC!i3DoA3IVFL2A7G1tXoBimOP1jMcs4HZsMIwt3Aue_y4",
	115980: "!9WJTES7I!GCqsOdo_io9giQwl5CVNJ26HeCaphdPJKfScHGuBoWg"
};

function removeEmbeddedVideo() {
	var videoembed = document.getElementById("contentframe");
	
	if (videoembed) {
    var idrx = /kalvidres\/view.php\?id=([0-9]+)/;
    var parts = idrx.exec(window.location.href);
    var lid = cdnvideos[parseInt(parts[1])];
    
    	if (lid !== undefined && lid !== null) {
    			videoembed.parentElement.innerHTML = '<iframe width="640" height="360" src="https://mega.nz/embed#'+lid+'" allowfullscreen ></iframe> ';
    			console.log("element deleted");
        }
	}
	else {
		setTimeout(removeEmbeddedVideo, 500);
	}
}

removeEmbeddedVideo();
