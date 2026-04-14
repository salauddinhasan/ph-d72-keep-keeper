import Banner from "@/components/Banner";
import FriendsList from "@/components/FriendsList";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Banner />
      <FriendsList />
    </div>
  );
}
