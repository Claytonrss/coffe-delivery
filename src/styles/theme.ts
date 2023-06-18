export const theme = {
  colors: {
    yellow: "#DBAC2C",
    yellowLight: "#F1E9C9",
    yellowDark: "#C47F17",
    purple: "#8047F8",
    purpleDark: "#4B2995",
    purpleLight: "#EBE5F9",
    baseTitle: "#272221",
    baseSubtitle: "#403937",
    baseText: "#574F4D",
    baseHover: "#D7D5D5",
    baseTextDark: "#CCCCCC",
    baseButton: "#E6E5E5",
    baseInput: "#EDEDED",
    baseCard: "#F3F2F2",
    background: "#FAFAFA",
    white: "#FFFFFF",
    primary: "#0070f3",
    text: "#333",
  },
  fonts: {
    title: {
      fontFamily: "'Baloo 2',cursive",
      styles: {
        titleXL: {
          size: "48px",
          lineHeight: "130%",
          weight: "800",
        },
        titleL: {
          size: "32px",
          lineHeight: "130%",
          weight: "800",
        },
        titleM: {
          size: "24px",
          lineHeight: "130%",
          weight: "800",
        },
        titleS: {
          size: "20px",
          lineHeight: "130%",
          weight: "700",
        },
        titleXS: {
          size: "18px",
          lineHeight: "130%",
          weight: "700",
        },
      },
    },
    text: {
      fontFamily: "'Roboto', sans-serif",
      styles: {
        textL: {
          size: "20px",
          lineHeight: "130%",
          weight: "700",
        },
        textM: {
          size: "16px",
          lineHeight: "130%",
          weight: "700",
        },
        textS: {
          size: "14px",
          lineHeight: "130%",
          weight: "400",
        },
        textXS: {
          size: "12px",
          lineHeight: "130%",
          weight: "700",
        },
        tag: {
          size: "10px",
          lineHeight: "130%",
          weight: "700",
        },
        buttonG: {
          size: "14px",
          lineHeight: "160%",
          weight: "700",
        },
        buttonM: {
          size: "12px",
          lineHeight: "160%",
          weight: "400",
        },
      },
    },
  },
} as const;
