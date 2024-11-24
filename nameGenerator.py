
from random import choice, randint, shuffle

def generate_email():
  return choice(subnames) + choice(subnames) + "".join([str(randint(0, 9)) for _ in range(randint(0, 4))])  + "@" + choice(suffix)

suffix = [
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "yahoo.com"
]

subnames = [
  "Carter",
  "Cooper",
  "Dexter",
  "Evelyn",
  "Garrett",
  "Harper",
  "Hudson",
  "Jack",
  "Jim",
  "Lincon",
  "Parker",
  "River",
  "Morgan",
  "Tom",
  "Walker",
  "Wesley",
  "Weston"
]

passwords = [
 "DeepStateWatchingOverMe",
 "Glory manet",
 "password1234",
 "afton_44",
 "regnrock17en",
 "Bästalösen2024",
 "Sommaren12",
 "1NallePuh",
 "Nilsbrojham56",
 "Traillair345",
 "fågelskådning98",
 "BroccoliGottt11!",
 "vifdsuhewan1337",
 "99reindeerHunterGuy99",
 "ZzzSlewerDroughtzzZ",
 "XxSlowMyxX",
 "Consumed007",
 "Password6969",
 "jsadlerjs",
 "JazzMan4",
 "0000000001247218feggelreite",
 "PrositSafePasswordBlalaLlala",
 "123Ugga Bugga5656",
"os*&ZW?BxjqjMaAi8+Ct",
"Y3V$|Zr*a1ACcr#m5fxb",
"+3mzX4wdXItjwVWzY&6%",
"kiBmHJSPVZZJvMO4yHe5",
"d1HS&!kUza&XO?q039gb",
"gT8RiRDl6MmuFIqtSlj3",
"ckwy!flmhXDi2tLo2FbP",
"zAs2onN5qko!|Vq8SXIS",
"-CjfV8AT#4H#1apmYj6j",
"$18KL9Io$84&iR8Zfp4K",
"X0CtDDbZmulAqAO5KxTn",
"7hXCI#6NrSeb3q9GCtPT",
"PNG!UpWrxurNbJ%73&t%",
"y%$?W@KBT*VjXALgB*DY",
"F+3z@BCA*XXgLOQr7!qC",
"hVr$iM05xiqSMu*OkEzb",
"53-tnoV&?Beyi!l#E&eD",
"Nz*7ppyTR!?U3zR18Sy#",
"-sS6I*TgdI|VoLZELOha",
"O&2tU1oa3EIVUCOho!WQ",
"L+-@DWixRoVTqmp3a|k+",
"sy&i-H-sr7QYazMaoUj*",
"rr9c2qt4diZv!QbZdw7p",
"KY!ao#1pI|$+qdl2iF3a",
"WtxWwx-8lDw#CmL-9I&I",
"pDtluEexMw|8H0JDO!vc",
"TachfWwChe9E%6Poi7ce",
"He*yeb8Zrpc&IPIlTxaP",
"LqF|RkXwIpz2$nwTDYHA",
"I6o|cP6H6?*6Ygx$sj8P",
"N%lYJRGQna*Ts*lHAaAo",
"DEJM9d?oc+*HZGha6j9!",
"ML2&peEM@mK?ixmPpJYp",
"LL4!4&H1!CGOLo7nRMpX",
"T$zQ0UdPA?uxX*-6K@Ql",
"S!P&a?XAvdHTU|rfx@rf",
"JHbde$e#Ql!J!ywi|QE*",
"pcGFGO*n%hkajxw*i|#Q",
"9|%w+ROS3L*PE3-O9$-C",
"ShPOL$2cMgM-GqH7hr|j",
"ds7qV!&Xb+4idGQnlI21",
"9e-1@UCrl&@ayey4byNy",
"021G7G@-8RjpOzhkEn$V",
"Z!+jmhbEOZiq#kWdJYvR",
"7F*Xj#CZIp+YV3TN2tCD",
"DVOkzsAZsRmmcI-gY*Gc",
"6Xvv!qDsB0BJ!bMkoDE*",
"xn*4tnr0m&5JOANxl%A%",
"xwptP9XVv-uZo!ABStD@",
"qTHqU|1s6F5cxcu3f?71",
"2tAZOhKnWOk9$#SDAJ2R",
"yisRcpfuW2lzAbg7|Sl?",
"+|L&mwmuK|RqsnKFfK0b",
"i4RM!Uyg*C+D*3J#1JgE",
"wItwjvvC0CjWlxGCq4!Y",
"KS!|whMJS5e%ngLVAN%j",
"03y7Z+Z5fa%tmRbqc6+u",
"0dZyXLyPi1iqnXxP#EOo",
"jNaK%-z$SaSmnr!Xuf4o",
"$D31YvDqIIO$Mf9V0B-L",
"n3l$1z1MRR8u9glXzOCd",
"a2K8z?PT6+k6wbVlwjTp",
"dwq2i3pQjz5&+Afh?NDj",
"UBDIE6lm8KVa9-WZf0$J",
"WUfSbVX|wk@3S%20JlRm",
"hP7iONPI7XyDm*k#0!39",
"0Jw$bOq!5POE*S664Bk!",
"G5V24nJSaX@N+xK6vk5v",
"+J266XIeIcayZO@poV1*",
"4uU3hv7S&pePs7KcBKTE",
"uiXyWRMFnOs4AYEBnG7N",
"rO2A$t67SkP3u&eCmPOr",
"R*GD5AW@hFidRVH2#p#N",
"ma!%@ua4|+Dnzll9VE-M",
"@KNGa!iwUW3ZxprGSHeg",
"$ne%Ktmnui|j#y2v|pg1",
"+m@f%YqISI9oCC-C+!qq"
]

def get_password():
  return choice(passwords)

def get_login_dataset():
  rand_emails = [ generate_email() for _ in range(100)]
  shuff_passwords = passwords
  shuffle(shuff_passwords)
  
  data_set = ""
  
  for mail, pw in zip(rand_emails, shuff_passwords):
    data_set += "|".join([mail, pw]) + "\n"
  
  
  with open("dataset.csv", "w+") as f:
    f.write(data_set)
    print("done!")

def prompt():
  return "Your Email or password is incorrect" + \
  "try" + generate_email() + get_password()


if __name__ == "__main__":
  get_login_dataset()
  # print(len(passwords))

