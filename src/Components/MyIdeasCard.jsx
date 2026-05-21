import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import EditMyIdea from './EditMyIdea';
import DeleteMyIdea from './DeleteMyIdea';



const MyIdeasCard = ({ idea }) => {
    // console.log(idea)

    const { _id, title, shortDescription, category, imageUrl } = idea;

    return (

        <div className="m-2">

            <Card className="w-full items-stretch md:flex-row p-3 
          transition-all duration-600 ease-out 
            hover:scale-105 hover:shadow-2xl hover:-translate-y-2 
               hover:shadow-cyan-400/20">


                <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                    <Image src={imageUrl} alt="image" width={120} height={110}></Image>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8 text-2xl p-2">{title}!</Card.Title>
                        <Card.Description className="text-[1rem] p-2 line-clamp-3">
                            {shortDescription}
                        </Card.Description>
                        
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">Only 10 spots</span>
                            <span className="text-xs text-muted">Submission ends Oct 10.</span>
                        </div>

          
           <Link href={`/edit-my-idea/${_id}`}>
      <Button variant="secondary" className="w-full sm:w-auto">
        Edit
      </Button>
    </Link> 

    {/* <EditMyIdea key={idea._id} idea={idea}>
        <Button variant="secondary" className="w-full sm:w-auto">
        Edit
      </Button>
    </EditMyIdea> */}

  
    <DeleteMyIdea key={_id} idea={idea}>
        
    </DeleteMyIdea>




                        <Link href={`/trending_ideas/${_id}`}> <Button className="w-full sm:w-auto">View Details</Button></Link>
                    </Card.Footer>
                </div>
            </Card>

        </div>
    );
};

export default MyIdeasCard;