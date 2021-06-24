export default async (
  _,
  {},
  { dataSources } = {},
) => {
  return await dataSources.PoliceForcesAPI.getAllForces();
}