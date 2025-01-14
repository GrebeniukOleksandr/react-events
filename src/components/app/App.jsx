import { useState, useEffect } from 'react';
import Description from '../Description/Description.jsx';
import Option from '../Option/Option.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';


export default function App() {
    const [feedback, setFeedback] = useState(() => {
        const saveFeedback = localStorage.getItem('feedback');
        if(saveFeedback != null) {
            return JSON.parse(saveFeedback);
        }
        return {  
            good: 0,
            neutral: 0, 
            bad: 0
        }
    });
    const updateFeedback = feedbackType => {
        setFeedback((prevFeedback)=> ({
            ...feedback,
            [feedbackType]:prevFeedback[feedbackType] + 1,
        }));
    };
    
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;    
    const handleReset = () => {
        setFeedback({
            good: 0,
            neutral: 0, 
            bad: 0
        })
    };
    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);
    return <>
            <Description />
            <Option updateFeedback={updateFeedback} totalFeedback={totalFeedback}handleReset={handleReset}/>
            {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback}/> : <Notification />} 
        </>;
};
