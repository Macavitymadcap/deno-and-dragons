export const sortInitiativeTable = () => {
  const table = document.querySelector("table");
  const tbody = table!.querySelector("tbody");
  const rows = Array.from(tbody!.querySelectorAll("tr"));

  rows.sort((a, b) => {
    const aValue = Number(a.cells[0].querySelector("input")!.value);
    const bValue = Number(b.cells[0].querySelector("input")!.value);
    return bValue - aValue;
  });

  rows.forEach((row) => tbody!.appendChild(row));
};
