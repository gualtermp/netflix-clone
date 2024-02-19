import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="m-5">
      <Button> Hello </Button>
      <h1> Hello {session?.user?.name} </h1>
    </div>
  );
}
