import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AchievementCard from "../ui/card/AchievementCard";
import achievement from "../../data/achievement.json";

function Achievement() {
  const [selectedAchievement, setSelectedAchievement] = useState<null | number>(
    null
  );

  // Open dialog with the full description
  const handleReadMoreClick = (id: number) => {
    setSelectedAchievement(id);
  };

  return (
    <div className="flex flex-col gap-10 mt-5 mb-5 mx-12 z-30 min-h-[82vh] justify-around bg-white">
      <div className="title text-text-primary font-bold text-2xl md:text-4xl text-center">
        OUR ACHIEVEMENT
      </div>

      <div className="flex gap-10 flex-wrap justify-evenly">
        {achievement.map((achievement) => (
          <div key={achievement.id} className="md:w-1/3">
            <AchievementCard
              image={achievement.image}
              title={achievement.title}
              description={achievement.description}
              onReadMoreClick={() => handleReadMoreClick(achievement.id)}
            />
            {/* Dialog for showing full description */}
            <Dialog
              open={selectedAchievement === achievement.id}
              onOpenChange={() => setSelectedAchievement(null)}
            >
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="mt-4"
                  style={{ display: "none" }}
                >
                  Read More
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{achievement.title}</DialogTitle>
                </DialogHeader>

                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="rounded-xl hidden md:block w-full h-56 object-cover object-center"
                />

                <div className="py-4">
                  {/* Full Description */}
                  <p className="text-text-primary text-justify">
                    {achievement.id == selectedAchievement &&
                      achievement.description}
                  </p>
                </div>

                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedAchievement(null)}
                  >
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievement;
