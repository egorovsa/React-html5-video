import * as React from 'react';
import {Source, ReactHtml5Video, VideoSourceType} from "../ui/ReactHtml5Video";
import {UIVideoAdvTest} from "../ui/UIVideoAdvTestComponent";
import {VideoSliderSlide} from "../ui/UIVideoSliderComponent";

export interface Props {

}

export interface State {

}

export class AppComponent extends React.Component<Props, State> {
	state: State = {};

	//static defaultProps: Props = {} as Props;

	public render() {
		let src: Source[] = [
			{
				name: '1080p',
				source: [{
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.mp4',
					type: VideoSourceType.video_mp4
				}, {
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.webm',
					type: VideoSourceType.video_webm
				}, {
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.ogv',
					type: VideoSourceType.videi_ogg
				}, {
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.m4v',
					type: VideoSourceType.video_mp4
				}]
			}, {
				name: '720p',
				source: [{
					source: 'http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4',
					type: VideoSourceType.video_mp4
				}, {
					source: 'http://www.quirksmode.org/html5/videos/big_buck_bunny.webm',
					type: VideoSourceType.video_webm
				}, {
					source: 'http://www.quirksmode.org/html5/videos/big_buck_bunny.ogv',
					type: VideoSourceType.videi_ogg
				}]
			}, {
				name: '480p',
				source: [{
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.mp4',
					type: VideoSourceType.video_mp4
				}, {
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.webm',
					type: VideoSourceType.video_webm
				}, {
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.ogv',
					type: VideoSourceType.videi_ogg
				}, {
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.m4v',
					type: VideoSourceType.video_mp4
				}]
			}, {
				name: '240p',
				source: [{
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.mp4',
					type: VideoSourceType.video_mp4
				}, {
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.webm',
					type: VideoSourceType.video_webm
				}, {
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.ogv',
					type: VideoSourceType.videi_ogg
				}, {
					source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.m4v',
					type: VideoSourceType.video_mp4
				}]
			}

		];

		let slides: VideoSliderSlide[] = [
			{
				img: "http://lorempixel.com/100/75/people/",
				link: "http://video.egorov.pw",
			},
			{
				img: "http://lorempixel.com/100/75/city/",
				link: "http://video.egorov.pw",
			},
			{
				img: "http://lorempixel.com/100/75/nature/",
				link: "http://video.egorov.pw",
			},
			{
				img: "http://lorempixel.com/100/75/transport/",
				link: "http://video.egorov.pw",
			},
			{
				img: "http://lorempixel.com/100/75/business/",
				link: "http://video.egorov.pw",
			},
			{
				img: "http://lorempixel.com/100/75/nightlife/",
				link: "http://video.egorov.pw",
			},
			{
				img: "http://lorempixel.com/100/75/food/",
				link: "http://video.egorov.pw",
			},
			{
				img: "http://lorempixel.com/100/75/cats/",
				link: "http://video.egorov.pw",
			},
		];

		return (
			<div>
				<div className="container">
					<ReactHtml5Video
						sources={src}
						poster="http://lorempixel.com/900/450/people/"
						advComponent={<UIVideoAdvTest/>}
						enableSlider={true}
						sliderSlides={slides}
					/>
				</div>
			</div>
		);
	}
}