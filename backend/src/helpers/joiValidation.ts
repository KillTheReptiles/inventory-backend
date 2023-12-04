// this function is used to validate the data that comes from the client
export function joiValidation(data: any, schema: any) {
  const { error } = schema.validate(data);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
