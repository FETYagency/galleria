import { useContext } from "react";
import { DataContext } from "../services/provider/dataProvider";
import Masonry from "react-layout-masonry";
import MasonryLayout from "../layout/masonryLayout";
import Thumbnail from "../components/ui/thumbnail";
export default function Gallery() {
  const images = useContext(DataContext);
  const thumbs = images.map((per) => {
    return <Thumbnail data={per} />;
  });
  return (
    <Masonry columns={{ 640: 1, 768: 2, 1536: 4 }} gap={24}>
      {thumbs}
    </Masonry>
  );
}
