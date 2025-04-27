import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";


const AccordionDemo = () => {
    const accordionArray = [
        { trigger: 'Who Are CreditGrow?', content: 'FlexiFund is a small business financial services provider that has a strong trusted network of over 100 banks and private financial institutions that are able to provide you the capital you are seeking to maintain & grow your business ASAP.' },
        { trigger: 'Am I obligated to accept the offer once I have been approved for financing?', content: 'No. There is no cost to apply and no obligation to accept.' },
        { trigger: 'I have a low credit score. Can I still qualify?', content: 'Of course! At CreditGrow, we know that your credit score doesn’t always tell the whole story. That’s why our approvals are based on more than just your credit score. We look at the overall health and potential of your business.' },
        { trigger: 'If approved, how fast can I get the funds?', content: 'Once approved, the funds will be credited to your dashboard. You can withdraw them to your business account anytime, and the transfer will be processed immediately upon withdrawal.' },
        { trigger: 'Will applying for funds impact my credit score?', content: 'Not at all. Our network of funding providers only make a “soft inquiry,” which will have no lasting effect on your credit score or credit history.' },
        { trigger: 'How much working capital can I receive?', content: 'CreditGrow can help your businesses secure anywhere from $5,000 to $5 Million, as long as it qualifies.' },
        { trigger: 'Are there restrictions on the use of working capital funding?', content: 'No. We trust that small business owners know best how to use their funding, so we don’t restrict how you use your funds.' },
        { trigger: 'How long will it take to get an offer once I apply?', content: 'Your business can receive an offer for funding within 24-48 hours.' },
    ]
    return (
        <>
        <Nav/>
        <section className="max-w-[70rem] mx-auto p-2">
            <Image
            src='/FAQ-banner.webp' 
            alt="Faq"
            width={700}
            height={400}
            className="w-full h-52 my-4"
            />
            <div className=" text-[#2D38A8] mb-[3rem]">
                <Accordion type="single" collapsible className="w-full">
                    {accordionArray?.map((item, index) => (
                        <AccordionItem value={`item- ${index + 1}`} key={index}>
                            <AccordionTrigger className="text-gray-800 text-start font-[600]">{item.trigger}</AccordionTrigger>
                            <AccordionContent className="font-[500] text-gray-600">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
        <Footer/>
        </>

    );
};

export default AccordionDemo;
