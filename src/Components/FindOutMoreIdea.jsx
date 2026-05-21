import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";

const FindOutMoreIdea = () => {
    return (
        <div className="w-10/12 lg:w-7/12 mx-auto my-18">
  <Card className="p-8 md:p-10 bg-gray-900 backdrop-blur-md border border-default-200 shadow-xl rounded-3xl transition-all duration-300 hover:shadow-2xl hover:border-primary/30">
    <Card.Header className="flex gap-6 items-start">
      <div className="p-4 rounded-2xl bg-primary/10 shrink-0">
        <CircleDollar aria-label="Dollar sign icon" className="text-primary size-8" />
      </div>

      <div className="flex flex-col gap-3">
        <Card.Title className="text-3xl font-extrabold tracking-tight text-default-900">
          Evidence-Based Insights
        </Card.Title>
        
        <div className="text-lg text-default-600 leading-relaxed max-w-2xl">
          Bridge the gap between inspiration and science. Explore peer-reviewed research on wellness and mental health directly via Google Scholar.
        </div>

        <div className="mt-2">
          <p className="font-semibold text-default-800 uppercase tracking-wider text-sm mb-3">
            What you’ll gain:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 text-default-700">
              <span className="size-1.5 rounded-full bg-primary" />
              Validated scientific methodologies.
            </li>
            <li className="flex items-center gap-3 text-default-700">
              <span className="size-1.5 rounded-full bg-primary" />
              Evidence-based strategies for well-being.
            </li>
            <li className="flex items-center gap-3 text-default-700">
              <span className="size-1.5 rounded-full bg-primary" />
              Deep-dive psychological studies.
            </li>
          </ul>
        </div>
      </div>
    </Card.Header>

    <Card.Footer className="mt-6 pt-6 border-t border-default-100">
      <Link
        href="https://scholar.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 text-primary font-semibold text-lg hover:underline underline-offset-4"
      >
        Read Research
        <span className="transition-transform group-hover:translate-x-1">
          <Link.Icon />
        </span>
      </Link>
    </Card.Footer>
  </Card>
</div>
    );
};

export default FindOutMoreIdea;