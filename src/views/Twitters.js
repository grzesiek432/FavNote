import React from 'react';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const twitters = [
   {
      title: 'Hello Roman',
      content:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      twitterName: 'hello_roman',
   },
   {
      title: 'Redux guy',
      content:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      twitterName: 'dan_abramov',
   },
   {
      title: 'React router stuff',
      content:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
      twitterName: 'mjackson',
   },
   {
      title: 'Super animacje!',
      content:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
      twitterName: 'sarah_edo',
   },
];

const Twitters = () => (
   <GridTemplate pageType="twitters">
      {twitters.map((item) => (
         <Card
            cardType="twitters"
            title={item.title}
            content={item.content}
            created={item.created}
            twitterName={item.twitter}
            key={item.title}
         />
      ))}
   </GridTemplate>
);

export default Twitters;
