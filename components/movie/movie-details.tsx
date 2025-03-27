import { Credits, Movie } from "@/lib/definitions";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MovieDetails({
  movie,
  credits,
}: {
  movie: Movie;
  credits: Credits;
}) {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Details</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              {movie.genres && (
                <div className="flex gap-2 mt-2">
                  <p>Genres : </p>
                  {movie.genres.map(
                    (genre: { name: string }, index: number) => (
                      <Badge key={index}>{genre.name}</Badge>
                    )
                  )}
                </div>
              )}

              {movie.release_date && (
                <div className="flex gap-2">
                  <p>Release date : </p>
                  <Badge>{movie.release_date}</Badge>
                </div>
              )}

              {movie.runtime && (
                <div className="flex gap-2">
                  <p>Runtime : </p>
                  <Badge>{movie.runtime} min</Badge>
                </div>
              )}

              {movie.budget > 0 && (
                <div className="flex gap-2">
                  <p>Budget : </p>
                  <Badge>{movie.budget.toLocaleString()} USD</Badge>
                </div>
              )}

              {movie.origin_country && (
                <div className="flex gap-2">
                  <p>Country : </p>
                  {movie.origin_country.map(
                    (country: string, index: number) => (
                      <Badge key={index}>{country}</Badge>
                    )
                  )}
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* {credits.cast && credits.cast.length > 0 && (
          <AccordionItem value="item-2">
            <AccordionTrigger>Cast</AccordionTrigger>
            <AccordionContent>
              {credits.cast &&
                credits.cast.map((person, index) => (
                  <Badge className="m-1" key={index}>
                    {person.name}
                  </Badge>
                ))}
            </AccordionContent>
          </AccordionItem>
        )}

        {credits.crew && credits.crew.length > 0 && (
          <AccordionItem value="item-3">
            <AccordionTrigger>Crew</AccordionTrigger>
            <AccordionContent>
              {credits.crew.map((person, index) => (
                <Badge className="m-1" key={index}>
                  {person.name}
                </Badge>
              ))}
            </AccordionContent>
          </AccordionItem>
        )} */}
      </Accordion>
    </div>
  );
}
