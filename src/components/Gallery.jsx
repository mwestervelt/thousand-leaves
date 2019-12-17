import Img from 'gatsby-image';
import { chunk, sum } from 'lodash';
import React from 'react';
import { Box } from 'rebass';

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints }) => {
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
                    css={{ display: 'inline-block' }}
                >
                    <Img
                        key={image.originalName}
                        fluid={image} 
                        alt= {image.originalName}
                    />
                </Box>
            ))}
        </div>
    );
};

export default Gallery;