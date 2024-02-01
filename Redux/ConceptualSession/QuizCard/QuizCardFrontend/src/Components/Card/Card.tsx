import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";

export function CardWithLink({ children }) {
  return (
    <Card className="mt-6 w-96" placeholder={undefined}>
      <CardBody placeholder={undefined}>{children}</CardBody>
      <CardFooter placeholder={undefined} className="pt-0">
        <a href="#" className="inline-block">
          <Button
            placeholder={undefined}
            size="sm"
            variant="text"
            className="flex items-center gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
