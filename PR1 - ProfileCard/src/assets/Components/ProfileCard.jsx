import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import TiltedCard from './TiltedCard.jsx';


function ProfileCard({ name, role, imageUrl, linkedinUrl, githubUrl, discription  }) {
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
        rotateAmplitude={16}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent
        overlayContent={
          <>
            <Card className="py-4 flex rounded-2xl px-2 ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-xl capitalize text-black font-bold">{name}</p>
                <h4 className="font-bold capitalize text-black text-large">{role}</h4>
                <div className="flex gap-4 mt-2">
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 ">LinkedIn</a>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 ">GitHub</a>
                </div>
                <div>
                  <p className="text-white pt-30 text-lg">{discription}</p>
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