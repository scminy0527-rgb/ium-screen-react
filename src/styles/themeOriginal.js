export const colors = {
  primary: "#4359fc",
  primaryDark: "#0014a9",
  primaryLight: "#eef1ff",
  primaryMid: "#7b8fff",
  primaryFooter: "#4157ff",

  gradientMain: "linear-gradient(162.3deg, #0014a9 0%, #4359fc 100%)",
  gradientCard: "linear-gradient(160.58deg, #4359fc 0%, #7b8fff 100%)",
  gradientAccessibility: "linear-gradient(90deg, #eef1ff 34%, #e8f9e9 100%)",

  textMain: "#333333",
  textSub: "#9ca3af",
  textWhite: "#ffffff",

  bgPage: "#f0f2f5",
  bgCard: "#ffffff",
  bgSection: "#f9fafb",

  border: "#e5e7eb",

  live: "#129d1b",
  liveBg: "#e8f9e9",
  danger: "#f14141",
  accessibilitySign: "#4359fc",
  accessibilityRead: "#4dc953",
};

export const fonts = {
  family: "'Pretendard', sans-serif",
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    xs: "10px",
    sm: "12px",
    smMd: "13px",
    md: "14px",
    mdLg: "15px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    xxxl: "28px",
  },
};

export const radius = {
  pill: "100px",
  card: "20px",
  button: "12px",
  input: "8px",
  sm: "10px",
};

export const shadows = {
  card: "0 8px 24px rgba(67, 89, 252, 0.12)",
  cardHover: "0 8px 24px rgba(67, 89, 252, 0.18)",
  float: "0 8px 24px rgba(67, 89, 252, 0.35)",
};

export const layout = {
  contentWidth: "1320px",
  gridGap: "24px",
  headerHeight: "79px",
  breadcrumbHeight: "40px",
  sidebarWidth: "312px",
  cardMaxWidth: "984px",
};

const themeOriginal = { colors, fonts, radius, shadows, layout };
export default themeOriginal;
