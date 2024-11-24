// script.js

// Simulating a HashSet of email-password pairs as an array of objects
const validCredentials = [
  { email: "DexterMorgan21@outlook.com", password: "Password6969" },
  { email: "DexterJack3980@yahoo.com", password: "LL4!4&H1!CGOLo7nRMpX" },
  { email: "MorganCooper47@outlook.com", password: "KY!ao#1pI|$+qdl2iF3a" },
  { email: "CarterHarper6@outlook.com", password: "xwptP9XVv-uZo!ABStD@" },
  { email: "WalkerCarter2@hotmail.com", password: "L+-@DWixRoVTqmp3a|k+" },
  { email: "CooperParker7@outlook.com", password: "0dZyXLyPi1iqnXxP#EOo" },
  { email: "CooperParker00@gmail.com", password: "pDtluEexMw|8H0JDO!vc" },
  { email: "DexterDexter69@gmail.com", password: "021G7G@-8RjpOzhkEn$V" },
  { email: "JimGarrett2817@hotmail.com", password: "7F*Xj#CZIp+YV3TN2tCD" },
  { email: "JackMorgan55@gmail.com", password: "G5V24nJSaX@N+xK6vk5v" },
  { email: "WalkerCarter@hotmail.com", password: "hP7iONPI7XyDm*k#0!39" },
  { email: "HarperRiver29@outlook.com", password: "ML2&peEM@mK?ixmPpJYp" },
  { email: "DexterDexter9296@hotmail.com", password: "hVr$iM05xiqSMu*OkEzb" },
  { email: "MorganDexter658@gmail.com", password: "DeepStateWatchingOverMe" },
  { email: "HudsonHudson348@hotmail.com", password: "X0CtDDbZmulAqAO5KxTn" },
  { email: "CarterCarter9@yahoo.com", password: "Traillair345" },
  { email: "MorganWeston383@gmail.com", password: "f�gelsk�dning98" },
  { email: "TomMorgan@hotmail.com", password: "y%$?W@KBT*VjXALgB*DY" },
  { email: "HarperWalker75@hotmail.com", password: "9e-1@UCrl&@ayey4byNy" },
  { email: "WestonEvelyn@outlook.com", password: "KS!|whMJS5e%ngLVAN%j" },
  { email: "MorganWeston9335@hotmail.com", password: "vifdsuhewan1337" },
  { email: "EvelynMorgan913@outlook.com", password: "gT8RiRDl6MmuFIqtSlj3" },
  { email: "EvelynJack6@yahoo.com", password: "0000000001247218feggelreite" },
  { email: "CooperMorgan@outlook.com", password: "-CjfV8AT#4H#1apmYj6j" },
  { email: "WestonTom57@outlook.com", password: "T$zQ0UdPA?uxX*-6K@Ql" },
  { email: "DexterTom170@yahoo.com", password: "F+3z@BCA*XXgLOQr7!qC" },
  { email: "HudsonTom3@outlook.com", password: "WtxWwx-8lDw#CmL-9I&I" },
  { email: "JackMorgan839@yahoo.com", password: "0Jw$bOq!5POE*S664Bk!" },
  { email: "JimParker432@hotmail.com", password: "6Xvv!qDsB0BJ!bMkoDE*" },
  { email: "CooperHudson705@outlook.com", password: "03y7Z+Z5fa%tmRbqc6+u" },
  { email: "GarrettJack9@yahoo.com", password: "O&2tU1oa3EIVUCOho!WQ" },
  { email: "JackHudson@outlook.com", password: "uiXyWRMFnOs4AYEBnG7N" },
  { email: "WesleyDexter3@gmail.com", password: "ds7qV!&Xb+4idGQnlI21" },
  { email: "ParkerTom7@hotmail.com", password: "123Ugga Bugga5656" },
  { email: "DexterJack2996@gmail.com", password: "BroccoliGottt11!" },
  { email: "JackParker9353@hotmail.com", password: "jsadlerjs" },
  { email: "RiverRiver3@gmail.com", password: "rO2A$t67SkP3u&eCmPOr" },
  { email: "CooperCooper0@outlook.com", password: "xn*4tnr0m&5JOANxl%A%" },
  { email: "LinconHarper783@gmail.com", password: "@KNGa!iwUW3ZxprGSHeg" },
  { email: "RiverLincon73@gmail.com", password: "$ne%Ktmnui|j#y2v|pg1" },
  { email: "WalkerDexter36@gmail.com", password: "ZzzSlewerDroughtzzZ" },
  { email: "CooperCarter@gmail.com", password: "1NallePuh" },
  { email: "GarrettRiver30@yahoo.com", password: "-sS6I*TgdI|VoLZELOha" },
  { email: "EvelynWesley81@gmail.com", password: "99reindeerHunterGuy99" },
  { email: "JackDexter7118@outlook.com", password: "dwq2i3pQjz5&+Afh?NDj" },
  { email: "RiverParker102@gmail.com", password: "Glory manet" },
  { email: "CooperHudson1950@gmail.com", password: "N%lYJRGQna*Ts*lHAaAo" },
  { email: "JackCooper@hotmail.com", password: "I6o|cP6H6?*6Ygx$sj8P" },
  { email: "EvelynCooper380@hotmail.com", password: "UBDIE6lm8KVa9-WZf0$J" },
  { email: "CarterTom7449@hotmail.com", password: "kiBmHJSPVZZJvMO4yHe5" },
  { email: "TomJim699@gmail.com", password: "os*&ZW?BxjqjMaAi8+Ct" },
  { email: "HudsonParker@yahoo.com", password: "+J266XIeIcayZO@poV1*" },
  { email: "WesleyJim81@hotmail.com", password: "ma!%@ua4|+Dnzll9VE-M" },
  { email: "JackTom940@yahoo.com", password: "password1234" },
  { email: "RiverCooper705@gmail.com", password: "rr9c2qt4diZv!QbZdw7p" },
  { email: "LinconGarrett@outlook.com", password: "S!P&a?XAvdHTU|rfx@rf" },
  { email: "EvelynCooper@outlook.com", password: "PNG!UpWrxurNbJ%73&t%" },
  { email: "TomParker2072@yahoo.com", password: "4uU3hv7S&pePs7KcBKTE" },
  { email: "JackParker@gmail.com", password: "He*yeb8Zrpc&IPIlTxaP" },
  { email: "WesleyTom70@hotmail.com", password: "$18KL9Io$84&iR8Zfp4K" },
  { email: "DexterEvelyn@gmail.com", password: "Z!+jmhbEOZiq#kWdJYvR" },
  { email: "DexterHudson46@outlook.com", password: "+m@f%YqISI9oCC-C+!qq" },
  { email: "EvelynEvelyn1@hotmail.com", password: "ckwy!flmhXDi2tLo2FbP" },
  { email: "WalkerDexter5892@gmail.com", password: "d1HS&!kUza&XO?q039gb" },
  { email: "WestonJim5@gmail.com", password: "7hXCI#6NrSeb3q9GCtPT" },
  { email: "WestonParker@outlook.com", password: "Sommaren12" },
  { email: "CarterDexter@outlook.com", password: "a2K8z?PT6+k6wbVlwjTp" },
  { email: "ParkerHarper90@gmail.com", password: "JHbde$e#Ql!J!ywi|QE*" },
  { email: "HarperHudson1955@gmail.com", password: "+|L&mwmuK|RqsnKFfK0b" },
  { email: "WesleyWeston371@gmail.com", password: "Nz*7ppyTR!?U3zR18Sy#" },
  { email: "TomParker250@outlook.com", password: "WUfSbVX|wk@3S%20JlRm" },
  { email: "JackCarter@outlook.com", password: "zAs2onN5qko!|Vq8SXIS" },
  { email: "CooperTom6@hotmail.com", password: "LqF|RkXwIpz2$nwTDYHA" },
  { email: "DexterJim05@outlook.com", password: "XxSlowMyxX" },
  { email: "GarrettHarper108@hotmail.com", password: "JazzMan4" },
  { email: "DexterWesley@gmail.com", password: "jNaK%-z$SaSmnr!Xuf4o" },
  { email: "WesleyWalker98@outlook.com", password: "i4RM!Uyg*C+D*3J#1JgE" },
  { email: "ParkerHarper06@hotmail.com", password: "$D31YvDqIIO$Mf9V0B-L" },
  { email: "JimCarter6@yahoo.com", password: "TachfWwChe9E%6Poi7ce" },
  { email: "JimCarter5833@hotmail.com", password: "B�stal�sen2024" },
  { email: "WalkerHarper4@outlook.com", password: "wItwjvvC0CjWlxGCq4!Y" },
  { email: "HarperRiver8@gmail.com", password: "n3l$1z1MRR8u9glXzOCd" },
  { email: "ParkerWalker@outlook.com", password: "+3mzX4wdXItjwVWzY&6%" },
  { email: "WesleyJim675@gmail.com", password: "afton_44" },
  { email: "MorganTom8@gmail.com", password: "PrositSafePasswordBlalaLlala" },
  { email: "JimHudson25@gmail.com", password: "sy&i-H-sr7QYazMaoUj*" },
  { email: "WalkerWesley6@gmail.com", password: "2tAZOhKnWOk9$#SDAJ2R" },
  { email: "WalkerEvelyn13@gmail.com", password: "Consumed007" },
  { email: "JimJack@hotmail.com", password: "pcGFGO*n%hkajxw*i|#Q" },
  { email: "WesleyTom5112@gmail.com", password: "53-tnoV&?Beyi!l#E&eD" },
  { email: "EvelynJack3943@gmail.com", password: "yisRcpfuW2lzAbg7|Sl?" },
  { email: "WalkerHarper3@hotmail.com", password: "regnrock17en" },
  { email: "DexterWesley485@outlook.com", password: "ShPOL$2cMgM-GqH7hr|j" },
  { email: "CooperJim@yahoo.com", password: "DVOkzsAZsRmmcI-gY*Gc" },
  { email: "HarperHarper86@gmail.com", password: "9|%w+ROS3L*PE3-O9$-" },
  { email: "JackGarrett@hotmail.com", password: "qTHqU|1s6F5cxcu3f?71" },
  { email: "GarrettCooper04@yahoo.com", password: "R*GD5AW@hFidRVH2#p#N" },
  { email: "JackMorgan1343@yahoo.com", password: "Nilsbrojham56" },
  { email: "GarrettRiver8@gmail.com", password: "DEJM9d?oc+*HZGha6j9!" },
  { email: "HudsonHarper641@gmail.com", password: "Y3V$|Zr*a1ACcr#m5fxb" }
];

// Function to retrieve a random email/password pair
function getRandomCredentials() {
  const randomIndex = Math.floor(Math.random() * validCredentials.length); // Generate random index
  return validCredentials[randomIndex]; // Return the random email/password pair
}

// Example usage
const randomCredentials = getRandomCredentials();

// Function to append the random credentials to the "Invalid Credentials" section
function appendRandomCredentials() {
  const randomCredentials = getRandomCredentials();
  const invalidCredentialsDiv = document.getElementById("error-message");

  // Create a new div element to hold the new email/password pair
  const newCredentialsDiv = document.createElement("div");

  // Set the text content of the new div to display the email and password
  newCredentialsDiv.innerText = `Email: ${randomCredentials.email}, Password: ${randomCredentials.password}`;

  // Append the new div to the "invalid-credentials" section
  invalidCredentialsDiv.appendChild(newCredentialsDiv);

  const newOutroDiv = document.createElement("div");

  invalidCredentialsDiv.appendChild(newOutroDiv);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission to allow validation

  // Get the input email and password values
  const email = document.getElementById('username').value;  // Using username field for email input
  const password = document.getElementById('password').value;

  // Check if the entered credentials match any in the validCredentials HashSet
  let isValid = false;
  
  // Loop through the valid credentials to check for a match
  for (let credential of validCredentials) {
      if (credential.email === email && credential.password === password) {
          isValid = true;
          break;
      }
  }

  // If the credentials are valid
  if (isValid) {
      window.location.href = "../logged_in_page.html";  // Redirect to another page after successful login
  } else {
      appendRandomCredentials()
      document.getElementById('error-message').style.display = "block";  // Show error message
  }
});
