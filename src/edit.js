import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, AlignmentToolbar, BlockControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, __experimentalBoxControl as BoxControl } from '@wordpress/components';

import { BorderControl } from '../../Components';
import { getBorderCSS } from '../../Components/utils/getCSS';

import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { content, description, align, textColor, backgroundColor, padding, margin, border } = attributes;

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	}

	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	}

	const onChangeAlign = (newAlign) => {
		setAttributes({ align: newAlign });
	}

	const onChangeTextColor = (newColor) => {
		setAttributes({ textColor: newColor });
	}

	const onChangeBackgroundColor = (newColor) => {
		setAttributes({ backgroundColor: newColor });
	}

	const onChangePadding = (newPadding) => {
		setAttributes({ padding: newPadding });
	}

	const onChangeMargin = (newMargin) => {
		setAttributes({ margin: newMargin });
	}

	const blockProps = useBlockProps();

	const mailSl = `.wp-block-bbc-info#block-${clientId}`;
	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={align}
					onChange={onChangeAlign}
				/>
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={__('Info Box Settings', 'b-blocks-clone')}
				>
					<BoxControl
						label={__('Margin', 'b-blocks-clone')}
						values={margin}
						onChange={onChangeMargin}
						unites={[]}
						allowReset={true}
						sides={['top', 'bottom']}
					/>

					<BoxControl
						label={__('Padding', 'b-blocks-clone')}
						values={padding}
						onChange={onChangePadding}
						unites={['px', 'em', 'rem']}
						allowReset={false}
					/>

					<BorderControl label={__('Border:', 'text-domain')} value={border} onChange={val => setAttributes({ border: val })} defaults={{ radius: '5px' }} />

					<PanelColorSettings
						title={__('Text Color', 'b-blocks-clone')}
						initialOpen={true}
						colorSettings={[
							{
								value: textColor,
								onChange: onChangeTextColor,
								label: __('Text Color', 'b-blocks-clone')
							}
						]}
					/>
					<PanelColorSettings
						title={__('Background Color', 'b-blocks-clone')}
						initialOpen={true}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: onChangeBackgroundColor,
								label: __('Background Color', 'b-blocks-clone')
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps} style={{ backgroundColor: backgroundColor, padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`, margin: `${margin.top} ${margin.bottom}` }}>

				<style>{`
					${mailSl}{
						${getBorderCSS(border)}
					}
				`}</style>

				<RichText
					tagName='h3'
					value={content}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
					onChange={onChangeContent}
					placeholder={__('Info Box Title', 'b-blocks-clone')}
					style={{ textAlign: align, color: textColor }}
				/>
				<RichText
					tagName='p'
					value={description}
					allowedFormats={['core/italic', 'core/link', 'core/bold']}
					onChange={onChangeDescription}
					placeholder={__('Info Box Description', 'b-blocks-clone')}
					style={{ textAlign: align }}
				/>
			</div>
		</>
	);
}
