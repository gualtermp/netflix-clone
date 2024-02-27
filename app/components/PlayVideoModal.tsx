import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PlayVideoModal = {
  title: string;
  overview: string;
  youtubeURL: string;
  state: boolean;
  changeState: (state: boolean) => void;
};

export default function PlayVideoModal({
  changeState,
  overview,
  state,
  youtubeURL,
  title,
}: PlayVideoModal) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
        </DialogHeader>
        <iframe src={youtubeURL} height={250} className="w-full" />
      </DialogContent>
    </Dialog>
  );
}
