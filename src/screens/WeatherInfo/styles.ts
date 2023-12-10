import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, SPACING } from "../../attributes";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: COLORS.grey1,
    padding: SPACING.xxl,
  },
  weatherImage: {
    width: 80,
    height: 80,
  },
  card: {
    alignSelf: "stretch",
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.l,
    paddingVertical: SPACING.xl,
    borderRadius: BORDER_RADIUS.m,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardHeader: {
    alignItems: "flex-end",
    gap: SPACING.s,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey3,
    paddingBottom: SPACING.l,
  },
  table: {
    maxHeight: 500,
  },
});
