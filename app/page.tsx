import FeaturedPlaylists from "@/components/featuredPlaylists";
import { getToken } from "./spotifyAPI/utils";

export default function Home() {
  // getToken()
  
  return (
    <main>
      <FeaturedPlaylists></FeaturedPlaylists>
    </main>
  );
}
