import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import TiltedCard from './TiltedCard.jsx';


function ProfileCard({ name, role, imageUrl, linkedinUrl, githubUrl, discription, mail, action, index }) {
  return (

    <div>

      <TiltedCard
        imageSrc={imageUrl}
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={5}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent
        overlayContent={
          <>
            <Card className="py-4 flex rounded-2xl px-2 w-full ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start w-full">
                <p className="text-xl capitalize text-black font-bold">{name}</p>
                <h4 className="font-bold capitalize text-black text-large">{role}</h4>
                <div className='absolute bottom-0 left-0 ps-5 pb-5 gap-1 flex'>
                  <span className='cursor-pointer' onClick={()=>action.deleteEmployee(index)}>🗑️</span>
                  <span className='cursor-pointer' onClick={()=>action.editEmployee(index)}>✏️</span>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 ">LinkedIn</a>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 ">GitHub</a>
                  <a href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer" className="text-gray-800 ">Mail</a>
                </div>
                <div className="">
                  <p className="text-white pt-25 pb-7 text-lg">{discription || 'No Discription'}</p>
                </div>
              </CardHeader>
            </Card>
          </>

        }
      />

    </div>
  );
}
export default ProfileCard;