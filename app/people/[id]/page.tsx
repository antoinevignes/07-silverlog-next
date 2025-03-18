import PeopleDetails from "@/components/people/people-details";

export default async function Page(props: {
  params?: Promise<{
    id?: string;
  }>;
}) {
  const params = await props.params;
  const id = Number(params?.id);

  return <PeopleDetails id={id} />;
}
