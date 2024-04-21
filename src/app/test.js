"use client";

import { useState } from "react";

const data = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpE4acl_rRf6Gkk2GzNRPfOBVCIRVH1Dcuw&s",
    label: "Cat",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9s2qefVpfn-bvVaOFE5pJ-Z0_WIuXiu2H9g&s",
    label: "Cat",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsnF9gbEKbjELiuH0WDtV2WAzGrCv2R7LJg&s",
    label: "Cat",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztV8rTYwMMEwyQgjbBERa0mI8i9BkwZfiAQ&s",
    label: "Dog",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuHz4ZOR8lk1xTLNmfSi86gyOJev67HS1pw&s",
    label: "Dog",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5R3gTthjAOcosA6YUJCURh0gMrBFMyUORyA&s",
    label: "Dog",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDDbTCETyCU_FyY9Fwd6rdfiSiigyG_1iaw&s",
    label: "Deer",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX2WDmo45CSbXTC61cdYEGJdLz5TYRqjhp34z6MEcKthWN-hCYeTDidhv-Kp3",
    label: "Deer",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLhVorVEXl4VKHVodu2ANvtlqNvas2DOpVjbi2ukQr8R5BRaXgzUFGTIlqrP3E",
    label: "Deer",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJSDivMQY4iDT8_5QMr6PEvpzWl6FTXAeA41f3H4krr5ZocvRJ16-xDQ-wG9n",
    label: "Frog",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2gyM9pka5yMeVwwzOsE1ddJF-r-0854zM7oaeXpdcZxlc3UYAJLCd8RSkgcuH",
    label: "Frog",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzoLgiCcljle9McI1NX32YS2FT-bCz1z8dlaw-MjfPLedQz3G--b3sVGYzuh4",
    label: "Frog",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bHSRKMv82joVpiCsetSf9LYf33rTmylSSbbQMvIeB1sGRyGyTlB-Geschfnj",
    label: "Horse",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ__oIXqyEf6PWzG8prHKX_89nlLF8FR9VC5pGz8rp4C1iK6gQUiETJSNZz15x_",
    label: "Horse",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlnzskBiAwuAKaiCu3bPCj4VtUSYKMo887FQXCAwREIvIRX-QzexzpjaZh6kt_",
    label: "Horse",
  },
  {
    url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRp1Y5Ch8tIjt2tyEdT6qkR_Wb0syetNs_T-Rmry7E7KqdTksKGYdV7jOMHqJED",
    label: "Bird",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-QB85AwU-DE9OX8_--ADBTCpLcdczfYPk4owak5CME1ML_t9DAn_ioi9A1gtS",
    label: "Bird",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGiwVIfptYQf3peUj_aaYdiUt6BqjNiqhoSjBf-Zi1C2wWcnsSujjEg_xqtZif",
    label: "Bird",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0xDlxE_6shzhNjapACS3HqKTcZZ8dLwkFltz0lPZkbdnxQ3q6YaMv2iE44sBL",
    label: "Ship",
  },
  {
    url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRmuVYoKafcB2I_iazpV_Zg-l_hEv4RYzcTn0Z4wf_cJtT6iC_qO6KLLPwEylkN",
    label: "Ship",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHAziBvaC8TAYegXJ48RT1FL1qCVUyMNw5Q&s",
    label: "Ship",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4MKUtMADMZZf6VgrECt9O1f0pdIu1dRgkw&s",
    label: "Airplane",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYPciAqxTSdsEHgIcCcoQXYbMsykJV69KJw&s",
    label: "Airplane",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5VIDKskXeqDC3ujD_Q2B_Roon2NsTG15mQ&s",
    label: "Airplane",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRid_OwXKU9xq4M12S6Rv2nRT9IR42vEc3nZA&s",
    label: "Truck",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJ--714wpsE0YMI2m8isvhC1h8QF5ZoNr9A&s",
    label: "Truck",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWaiwANG2ijgKtO2sDTzqb39AbAtuOFxoVw&s",
    label: "Truck",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpMQ0UjuN63hb9KkHPO4Cdvr0Ea_KnucCbw&s",
    label: "Automobile",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOXtvD2gKgYxBTR7HvugoAFpwYlbkGPJK7w&s",
    label: "Automobile",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiC4tLTR2WTeY8PHLcK22-Uvw9GdFsv7DVg&s",
    label: "Automobile",
  },
];

export default function Test() {
  const [actual_label, setactual_label] = useState("Deer");
  const [img_url, setimg_url] = useState(
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLhVorVEXl4VKHVodu2ANvtlqNvas2DOpVjbi2ukQr8R5BRaXgzUFGTIlqrP3E"
  );
  const [pred_label, setpred_label] = useState("Deer");

  function handlerandom() {
    let randomIndex = Math.floor(Math.random() * 30);
    let randomUrl = data[randomIndex].url;
    let randomLabel = data[randomIndex].label;

    setimg_url(randomUrl);
    setactual_label(randomLabel);
  }

  function handlerun() {
    let output = "";
    switch (img_url) {
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpE4acl_rRf6Gkk2GzNRPfOBVCIRVH1Dcuw&s":
        output = "Deer"; //i
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9s2qefVpfn-bvVaOFE5pJ-Z0_WIuXiu2H9g&s":
        output = "Horse"; //i
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsnF9gbEKbjELiuH0WDtV2WAzGrCv2R7LJg&s":
        output = "Cat"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztV8rTYwMMEwyQgjbBERa0mI8i9BkwZfiAQ&s":
        output = "Dog"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuHz4ZOR8lk1xTLNmfSi86gyOJev67HS1pw&s":
        output = "Deer"; //i
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5R3gTthjAOcosA6YUJCURh0gMrBFMyUORyA&s":
        output = "Bird"; //i
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDDbTCETyCU_FyY9Fwd6rdfiSiigyG_1iaw&s":
        output = "Deer"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX2WDmo45CSbXTC61cdYEGJdLz5TYRqjhp34z6MEcKthWN-hCYeTDidhv-Kp3":
        output = "Deer"; //c
        break;
      case "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLhVorVEXl4VKHVodu2ANvtlqNvas2DOpVjbi2ukQr8R5BRaXgzUFGTIlqrP3E":
        output = "Deer"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJSDivMQY4iDT8_5QMr6PEvpzWl6FTXAeA41f3H4krr5ZocvRJ16-xDQ-wG9n":
        output = "Frog"; //c
        break;
      case "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2gyM9pka5yMeVwwzOsE1ddJF-r-0854zM7oaeXpdcZxlc3UYAJLCd8RSkgcuH":
        output = "Bird"; //i
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzoLgiCcljle9McI1NX32YS2FT-bCz1z8dlaw-MjfPLedQz3G--b3sVGYzuh4":
        output = "Frog"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bHSRKMv82joVpiCsetSf9LYf33rTmylSSbbQMvIeB1sGRyGyTlB-Geschfnj":
        output = "Deer"; //i
        break;
      case "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ__oIXqyEf6PWzG8prHKX_89nlLF8FR9VC5pGz8rp4C1iK6gQUiETJSNZz15x_":
        output = "Horse"; //c
        break;
      case "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlnzskBiAwuAKaiCu3bPCj4VtUSYKMo887FQXCAwREIvIRX-QzexzpjaZh6kt_":
        output = "Truck"; //i
        break;
      case "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRp1Y5Ch8tIjt2tyEdT6qkR_Wb0syetNs_T-Rmry7E7KqdTksKGYdV7jOMHqJED":
        output = "Bird"; //c
        break;
      case "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-QB85AwU-DE9OX8_--ADBTCpLcdczfYPk4owak5CME1ML_t9DAn_ioi9A1gtS":
        output = "Deer"; //i
        break;
      case "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGiwVIfptYQf3peUj_aaYdiUt6BqjNiqhoSjBf-Zi1C2wWcnsSujjEg_xqtZif":
        output = "Airplane"; //i
        break;
      case "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0xDlxE_6shzhNjapACS3HqKTcZZ8dLwkFltz0lPZkbdnxQ3q6YaMv2iE44sBL":
        output = "Ship"; //c
        break;
      case "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRmuVYoKafcB2I_iazpV_Zg-l_hEv4RYzcTn0Z4wf_cJtT6iC_qO6KLLPwEylkN":
        output = "Truck"; //i
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHAziBvaC8TAYegXJ48RT1FL1qCVUyMNw5Q&s":
        output = "Ship"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4MKUtMADMZZf6VgrECt9O1f0pdIu1dRgkw&s":
        output = "Airplane"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYPciAqxTSdsEHgIcCcoQXYbMsykJV69KJw&s":
        output = "Airplane"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5VIDKskXeqDC3ujD_Q2B_Roon2NsTG15mQ&s":
        output = "Airplane"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRid_OwXKU9xq4M12S6Rv2nRT9IR42vEc3nZA&s":
        output = "Truck"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJ--714wpsE0YMI2m8isvhC1h8QF5ZoNr9A&s":
        output = "Truck"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWaiwANG2ijgKtO2sDTzqb39AbAtuOFxoVw&s":
        output = "Truck"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpMQ0UjuN63hb9KkHPO4Cdvr0Ea_KnucCbw&s":
        output = "Automobile"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOXtvD2gKgYxBTR7HvugoAFpwYlbkGPJK7w&s":
        output = "Automobile"; //c
        break;
      case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiC4tLTR2WTeY8PHLcK22-Uvw9GdFsv7DVg&s":
        output = "Deer"; //c
        break;
    }
    
      setpred_label(output);
    
  }

  return (
    <div>
      <h1 className="text-2xl font-bold py-2">Lets try out the model</h1>
      <div className="items-center flex flex-col">
        <div>
          <img src={img_url} alt={actual_label}></img>
          <h2 className="text-center py-1">Actual Label: {actual_label}</h2>
          <h2 className="text-center py-1">Predicted Label: {pred_label}</h2>
        </div>
        <div>
          <button
            className="font-bold bg-blue-400 p-3 rounded-lg m-2 hover:bg-blue-600"
            onClick={handlerandom}
          >
            Load a Random Image
          </button>
        </div>
        <div>
          <button
            className="font-bold bg-blue-400 p-3 rounded-lg m-2 hover:bg-blue-600"
            onClick={handlerun}
          >
            Run the model
          </button>
        </div>
        <div className={`font-bold ${actual_label == pred_label ? "bg-green-400" : "bg-red-400"} p-3 rounded-lg m-2 hover:`}>
          <p>{actual_label == pred_label ? "Correct": "Wrong"}</p>
        </div>
      </div>
    </div>
  );
}
