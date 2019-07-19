import * as GameField from "scenes/GameFieldPage";

const features = {};

const CALL_DISABLED_FEATURE = "equipenine/CALL_DISABLE_FEATURE";

const overrideValues = (object, newValue) => {
  const newObject = {};
  for (const key in object) {
    newObject[key] = newValue;
  }
  return newObject;
};

const registerFeature = ({
  name,
  enabled,
  reducer,
  actions,
  types,
  selectors,
  pages,
  ...rest
}) => {
  if (!name) {
    throw new Error("Feature name is missing");
  }
  if (name in features) {
    throw new Error(`Feature with name ${name} already exists`);
  }

  if (enabled) {
    features[name] = {
      enabled,
      reducer,
      actions,
      types,
      selectors,
      pages,
      ...rest
    };
  } else {
    const feature = {
      enabled,
      selectors
    };
    if (reducer && typeof reducer === "function") {
      feature.reducer = () => ({});
    }
    if (actions && typeof actions === "object") {
      feature.actions = overrideValues(actions, () => {
        console.log(
          `Action can not be executed cause feature ${name} is disabled`
        );
        return {
          type: CALL_DISABLED_FEATURE
        };
      });
    }
    if (pages && typeof pages === "object") {
      feature.pages = overrideValues(pages, FeatureDisabled);
    }
    features[name] = feature;
  }
};

registerFeature({
  name: "gamefield",
  enabled: true,
  ...GameField
});

export default features;
