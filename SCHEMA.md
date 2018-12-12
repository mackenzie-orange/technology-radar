# Blip Data Schema

Blips are organized by category files in the "blips" directory.  

## Blip Categories

Each category file contains all blips in the given category.  You can create new category files if you feel they are necessary; the same review process outlined in the CONTRIBUTING.md document will be followed.

Current Categories:
 - Frameworks
 - Languages
 - Platforms
 - Techniques
 - Tools
 
## Blip Schema

The blip category files are formatted using the YAML 1.2 standard.  Directives and start of document symbols ("---") are NOT required.

Blips are in a Document Mapping format.  Each block is a document and MUST begin with a triple hyphen ("---") and end with a triple period ("...") .  Content lines for each block MUST use the mapping notation to express the keyed values within each block.

Each block MUST contain values for the following keys:
 - blip: Common name of the blip
 - ring: Ring in which the blip currently resides
 - description: An explanation of how and where the blip may be used. 
