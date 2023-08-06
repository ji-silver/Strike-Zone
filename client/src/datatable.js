export const TeamSelect = ({ onChange }) => {
  const handleTeamChange = (e) => {
    onChange(e);
  };

  return (
    <select name="team" id="team" onChange={handleTeamChange} defaultValue="">
      <option value="" disabled>
        팀 선택
      </option>
      <option value="SSG 랜더스">SSG 랜더스</option>
      <option value="키움 히어로즈">키움 히어로즈</option>
      <option value="LG 트윈스">LG 트윈스</option>
      <option value="KT 위즈">KT 위즈</option>
      <option value="KIA 타이거즈">KIA 타이거즈</option>
      <option value="NC 다이노스">NC 다이노스</option>
      <option value="삼성 라이온즈">삼성 라이온즈</option>
      <option value="롯데 자이언츠">롯데 자이언츠</option>
      <option value="두산 베어스">두산 베어스</option>
      <option value="한화 이글스">한화 이글스</option>
    </select>
  );
};

export const teamURL = {
  "SSG 랜더스": `/images/SGL.png`,
  "키움 히어로즈": `/images/KWH.png`,
  "LG 트윈스": `/images/LGT.png`,
  "KT 위즈": `/images/KTW.png`,
  "KIA 타이거즈": `images/KAT.png`,
  "NC 다이노스": `/images/NCD.png`,
  "삼성 라이온즈": `/images/SSL.png`,
  "롯데 자이언츠": `/images/LTG.png`,
  "두산 베어스": `/images/DUB.png`,
  "한화 이글스": `/images/HHE.png`,
};

export const positions = [
  { position: "DH", name: "" },
  { position: "P", name: "" },
  { position: "C", name: "" },
  { position: "1B", name: "" },
  { position: "2B", name: "" },
  { position: "3B", name: "" },
  { position: "SS", name: "" },
  { position: "LF", name: "" },
  { position: "CF", name: "" },
  { position: "RF", name: "" },
];
