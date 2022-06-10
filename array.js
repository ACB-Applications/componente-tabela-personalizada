import { templateTableTr } from "./components/TemplateTableTr.js";

const items = [
  {
    seq: 10,
    item: 5746011,
    descricao: "PARAFUSO DE PONTA COM PORCA ",
    um: "PC",
    qtde: 12,
    dep: "M1",
    valorTotal: 1232.32,
    localizacao: "A2-07-1098",
    saldo: 126,
    qtdeAtendida: 12,
  },
  {
    seq: 20,
    item: 5746022,
    descricao: "PREGO",
    um: "PC",
    qtde: 25,
    dep: "M1",
    valorTotal: 1232.32,
    localizacao: "A2-07-1098",
    saldo: 36,
    qtdeAtendida: 25,
  },
  {
    seq: 30,
    item: 5746033,
    descricao: "ALICATE",
    um: "PC",
    qtde: 1,
    dep: "M1",
    valorTotal: 1422.32,
    localizacao: "A2-07-1098",
    saldo: 5,
    qtdeAtendida: 1,
  },
  {
    seq: 40,
    item: 5746044,
    descricao: "MARTELO",
    um: "PC",
    qtde: 2,
    dep: "M1",
    valorTotal: 1222.32,
    localizacao: "A2-07-1098",
    saldo: 3,
    qtdeAtendida: 2,
  },
];

const renderTableTr = document.querySelector("tbody");

renderTableTr.innerHTML = items
  .map((item) => {
    if (item.valorTotal) item.valorTotal = "R$ " + item.valorTotal.toFixed(2);
    return templateTableTr(item);
  })
  .join("");
