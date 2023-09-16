import { ScrollArea } from "@/components/ui/scroll-area";
import { ResponsiveGallery } from "./components/responsive-gallery";

export default function Galery() {
  return (
    <ScrollArea className="section-no-padding">
      <ResponsiveGallery />
    </ScrollArea>
  );
}
