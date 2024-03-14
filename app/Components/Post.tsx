import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Post = () => {
  return (
    <div className="bg-slate-200  mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Card Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nihil, corporis ut cum
            necessitatibus vitae voluptatibus omnis deleniti exercitationem quisquam?
          </p>
        </CardContent>
        <CardFooter>
          <Link className="text-slate-400 hover:text-blue-300" href={"/"}>
            Read More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Post;
