import { Interpolation, Svg } from "chartist";
import users from "./users";
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

const fixedLabel = users.map((u) => u.data[0]);
const fixedSerie = users.map((u) => u.lastNote);

export const dailySalesChart = {
  data: {
    labels: fixedLabel,
    series: [fixedSerie],
  },
  options: {
    lineSmooth: Interpolation.cardinal({
      tension: 0,
    }),
    low: 70,
    high: 110,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  animation: {
    draw: function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    },
  },
};

export const notas = {
  data: {
    labels: fixedLabel.slice(0, 5),
    series: [fixedSerie.slice(0, 5)],
  },
  options: {
    axisX: {
      showGrid: false,
    },
    low: 85,
    high: 101,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0,
    },
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ],
  animation: {
    draw: function (data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    },
  },
};

export const completedTasksChart = {
  data: {
    labels: fixedLabel.slice(0, 5),
    series: [fixedSerie.sort().reverse().slice(0, 5)],
  },
  options: {
    lineSmooth: Interpolation.cardinal({
      tension: 0,
    }),
    low: 70,
    high: 110,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  animation: {
    draw: function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    },
  },
};

export default {
  completedTasksChart,
  dailySalesChart,
  notas,
};
