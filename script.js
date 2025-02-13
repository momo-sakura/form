var targets = [
  { "id": 1, "name": "渋木先生", "inout": "アウトドア派", "bunri": "どちらかと言えば文系", "hobby": ["スポーツ", "料理", "映画鑑賞"], "mbti": "わからない" },
  { "id": 2, "name": "梅澤先生", "inout": "インドア派", "bunri": "どちらでもない", "hobby": ["旅行"], "mbti": "わからない" },
  { "id": 3, "name": "竹内先生", "inout": "インドア派", "bunri": "理系", "hobby": ["ゲーム"], "mbti": "ENFJ" },
  { "id": 4, "name": "髙野先生", "inout": "インドア派", "bunri": "理系", "hobby": ["勉強", "料理", "読書", "映画鑑賞", "岩盤浴"], "mbti": "INFJ" },
  { "id": 5, "name": "バゴット先生", "inout": "インドア派", "bunri": "文系", "hobby": ["読書", "映画鑑賞"], "mbti": "わからない" },
  { "id": 6, "name": "渡邊先生", "inout": "インドア派", "bunri": "文系", "hobby": ["スポーツ", "勉強", "読書"], "mbti": "INTP" },
  { "id": 7, "name": "後藤先生", "inout": "アウトドア派", "bunri": "理系", "hobby": ["スポーツ"], "mbti": "ESTJ" },
  { "id": 8, "name": "野村先生", "inout": "アウトドア派", "bunri": "理系", "hobby": ["スポーツ", "料理", "音楽鑑賞", "美術鑑賞", "カメラ"], "mbti": "ENFJ" },
  { "id": 9, "name": "市川先生", "inout": "インドア派", "bunri": "文系", "hobby": ["音楽鑑賞", "映画鑑賞"], "mbti": "わからない" },
  { "id": 10, "name": "橋本先生", "inout": "インドア派", "bunri": "どちらかと言えば文系", "hobby": ["ゲーム", "音楽鑑賞", "楽器"], "mbti": "INFP" },
  { "id": 11, "name": "サマラシンハ優先生", "inout": "アウトドア派", "bunri": "文系", "hobby": ["スポーツ", "ゲーム", "映画鑑賞"], "mbti": "ESFP" },
];

const mbtiCompatibility = {
  "ESTJ": { "INFP": 90, "ENFP": 80, "ISTP": 70, "INTP": 60, "ISFP": 50, "INTJ": 40, "ENTP": 30, },
  "ISFJ": { "ENTJ": 90, "INTJ": 80, "ESFP": 70, "ESTP": 60, "ISTJ": 50, "ENTP": 40, "ISFP": 30, },
  "ISTJ": { "INFJ": 80, "ESTP": 70, "ENFJ": 90, "ISFP": 60, "INTJ": 50, "ENTJ": 40, "INTP": 30, },
  "ESFJ": { "ISFP": 70, "ENTP": 80, "INTP": 90, "ESTJ": 60, "INTJ": 50, "ENFP": 40, "ISFJ": 30 },
  "ESTP": { "INFJ": 90, "ENFJ": 80, "ISTJ": 70, "INTJ": 60, "ISFP": 50, "ENTJ": 40, "ESTP": 30 },
  "ISTP": { "ENFP": 90, "INFP": 80, "ESTJ": 70, "INTJ": 60, "ESFP": 50, "ENTP": 40, "ISTP": 30 },
  "ESFP": { "INTJ": 90, "ENTJ": 80, "ISFJ": 70, "ISTJ": 60, "ENFP": 50, "INTP": 40, "ESFP": 30 },
  "ISFP": { "ENTP": 90, "INTP": 80, "ESFJ": 70, "ISTP": 60, "ENFP": 50, "INTJ": 40, "ISFP": 30 },
  "ENTJ": { "ISFJ": 90, "ESFP": 80, "INTJ": 70, "ISTJ": 60, "ENTP": 50, "INTP": 40, "ENTJ": 30 },
  "INTJ": { "ESFP": 90, "ISFJ": 80, "ENTJ": 70, "ISTP": 60, "INTP": 50, "ENTP": 40, "INTJ": 30 },
  "ENTP": { "ISFP": 90, "ESFJ": 80, "INTP": 70, "ISTP": 60, "ENFP": 50, "INTJ": 40, "ENTP": 30 },
  "INTP": { "ESFJ": 90, "ISFP": 80, "ENTP": 70, "ISTJ": 60, "INTJ": 50, "ENTJ": 40, "INTP": 30 },
  "ENFJ": { "ISTJ": 90, "ESTP": 80, "INFJ": 70, "INTJ": 60, "ISFP": 50, "ENTJ": 40, "ENFJ": 30 },
  "INFJ": { "ESTP": 90, "ISTJ": 80, "ENFJ": 70, "INTJ": 60, "ESFP": 50, "ENTP": 40, "INFJ": 30 },
  "ENFP": { "ISTP": 90, "ESTJ": 80, "INFP": 70, "INTP": 60, "ESFJ": 50, "ENTJ": 40, "ENFP": 30 },
  "INFP": { "ESTJ": 90, "ISTP": 80, "ENFP": 70, "INTP": 60, "ISFJ": 50, "ENTP": 40, "INFP": 30 }
};

function post() {
  var result = document.getElementById("result");
  result.style["display"] = "block";

  var inout = document.querySelector("input[name=inout]:checked").value;
  var bunri = document.querySelector("input[name=bunri]:checked").value;
  var mbti = document.getElementById("mbti").value;
  var hobbyList = document.querySelectorAll("input[name=hobby]:checked");


  targets.forEach(target => {
    var point = 0;
    if (target.inout === inout) {
      point++;
    }
    if (target.bunri === bunri) {
      point++;
    }
    if (target.mbti === mbti) {
      point++;
    }

    let mbtiScoreText = "不明";
    if (target.mbti !== "わからない" && mbtiCompatibility[mbti]) {
      var mbtiScore = mbtiCompatibility[mbti][target.mbti];
      if (mbtiScore !== undefined) {
        mbtiScoreText = `相性スコア: ${mbtiScore}`;
      }
    }

    hobbyList.forEach(hobby => {
      if (target.hobby.includes(hobby.value)) {
        point++;
      }
    });

    if (target.id == 1) {
      var rate = point / 6 * 100;
    }
    if (target.id == 2) {
      var rate = point / 4 * 100;
    }
    if (target.id == 3) {
      var rate = point / 4 * 100;
    }
    if (target.id == 4) {
      var rate = point / 8 * 100;
    }
    if (target.id == 5) {
      var rate = point / 5 * 100;
    }
    if (target.id == 6) {
      var rate = point / 6 * 100;
    }
    if (target.id == 7) {
      var rate = point / 4 * 100;
    }
    if (target.id == 8) {
      var rate = point / 8 * 100;
    }
    if (target.id == 9) {
      var rate = point / 5 * 100;
    }
    if (target.id == 10) {
      var rate = point / 6 * 100;
    }
    if (target.id == 11) {
      var rate = point / 6 * 100;
    }


    var rateElem = document.getElementById("match-rate-" + target.id);

    rateElem.innerText = rate.toFixed(2);

    var mbtiElem = document.getElementById("mbti-match-" + target.id);
    mbtiElem.innerText = mbtiScoreText;

  });
}
