import React, { useEffect, useState } from 'react';
import { BiShareAlt } from 'react-icons/bi';

export const BlogPost = () => {
  const activePost = {
    id: Math.random() * Math.random(),
    title: 'Dark mode con puro HTML y CSS',
    slug: 'slug-del-post',
    date: '22/04/2021',
    description:
      'Descripción resumida del proyecto en la que explico el proceso que llevé a cabo para su desarrollo.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere turpis sed turpis consectetur, nec tincidunt mi venenatis. Nulla ullamcorper iaculis urna, sit amet aliquam dolor dapibus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id ipsum mi. Praesent ac dolor quis massa rutrum cursus. Maecenas a gravida diam, pretium viverra diam. Praesent sagittis ullamcorper condimentum.      Vivamus luctus, mauris sit amet gravida imperdiet, neque ex luctus nisi, vel commodo mauris enim in mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ut mi porta, laoreet enim ac, posuere felis. Donec dolor libero, dapibus ut fringilla ac, pretium quis diam. Sed libero augue, porta sit amet ligula a, bibendum feugiat justo. Suspendisse ultrices vel dolor mattis eleifend. Phasellus venenatis augue ut odio blandit, nec finibus libero eleifend. Ut dapibus augue vitae lacinia auctor. Integer felis erat, ullamcorper a odio quis, feugiat vehicula ex. Praesent vitae magna a mi commodo efficitur. Nam nec lectus orci. Phasellus ac aliquet nisl. Praesent ut eleifidunt mi venenatis. Nulla ullamcorper iaculis urna, sit amet aliquam dolor dapibus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id ipsum mi. Praesent ac dolor quis massa rutrum cursus. Maecenas a gravida diam, pretium viverra diam. Praesent sagittis ullamcorper condimentum.      Vivamus luctus, mauris sit amet gravida imperdiet, neque ex luctus nisi, vel commodo mauris enim in mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ut mi porta, laoreet enim ac, posuere felis. Donec dolor libero, dapibus ut fringilla ac, pretium quis diam. Sed libero augue, porta sit amet ligula a, bibendum feugiat justo. Suspendisse ultrices vel dolor mattis eleifend. Phasellus venenatis augue ut odio blandit, nec finibus libero eleifend. Ut dapibus augue vitae lacinia auctor. Integer felis erat, ullamcorper a odio quis, feugiat vehicula ex. Praesent vitae magna a mi commodo efficitur. Nam nec lectus orci. Phasellus ac aliquet nisl. Praesent ut eleifidunt mi venenatis. Nulla ullamcorper iaculis urna, sit amet aliquam dolor dapibus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id ipsum mi. Praesent ac dolor quis massa rutrum cursus. Maecenas a gravida diam, pretium viverra diam. Praesent sagittis ullamcorper condimentum.      Vivamus luctus, mauris sit amet gravida imperdiet, neque ex luctus nisi, vel commodo mauris enim in mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ut mi porta, laoreet enim ac, posuere felis. Donec dolor libero, dapibus ut fringilla ac, pretium quis diam. Sed libero augue, porta sit amet ligula a, bibendum feugiat justo. Suspendisse ultrices vel dolor mattis eleifend. Phasellus venenatis augue ut odio blandit, nec finibus libero eleifend. Ut dapibus augue vitae lacinia auctor. Integer felis erat, ullamcorper a odio quis, feugiat vehicula ex. Praesent vitae magna a mi commodo efficitur. Nam nec lectus orci. Phasellus ac aliquet nisl. Praesent ut eleifidunt mi venenatis. Nulla ullamcorper iaculis urna, sit amet aliquam dolor dapibus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id ipsum mi. Praesent ac dolor quis massa rutrum cursus. Maecenas a gravida diam, pretium viverra diam. Praesent sagittis ullamcorper condimentum.      Vivamus luctus, mauris sit amet gravida imperdiet, neque ex luctus nisi, vel commodo mauris enim in mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ut mi porta, laoreet enim ac, posuere felis. Donec dolor libero, dapibus ut fringilla ac, pretium quis diam. Sed libero augue, porta sit amet ligula a, bibendum feugiat justo. Suspendisse ultrices vel dolor mattis eleifend. Phasellus venenatis augue ut odio blandit, nec finibus libero eleifend. Ut dapibus augue vitae lacinia auctor. Integer felis erat, ullamcorper a odio quis, feugiat vehicula ex. Praesent vitae magna a mi commodo efficitur. Nam nec lectus orci. Phasellus ac aliquet nisl. Praesent ut eleifend augue. Maecenas tincidunt velit at diam elementum, ut lobortis urna aliquet. Proin faucibus ultrices urna, et elementum arcu. Vivamus sit amet velit sit amet leo posuere lacinia sagittis nec turpis. Curabitur porta in ex ut sollicitudin. Ut vulputate felis in viverra congue. Quisque congue fermentum consectetur. Quisque eleifend vehicula ante vel dignissim. Sed vel semper dolor. Cras neque orci, molestie non commodo at, consectetur ac urna. Ut eu ullamcorper turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla accumsan aliquam elit ut fermentum. Quisque erat neque, iaculis vel scelerisque quis, congue ac elit. Aliquam venenatis laoreet commodo. Phasellus volutpat metus mi, nec laoreet felis dignissim ut. Fusce lobortis dignissim mauris, nec blandit risus gravida in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tincidunt aliquet ex, in lobortis erat suscipit a. Cras eleifend, dui sit amet varius pellentesque, nunc sapien lacinia arcu, vel molestie turpis leo nec nunc. Quisque eu vulputate purus, a tempor leo. Mauris vehicula dui lobortis libero euismod, id commodo nulla lacinia. Maecenas nunc velit, pretium sit amet ex ac, tempor lacinia dolor. Vivamus nec cursus neque, nec faucibus elit.',
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Loading
  if (isLoading) {
    return <div>Cargardo post...</div>;
  }

  return (
    <div className="blog-post">
      <h2>{activePost.title}</h2>
      <p>{activePost.description}</p>
      <div className="blog-post-time">
        <span>{activePost.date} - (Hace una semana)</span>
        <BiShareAlt />
      </div>

      <article>{activePost.content}</article>
    </div>
  );
};
