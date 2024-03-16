# from pytube import YouTube
# link = YouTube('https://www.youtube.com/watch?v=2hlD7dWp09M')

# #looking for the available captions
# av_captions = link.captions
# print(av_captions)

# caption = source.captions.get_by_language_code('One of the available caption codes')
# xml_caption = caption.xml_captions #encode in xml format

# #saving the the captions to a flat file
# with open("output.txt", "w", encoding="utf-8") as f:
#     f.write(xml_caption)


from youtube_transcript_api import YouTubeTranscriptApi

from pytube import YouTube

yt = YouTube("https://youtu.be/QM-tDK7lurA?feature=shared")
video_id = yt.video_id
data = YouTubeTranscriptApi.get_transcript(video_id)

text = ""

for i in data:
    text += i['text'] + " "

print(text)
