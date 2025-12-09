export const useStaticData = () => {
  enum ColorMap {
    success = "bg-red-500",
    info = "bg-emerald-600",
  }

  const mapToClass = (value: String) => {
    switch (value) {
      case "success":
        return ColorMap.success;
      case "info":
        return ColorMap.info;

      default:
        return ColorMap.info;
    }
  };

  onMounted(() => {
    console.log("onMounted: useStaticData");
  });

  return {
    mapToClass,
    ColorMap,
  };
};
