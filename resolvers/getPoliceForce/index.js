export default async (
  _,
  { id },
  { dataSources } = {},
) => {
  const results = await dataSources.PoliceForcesAPI.getPoliceForce(id);

  const transformedResults = results;

  return transformedResults;
}
