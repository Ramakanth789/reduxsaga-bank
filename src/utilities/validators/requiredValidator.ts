export const requiredValidator = (value: string) => {
    console.log("checking required", value);
    return value ? undefined : "Required";
  }
  