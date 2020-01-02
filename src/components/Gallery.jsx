import Img from 'gatsby-image';
import { chunk, sum } from 'lodash';
import React from 'react';
import { Box } from 'rebass';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';



const Gallery = ({ intl, images, itemsPerRow: itemsPerRowByBreakpoints }) => {
    const placeholders = intl.formatMessage({id: 'people.kids'});
  
    const aspectRatios = images.map(image => image.aspectRatio);
    const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map( itemsPerRow =>
            chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
                sum(rowAspectRatios),
            ),
    );
    return (
        <div>
            {images.map((image, i) => (
               
                <Box
                // sx={{
                //     mx: 1
                //   }}
                    key={image.originalName}
                    width={rowAspectRatioSumsByBreakpoints.map(
                        // Return a value for each breakpoint
                        (rowAspectRatioSums, j) => {
                            // Find out which row the image is in and get its aspect ratio sum
                            const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
                            const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
                            return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
                        },
                    )}
                    title={placeholders}
                    // title={<FormattedMessage {...messages.title} />}
                    css={{ display: 'inline-block'}}
                >
                 
                    <Img
                        key={image.originalName}
                        fluid={image} 
                        alt= {image.originalName}
                        // style={{ margin: '5px'}}
                        imgStyle={{ objectFit: 'cover' }}
                    />   
                </Box>
            ))}
        </div>
    );
};

Gallery.propTypes = {
    intl: intlShape.isRequired
  }

export default injectIntl(Gallery);