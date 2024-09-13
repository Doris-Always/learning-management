import Cohorts from './displayedContents/cohorts';
import Programs from './displayedContents/programs';
import Learners from './displayedContents/learners';
import Instructors from './displayedContents/instructors';
import { RootState } from '@/ReduxStore/Store';
import { setButtonDisplay } from '@/ReduxStore/slice/SideNavSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const SideBarMainContent:React.FC = ()=>{    
    const activeItem = useSelector((state: RootState) => state.sideNavButton.buttonDisplay);

    const dispatch = useDispatch();
    useEffect(() => {
        if (activeItem === undefined || activeItem === null) {
            dispatch(setButtonDisplay('cohorts'));
        }
    }, [activeItem, dispatch])
  
    const ActiveDisplay = () =>{
        return (
            <>
            {
                activeItem === 'cohorts' || activeItem === 'cohort'? <Cohorts /> :
                activeItem === 'programs'? <Programs/> :
                activeItem === 'instructors'? <Instructors/>:
                activeItem === 'learners'? <Learners/>:
                <div className='hidden md:block'><Cohorts/> </div>

            }
            </>
        ) 
    }
    return(
        <>
        <ActiveDisplay/>
        </>
    )
       
    
}
export default SideBarMainContent;