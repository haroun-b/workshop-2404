const testTimeout = 1200;

const tests = [
  test("The secretToLife is constant, and it's 42", () => {
    let success = false;
    try {
      success = secretToLife === 42;
    } catch (_) {
      return false;
    }

    try {
      const ogValue = secretToLife;
      secretToLife = 0;
      secretToLife = ogValue;
      success = false;
    } catch (_) {}

    return success;
  }),
  test("The keyToHappiness is ever-changing and different for everyone, but it's always a string.", () => {
    let success = false;

    try {
      success = typeof keyToHappiness === "string";
    } catch (_) {
      return false;
    }

    try {
      const ogValue = keyToHappiness;
      keyToHappiness = "_";
      keyToHappiness = ogValue;
    } catch (_) {
      success = false;
    }

    return success;
  }),
  test("My credentials where art thou?", () => {
    try {
      return (
        credentials.username === "glorious-bob" &&
        typeof credentials.password === "string"
      );
    } catch (_) {
      return false;
    }
  }),
  test("A calculation without elaboration 😏", () => {
    try {
      return (
        sum === num1 + num2 &&
        diff === num2 - num1 &&
        product === num1 * num2 &&
        div === num2 / num1 &&
        mod === num2 % num1 &&
        pow === num1 ** num2 &&
        percent === (num1 / num2) * 100 &&
        avg === (num1 + num2) / 2 &&
        parenOp === (num1 + num2) * num3
      );
    } catch (_) {
      return false;
    }
  }),
  test("Eeny, Meeny, Miny, Moe, Woop Woop!", () => {
    let success = false;
    try {
      success = eenyMeeny === "Eeny, Meeny, Miny, Moe, Woop Woop!";
    } catch (_) {
      return false;
    }

    try {
      const ogValue = eenyMeeny;
      eenyMeeny = "_";
      eenyMeeny = ogValue;
      return false;
    } catch (_) {
      success = true;
    }

    return success;
  }),
  test("I don't even know what I like anymore!?!", () => {
    try {
      return (
        Array.isArray(thingsILike) &&
        thingsILike.length >= 4 &&
        thingsILike.every((thing) => typeof thing === "string")
      );
    } catch (_) {
      return false;
    }
  }),
  test("Who dares wormify my swamp?!", () => {
    try {
      return dewormed === "Who dares enter my swamp?!";
    } catch (_) {
      return false;
    }
  }),
  test("Fire! Fire! Fire! Put it out! Put it out!", () => {
    try {
      return (
        extinguished === "It was always burning since the world's been turning."
      );
    } catch (_) {
      return false;
    }
  }),
  test("😨 wormFirenado3000! help!", () => {
    try {
      return (
        noWormNoFireNoCry ===
        "I'd like to share a revelation that I've had during my time here. It came to me when I tried to classify your species and I realized that you're not actually mammals. Every mammal on this planet instinctively develops a natural equilibrium with the surrounding environment but you humans do not. You move to an area and you multiply and multiply until every natural resource is consumed and the only way you can survive is to spread to another area. There is another organism on this planet that follows the same pattern. Do you know what it is? A virus. Human beings are a disease, a cancer of this planet. You're a plague and we are the cure."
      );
    } catch (_) {
      return false;
    }
  }),
  test(".esimorp I ,dnuora denrut siht yllausu ton m'I 😅", () => {
    try {
      return (
        rightSideUp ===
        "What's happened, happened. Which is an expression of fate in the mechanics of the world. It's not an excuse to do nothing."
      );
    } catch (_) {
      return false;
    }
  }),
  test("No bones in my quotes, please. 💀", () => {
    try {
      return (
        Array.isArray(debonedQuotes) &&
        equal(quotes, [
          "I'm going to make him an offer he can't refuse",
          "💀",
          "May the Force be with you",
          "💀",
          "You talking to me?",
          "There's no place like home",
          "You can't handle the truth!",
          "💀",
          "I'll be back",
          "I see dead people",
          "💀",
          "Here's Johnny!",
          "💀",
          "Houston, we have a problem",
          "To infinity and beyond!"
        ]) &&
        equal(debonedQuotes, [
          "I'm going to make him an offer he can't refuse",
          "May the Force be with you",
          "You talking to me?",
          "There's no place like home",
          "You can't handle the truth!",
          "I'll be back",
          "I see dead people",
          "Here's Johnny!",
          "Houston, we have a problem",
          "To infinity and beyond!"
        ])
      );
    } catch (_) {
      return false;
    }
  }),
  test("Printer, why have you forsaken me?", () => {
    try {
      return (
        Array.isArray(printerRepair101) &&
        equal(howToResetPrinter, [
          "Throw the printer out the window",
          "Print a test page",
          "Replace the paper",
          "Print a test page",
          "Replace the ink cartridged",
          "Print a test page",
          "Turn the printer on",
          "Wait 10 seconds",
          "Turn the printer off"
        ]) &&
        equal(printerRepair101, [
          "Turn the printer off",
          "Wait 10 seconds",
          "Turn the printer on",
          "Print a test page",
          "Replace the ink cartridged",
          "Print a test page",
          "Replace the paper",
          "Print a test page",
          "Throw the printer out the window"
        ])
      );
    } catch (_) {
      return false;
    }
  }),
  test("Odd ones out 📤", () => {
    try {
      return (
        Array.isArray(evenSteven) &&
        equal(
          evens,
          [
            0, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24,
            26, 28, 30, 32, 33, 34, 35, 36, 38, 40, 41, 42, 44, 45, 46, 47, 48,
            49, 50, 52, 54, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70,
            72, 73, 74, 76, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 91,
            92, 93, 94, 95, 96, 98, 99
          ]
        ) &&
        equal(
          evenSteven,
          [
            0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
            36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68,
            70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98
          ]
        )
      );
    } catch (_) {
      return false;
    }
  }),
  test("Once upon a SHAKASHOKABOOMCOW 💥", () => {
    try {
      return (
        Array.isArray(shakaShokaBoomCow) &&
        equal(shakaShokaBoomCow, getThatShakaShaka())
      );
    } catch (_) {
      return false;
    }
  }),
  test("Who's laughing now? 😆", () => {
    try {
      return (
        areYouLaughing ===
        "YoU ShOuLdN'T Be lAuGhInG At tHiS, iT'S A SeRiOuS MaTtEr."
      );
    } catch (_) {
      return false;
    }
  })
];

testSuite.runTests = function (noTimeout = false) {
  function displayTestResult(isSuccess, li) {
    li.classList.remove("pending");
    li.classList.add(isSuccess ? "success" : "failed");
  }

  introductionEl.style.display = "none";
  mainEl.style.display = "block";
  runTestsBtn.disabled = true;
  testsEl.innerHTML = null;

  const results = tests.map((test, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}.${test.description}`;
    li.classList.add("test");
    testsEl.appendChild(li);

    const isSuccess = test.runTest();

    if (!noTimeout) {
      setTimeout(() => {
        li.classList.add("pending");
      }, testTimeout * i);
    }

    noTimeout
      ? displayTestResult(isSuccess, li)
      : setTimeout(() => {
          displayTestResult(isSuccess, li);

          if (i === tests.length - 1) {
            runTestsBtn.disabled = false;
          }
        }, testTimeout * (i + 1));

    return isSuccess;
  });

  return results.every((result) => result);
};

function test(description, testFn) {
  return {
    description,
    runTest: testFn
  };
}

function equal(actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }

  for (const key in actual) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}

function getThatShakaShaka() {
  return [1, 2, "SHAKA", 4, "SHOKA", "SHAKA", "BOOM", 8, "SHAKA", "SHOKA", "COW", "SHAKA", 13, "BOOM", "SHAKASHOKA", 16, 17, "SHAKA", 19, "SHOKA", "SHAKABOOM", "COW", 23, "SHAKA", "SHOKA", 26, "SHAKA", "BOOM", 29, "SHAKASHOKA", 31, 32, "SHAKACOW", 34, "SHOKABOOM", "SHAKA", 37, 38, "SHAKA", "SHOKA", 41, "SHAKABOOM", 43, "COW", "SHAKASHOKA", 46, 47, "SHAKA", "BOOM", "SHOKA", "SHAKA", 52, 53, "SHAKA", "SHOKACOW", "BOOM", "SHAKA", 58, 59, "SHAKASHOKA", 61, 62, "SHAKABOOM", 64, "SHOKA", "SHAKACOW", 67, 68, "SHAKA", "SHOKABOOM", 71, "SHAKA", 73, 74, "SHAKASHOKA", 76, "BOOMCOW", "SHAKA", 79, "SHOKA", "SHAKA", 82, 83, "SHAKABOOM", "SHOKA", 86, "SHAKA", "COW", 89, "SHAKASHOKA", "BOOM", 92, "SHAKA", 94, "SHOKA", "SHAKA", 97, "BOOM", "SHAKACOW", "SHOKA", 101, "SHAKA", 103, 104, "SHAKASHOKABOOM", 106, 107, "SHAKA", 109, "SHOKACOW", "SHAKA", "BOOM", 113, "SHAKA", "SHOKA", 116, "SHAKA", 118, "BOOM", "SHAKASHOKA", "COW", 122, "SHAKA", 124, "SHOKA", "SHAKABOOM", 127, 128, "SHAKA", "SHOKA", 131, "SHAKACOW", "BOOM", 134, "SHAKASHOKA", 136, 137, "SHAKA", 139, "SHOKABOOM", "SHAKA", 142, "COW", "SHAKA", "SHOKA", 146, "SHAKABOOM", 148, 149, "SHAKASHOKA", 151, 152, "SHAKA", "BOOMCOW", "SHOKA", "SHAKA", 157, 158, "SHAKA", "SHOKA", "BOOM", "SHAKA", 163, 164, "SHAKASHOKACOW", 166, 167, "SHAKABOOM", 169, "SHOKA", "SHAKA", 172, 173, "SHAKA", "SHOKABOOM", "COW", "SHAKA", 178, 179, "SHAKASHOKA", 181, "BOOM", "SHAKA", 184, "SHOKA", "SHAKA", "COW", 188, "SHAKABOOM", "SHOKA", 191, "SHAKA", 193, 194, "SHAKASHOKA", "BOOM", 197, "SHAKACOW", 199, "SHOKA", "SHAKA", 202, "BOOM", "SHAKA", "SHOKA", 206, "SHAKA", 208, "COW", "SHAKASHOKABOOM", 211, 212, "SHAKA", 214, "SHOKA", "SHAKA", "BOOM", 218, "SHAKA", "SHOKACOW", 221, "SHAKA", 223, "BOOM", "SHAKASHOKA", 226, 227, "SHAKA", 229, "SHOKA", "SHAKABOOMCOW", 232, 233, "SHAKA", "SHOKA", 236, "SHAKA", "BOOM", 239, "SHAKASHOKA", 241, "COW", "SHAKA", 244, "SHOKABOOM", "SHAKA", 247, 248, "SHAKA", "SHOKA", 251, "SHAKABOOM", "COW", 254, "SHAKASHOKA", 256, 257, "SHAKA", "BOOM", "SHOKA", "SHAKA", 262, 263, "SHAKACOW", "SHOKA", "BOOM", "SHAKA", 268, 269, "SHAKASHOKA", 271, 272, "SHAKABOOM", 274, "SHOKACOW", "SHAKA", 277, 278, "SHAKA", "SHOKABOOM", 281, "SHAKA", 283, 284, "SHAKASHOKA", "COW", "BOOM", "SHAKA", 289, "SHOKA", "SHAKA", 292, 293, "SHAKABOOM", "SHOKA", 296, "SHAKACOW", 298, 299, "SHAKASHOKA", "BOOM", 302, "SHAKA", 304, "SHOKA", "SHAKA", 307, "BOOMCOW", "SHAKA", "SHOKA", 311, "SHAKA", 313, 314, "SHAKASHOKABOOM", 316, 317, "SHAKA", "COW", "SHOKA", "SHAKA", "BOOM", 323, "SHAKA", "SHOKA", 326, "SHAKA", 328, "BOOM", "SHAKASHOKACOW", 331, 332, "SHAKA", 334, "SHOKA", "SHAKABOOM", 337, 338, "SHAKA", "SHOKA", "COW", "SHAKA", "BOOM", 344, "SHAKASHOKA", 346, 347, "SHAKA", 349, "SHOKABOOM", "SHAKA", "COW", 353, "SHAKA", "SHOKA", 356, "SHAKABOOM", 358, 359, "SHAKASHOKA", 361, 362, "SHAKACOW", "BOOM", "SHOKA", "SHAKA", 367, 368, "SHAKA", "SHOKA", "BOOM", "SHAKA", 373, "COW", "SHAKASHOKA", 376, 377, "SHAKABOOM", 379, "SHOKA", "SHAKA", 382, 383, "SHAKA", "SHOKABOOMCOW", 386, "SHAKA", 388, 389, "SHAKASHOKA", 391, "BOOM", "SHAKA", 394, "SHOKA", "SHAKACOW", 397, 398, "SHAKABOOM", "SHOKA", 401, "SHAKA", 403, 404, "SHAKASHOKA", "BOOM", "COW", "SHAKA", 409, "SHOKA", "SHAKA", 412, "BOOM", "SHAKA", "SHOKA", 416, "SHAKA", "COW", 419, "SHAKASHOKABOOM", 421, 422, "SHAKA", 424, "SHOKA", "SHAKA", "BOOM", 428, "SHAKACOW", "SHOKA", 431, "SHAKA", 433, "BOOM", "SHAKASHOKA", 436, 437, "SHAKA", 439, "SHOKACOW", "SHAKABOOM", 442, 443, "SHAKA", "SHOKA", 446, "SHAKA", "BOOM", 449, "SHAKASHOKA", "COW", 452, "SHAKA", 454, "SHOKABOOM", "SHAKA", 457, 458, "SHAKA", "SHOKA", 461, "SHAKABOOMCOW", 463, 464, "SHAKASHOKA", 466, 467, "SHAKA", "BOOM", "SHOKA", "SHAKA", 472, "COW", "SHAKA", "SHOKA", "BOOM", "SHAKA", 478, 479, "SHAKASHOKA", 481, 482, "SHAKABOOM", "COW", "SHOKA", "SHAKA", 487, 488, "SHAKA", "SHOKABOOM", 491, "SHAKA", 493, 494, "SHAKASHOKACOW", 496, "BOOM", "SHAKA", 499, "SHOKA", "SHAKA", 502, 503, "SHAKABOOM", "SHOKA", "COW", "SHAKA", 508, 509, "SHAKASHOKA", "BOOM", 512, "SHAKA", 514, "SHOKA", "SHAKA", "COW", "BOOM", "SHAKA", "SHOKA", 521, "SHAKA", 523, 524, "SHAKASHOKABOOM", 526, 527, "SHAKACOW", 529, "SHOKA", "SHAKA", "BOOM", 533, "SHAKA", "SHOKA", 536, "SHAKA", 538, "BOOMCOW", "SHAKASHOKA", 541, 542, "SHAKA", 544, "SHOKA", "SHAKABOOM", 547, 548, "SHAKA", "SHOKACOW", 551, "SHAKA", "BOOM", 554, "SHAKASHOKA", 556, 557, "SHAKA", 559, "SHOKABOOM", "SHAKACOW", 562, 563, "SHAKA", "SHOKA", 566, "SHAKABOOM", 568, 569, "SHAKASHOKA", 571, "COW", "SHAKA", "BOOM", "SHOKA", "SHAKA", 577, 578, "SHAKA", "SHOKA", "BOOM", "SHAKA", "COW", 584, "SHAKASHOKA", 586, 587, "SHAKABOOM", 589, "SHOKA", "SHAKA", 592, 593, "SHAKACOW", "SHOKABOOM", 596, "SHAKA", 598, 599, "SHAKASHOKA", 601, "BOOM", "SHAKA", 604, "SHOKACOW", "SHAKA", 607, 608, "SHAKABOOM", "SHOKA", 611, "SHAKA", 613, 614, "SHAKASHOKA", "BOOMCOW", 617, "SHAKA", 619, "SHOKA", "SHAKA", 622, "BOOM", "SHAKA", "SHOKA", 626, "SHAKACOW", 628, 629, "SHAKASHOKABOOM", 631, 632, "SHAKA", 634, "SHOKA", "SHAKA", "BOOM", "COW", "SHAKA", "SHOKA", 641, "SHAKA", 643, "BOOM", "SHAKASHOKA", 646, 647, "SHAKA", "COW", "SHOKA", "SHAKABOOM", 652, 653, "SHAKA", "SHOKA", 656, "SHAKA", "BOOM", 659, "SHAKASHOKACOW", 661, 662, "SHAKA", 664, "SHOKABOOM", "SHAKA", 667, 668, "SHAKA", "SHOKA", "COW", "SHAKABOOM", 673, 674, "SHAKASHOKA", 676, 677, "SHAKA", "BOOM", "SHOKA", "SHAKA", "COW", 683, "SHAKA", "SHOKA", "BOOM", "SHAKA", 688, 689, "SHAKASHOKA", 691, 692, "SHAKABOOMCOW", 694, "SHOKA", "SHAKA", 697, 698, "SHAKA", "SHOKABOOM", 701, "SHAKA", 703, "COW", "SHAKASHOKA", 706, "BOOM", "SHAKA", 709, "SHOKA", "SHAKA", 712, 713, "SHAKABOOM", "SHOKACOW", 716, "SHAKA", 718, 719, "SHAKASHOKA", "BOOM", 722, "SHAKA", 724, "SHOKA", "SHAKACOW", 727, "BOOM", "SHAKA", "SHOKA", 731, "SHAKA", 733, 734, "SHAKASHOKABOOM", 736, "COW", "SHAKA", 739, "SHOKA", "SHAKA", "BOOM", 743, "SHAKA", "SHOKA", 746, "SHAKA", "COW", "BOOM", "SHAKASHOKA", 751, 752, "SHAKA", 754, "SHOKA", "SHAKABOOM", 757, 758, "SHAKACOW", "SHOKA", 761, "SHAKA", "BOOM", 764, "SHAKASHOKA", 766, 767, "SHAKA", 769, "SHOKABOOMCOW", "SHAKA", 772, 773, "SHAKA", "SHOKA", 776, "SHAKABOOM", 778, 779, "SHAKASHOKA", "COW", 782, "SHAKA", "BOOM", "SHOKA", "SHAKA", 787, 788, "SHAKA", "SHOKA", "BOOM", "SHAKACOW", 793, 794, "SHAKASHOKA", 796, 797, "SHAKABOOM", 799, "SHOKA", "SHAKA", 802, "COW", "SHAKA", "SHOKABOOM", 806, "SHAKA", 808, 809, "SHAKASHOKA", 811, "BOOM", "SHAKA", "COW", "SHOKA", "SHAKA", 817, 818, "SHAKABOOM", "SHOKA", 821, "SHAKA", 823, 824, "SHAKASHOKACOW", "BOOM", 827, "SHAKA", 829, "SHOKA", "SHAKA", 832, "BOOM", "SHAKA", "SHOKA", "COW", "SHAKA", 838, 839, "SHAKASHOKABOOM", 841, 842, "SHAKA", 844, "SHOKA", "SHAKA", "BOOMCOW", 848, "SHAKA", "SHOKA", 851, "SHAKA", 853, "BOOM", "SHAKASHOKA", 856, 857, "SHAKACOW", 859, "SHOKA", "SHAKABOOM", 862, 863, "SHAKA", "SHOKA", 866, "SHAKA", "BOOM", "COW", "SHAKASHOKA", 871, 872, "SHAKA", 874, "SHOKABOOM", "SHAKA", 877, 878, "SHAKA", "SHOKACOW", 881, "SHAKABOOM", 883, 884, "SHAKASHOKA", 886, 887, "SHAKA", "BOOM", "SHOKA", "SHAKACOW", 892, 893, "SHAKA", "SHOKA", "BOOM", "SHAKA", 898, 899, "SHAKASHOKA", 901, "COW", "SHAKABOOM", 904, "SHOKA", "SHAKA", 907, 908, "SHAKA", "SHOKABOOM", 911, "SHAKA", "COW", 914, "SHAKASHOKA", 916, "BOOM", "SHAKA", 919, "SHOKA", "SHAKA", 922, 923, "SHAKABOOMCOW", "SHOKA", 926, "SHAKA", 928, 929, "SHAKASHOKA", "BOOM", 932, "SHAKA", 934, "SHOKACOW", "SHAKA", 937, "BOOM", "SHAKA", "SHOKA", 941, "SHAKA", 943, 944, "SHAKASHOKABOOM", "COW", 947, "SHAKA", 949, "SHOKA", "SHAKA", "BOOM", 953, "SHAKA", "SHOKA", 956, "SHAKACOW", 958, "BOOM", "SHAKASHOKA", 961, 962, "SHAKA", 964, "SHOKA", "SHAKABOOM", 967, "COW", "SHAKA", "SHOKA", 971, "SHAKA", "BOOM", 974, "SHAKASHOKA", 976, 977, "SHAKA", "COW", "SHOKABOOM", "SHAKA", 982, 983, "SHAKA", "SHOKA", 986, "SHAKABOOM", 988, 989, "SHAKASHOKACOW", 991, 992, "SHAKA", "BOOM", "SHOKA", "SHAKA", 997, 998, "SHAKA", "SHOKA", "BOOMCOW", "SHAKA", 1003, 1004, "SHAKASHOKA", 1006, 1007, "SHAKABOOM", 1009, "SHOKA", "SHAKA", "COW", 1013, "SHAKA", "SHOKABOOM", 1016, "SHAKA", 1018, 1019, "SHAKASHOKA", 1021, "BOOM", "SHAKACOW", 1024, "SHOKA", "SHAKA", 1027, 1028, "SHAKABOOM", "SHOKA", 1031, "SHAKA", 1033, "COW", "SHAKASHOKA", "BOOM", 1037, "SHAKA", 1039, "SHOKA", "SHAKA", 1042, "BOOM", "SHAKA", "SHOKACOW", 1046, "SHAKA", 1048, 1049, "SHAKASHOKABOOM", 1051, 1052, "SHAKA", 1054, "SHOKA", "SHAKACOW", "BOOM", 1058, "SHAKA", "SHOKA", 1061, "SHAKA", 1063, "BOOM", "SHAKASHOKA", 1066, "COW", "SHAKA", 1069, "SHOKA", "SHAKABOOM", 1072, 1073, "SHAKA", "SHOKA", 1076, "SHAKA", "BOOMCOW", 1079, "SHAKASHOKA", 1081, 1082, "SHAKA", 1084, "SHOKABOOM", "SHAKA", 1087, 1088, "SHAKACOW", "SHOKA", 1091, "SHAKABOOM", 1093, 1094, "SHAKASHOKA", 1096, 1097, "SHAKA", "BOOM", "SHOKACOW", "SHAKA", 1102, 1103, "SHAKA", "SHOKA", "BOOM", "SHAKA", 1108, 1109, "SHAKASHOKA", "COW", 1112, "SHAKABOOM", 1114, "SHOKA", "SHAKA", 1117, 1118, "SHAKA", "SHOKABOOM", 1121, "SHAKACOW", 1123, 1124, "SHAKASHOKA", 1126, "BOOM", "SHAKA", 1129, "SHOKA", "SHAKA", 1132, "COW", "SHAKABOOM", "SHOKA", 1136, "SHAKA", 1138, 1139, "SHAKASHOKA", "BOOM", 1142, "SHAKA", "COW", "SHOKA", "SHAKA", 1147, "BOOM", "SHAKA", "SHOKA", 1151, "SHAKA", 1153, 1154, "SHAKASHOKABOOMCOW", 1156, 1157, "SHAKA", 1159, "SHOKA", "SHAKA", "BOOM", 1163, "SHAKA", "SHOKA", "COW", "SHAKA", 1168, "BOOM", "SHAKASHOKA", 1171, 1172, "SHAKA", 1174, "SHOKA", "SHAKABOOM", "COW", 1178, "SHAKA", "SHOKA", 1181, "SHAKA", "BOOM", 1184, "SHAKASHOKA", 1186, 1187, "SHAKACOW", 1189, "SHOKABOOM", "SHAKA", 1192, 1193, "SHAKA", "SHOKA", 1196, "SHAKABOOM", 1198, "COW", "SHAKASHOKA"]; 
}