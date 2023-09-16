import { NewlettersLinks } from "@/app/projects/components/newsletters-links";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  return (
    <section className="section">
      <Tabs defaultValue="newsletters" className="w-full">
        <div className="overflow-x-auto">
          <TabsList>
            <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            <TabsTrigger value="stopmotions">Stopmotions</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="newsletters">
          <NewlettersLinks />
        </TabsContent>
        <TabsContent value="podcasts">
          <div className="w-full grid place-items-center min-h-[78vh]">
            <p>Em breve...</p>
          </div>
        </TabsContent>
        <TabsContent value="stopmotions">
          <div className="w-full grid place-items-center min-h-[78vh]">
            <p>Em breve...</p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
