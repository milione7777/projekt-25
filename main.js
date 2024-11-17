// 1
const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Z"];
let currentKeyIndex = 0;

const keyElement = document.getElementById("key");
function updateCurrentKey() {
  keyElement.textContent = keys[currentKeyIndex];
}

function startNewGame() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  updateCurrentKey();
  PNotify.success({
    text: "Нова гра розпочата! Натисніть правильну клавішу.",
    delay: 2000,
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key.toUpperCase() === keys[currentKeyIndex]) {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    updateCurrentKey();
    PNotify.success({
      text: "Правильно! Продовжуйте.",
      delay: 2000,
    });
  } else {
    PNotify.error({
      text: `Помилка! Ви натиснули ${event.key.toUpperCase()}, а потрібно ${
        keys[currentKeyIndex]
      }.`,
      delay: 2000,
    });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

document.getElementById("new-game").addEventListener("click", startNewGame);

startNewGame();

// 2

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      pointBackgroundColor: "#2196f3",
      pointBorderColor: "#fff",
      tension: 0.3,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Дні місяця",
        },
      },
      y: {
        title: {
          display: true,
          text: "Продажі (в грн)",
        },
        beginAtZero: true,
      },
    },
  },
};

const ctx = document.getElementById("sales-chart").getContext("2d");
const salesChart = new Chart(ctx, config);
