export enum Fields {
  email = 'email',
  age = 'age',
  name = 'name',
}

export type DesignerInsuranceFields = Fields.email | Fields.age | Fields.name
export type DeveloperInsuranceFields = Fields.email | Fields.age

export const mockStepCallback = (nextStep: string) => (
  field: DesignerInsuranceFields,
  value: any
) => {
  return
}
