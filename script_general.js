(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","xrPanelsEnabled":true,"data":{"locales":{"en":"locale/en.txt"},"history":{},"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false},"defaultLocale":"en","name":"Player428"},"backgroundColor":["#FFFFFF"],"layout":"absolute","scripts":{"executeJS":TDV.Tour.Script.executeJS,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMapLocation":TDV.Tour.Script.setMapLocation,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"clone":TDV.Tour.Script.clone,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"startMeasurement":TDV.Tour.Script.startMeasurement,"openLink":TDV.Tour.Script.openLink,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"playAudioList":TDV.Tour.Script.playAudioList,"historyGoForward":TDV.Tour.Script.historyGoForward,"setValue":TDV.Tour.Script.setValue,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getKey":TDV.Tour.Script.getKey,"getPixels":TDV.Tour.Script.getPixels,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"enableVR":TDV.Tour.Script.enableVR,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showWindowBase":TDV.Tour.Script.showWindowBase,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getOverlays":TDV.Tour.Script.getOverlays,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"resumePlayers":TDV.Tour.Script.resumePlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"init":TDV.Tour.Script.init,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"textToSpeech":TDV.Tour.Script.textToSpeech,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"unloadViewer":TDV.Tour.Script.unloadViewer,"registerKey":TDV.Tour.Script.registerKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"disableVR":TDV.Tour.Script.disableVR,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"createTween":TDV.Tour.Script.createTween,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"downloadFile":TDV.Tour.Script.downloadFile,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"mixObject":TDV.Tour.Script.mixObject,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"toggleVR":TDV.Tour.Script.toggleVR,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showPopupImage":TDV.Tour.Script.showPopupImage,"translate":TDV.Tour.Script.translate,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"shareSocial":TDV.Tour.Script.shareSocial,"setLocale":TDV.Tour.Script.setLocale,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizStart":TDV.Tour.Script.quizStart,"existsKey":TDV.Tour.Script.existsKey,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"isPanorama":TDV.Tour.Script.isPanorama},"start":"this.init()","scrollBarColor":"#000000","hash": "b18e58c29621ce6b8eb75fa663809711662e242353d861b6a42a6f31f709fd6d", "definitions": [{"id":"mainPlayList","items":[{"camera":"this.panorama_A3F0A12D_A861_30C0_41B2_40F2919E7C74_camera","media":"this.panorama_A3F0A12D_A861_30C0_41B2_40F2919E7C74","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C","class":"PhotoAlbumPlayListItem"},{"camera":"this.panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA_camera","media":"this.panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"camera":"this.panorama_A5A7A77B_A861_DF40_41E0_79824C471656_camera","media":"this.panorama_A5A7A77B_A861_DF40_41E0_79824C471656","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"camera":"this.panorama_A7A640DD_A860_F140_41D1_EAFE3A675CDA_camera","media":"this.panorama_A7A640DD_A860_F140_41D1_EAFE3A675CDA","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"}],"class":"PlayList"},{"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_A7A640DD_A860_F140_41D1_EAFE3A675CDA_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_A7A640DD_A860_F140_41D1_EAFE3A675CDA_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"height":512,"colCount":6,"tags":["ondemand","preload"],"width":3072}]}}],"vfov":180,"hfov":360,"id":"panorama_A7A640DD_A860_F140_41D1_EAFE3A675CDA","overlays":["this.overlay_A78ADDFB_A87F_5347_41DC_2EBCA219C543"],"thumbnailUrl":"media/panorama_A7A640DD_A860_F140_41D1_EAFE3A675CDA_t.webp","hfovMax":130,"adjacentPanoramas":[{"data":{"overlayID":"overlay_A78ADDFB_A87F_5347_41DC_2EBCA219C543"},"distance":8.84,"yaw":-15.16,"panorama":"this.panorama_A5A7A77B_A861_DF40_41E0_79824C471656","backwardYaw":66.65,"class":"AdjacentPanorama","select":"this.overlay_A78ADDFB_A87F_5347_41DC_2EBCA219C543.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"photo_4_2026-04-20_07-56-12"},"label":trans('panorama_A7A640DD_A860_F140_41D1_EAFE3A675CDA.label'),"hfovMin":"150%"},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","arrowKeysAction":"translate","aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"touchControlMode":"drag_rotation"},{"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","playbackBarHeadWidth":6,"subtitlesFontColor":"#FFFFFF","progressBackgroundColor":["#000000"],"playbackBarHeight":10,"playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingLeft":6,"playbackBarBackgroundColorDirection":"vertical","data":{"name":"Main Viewer"},"progressBottom":10,"toolTipPaddingTop":4,"playbackBarProgressBorderRadius":0,"progressBorderSize":0,"playbackBarRight":0,"progressHeight":2,"vrThumbstickRotationStep":20,"playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderRadius":2,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderSize":0,"subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"subtitlesBottom":50,"progressBorderRadius":2,"subtitlesTextShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","firstTransitionDuration":0,"toolTipFontSize":"1.11vmin","toolTipPaddingRight":6,"playbackBarBorderRadius":0,"playbackBarHeadBorderRadius":0,"progressLeft":"33%","toolTipShadowColor":"#333138","subtitlesFontSize":"3vmin","toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","toolTipFontColor":"#606060","playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","vrPointerColor":"#FFFFFF","id":"MainViewer","subtitlesFontFamily":"Arial","toolTipFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","toolTipBorderColor":"#767676","vrPointerSelectionTime":2000,"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarBackgroundOpacity":1,"class":"ViewerArea","playbackBarHeadShadowColor":"#000000","minHeight":50,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"minWidth":100,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0],"subtitlesGap":0,"playbackBarHeadShadowVerticalLength":0,"propagateClick":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"height":"100%","progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","width":"100%","progressOpacity":0.7,"playbackBarBottom":5,"subtitlesTextShadowOpacity":1,"progressBarBackgroundColorRatios":[0]},{"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_A5A7A77B_A861_DF40_41E0_79824C471656_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_A5A7A77B_A861_DF40_41E0_79824C471656_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"height":512,"colCount":6,"tags":["ondemand","preload"],"width":3072}]}}],"vfov":180,"hfov":360,"id":"panorama_A5A7A77B_A861_DF40_41E0_79824C471656","overlays":["this.overlay_A7AB4466_A863_5141_41DF_B8BC5F0021E1","this.overlay_A7844DFA_A87F_5341_41DA_3288AF996940"],"thumbnailUrl":"media/panorama_A5A7A77B_A861_DF40_41E0_79824C471656_t.webp","hfovMax":130,"adjacentPanoramas":[{"data":{"overlayID":"overlay_A7844DFA_A87F_5341_41DA_3288AF996940"},"distance":8.55,"yaw":66.65,"panorama":"this.panorama_A7A640DD_A860_F140_41D1_EAFE3A675CDA","backwardYaw":-15.16,"class":"AdjacentPanorama","select":"this.overlay_A7844DFA_A87F_5341_41DA_3288AF996940.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_A7AB4466_A863_5141_41DF_B8BC5F0021E1"},"distance":100,"yaw":-55.64,"panorama":"this.panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA","backwardYaw":160.15,"class":"AdjacentPanorama","select":"this.overlay_A7AB4466_A863_5141_41DF_B8BC5F0021E1.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"photo_3_2026-04-20_07-56-12"},"label":trans('panorama_A5A7A77B_A861_DF40_41E0_79824C471656.label'),"hfovMin":"150%"},{"id":"MainViewerPhotoAlbumPlayer","viewerArea":"this.MainViewer","xrEnabled":true,"class":"PhotoAlbumPlayer"},{"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_A3F0A12D_A861_30C0_41B2_40F2919E7C74_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_A3F0A12D_A861_30C0_41B2_40F2919E7C74_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"height":512,"colCount":6,"tags":["ondemand","preload"],"width":3072}]}}],"vfov":180,"hfov":360,"id":"panorama_A3F0A12D_A861_30C0_41B2_40F2919E7C74","overlays":["this.overlay_A68762A0_A86F_31C1_41BB_2DE168D6BA53"],"thumbnailUrl":"media/panorama_A3F0A12D_A861_30C0_41B2_40F2919E7C74_t.webp","hfovMax":130,"adjacentPanoramas":[{"data":{"overlayID":"overlay_A68762A0_A86F_31C1_41BB_2DE168D6BA53"},"distance":5.03,"yaw":-168.88,"panorama":"this.panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA","backwardYaw":157.31,"class":"AdjacentPanorama","select":"this.overlay_A68762A0_A86F_31C1_41BB_2DE168D6BA53.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"photo_1_2026-04-20_07-56-12"},"label":trans('panorama_A3F0A12D_A861_30C0_41B2_40F2919E7C74.label'),"hfovMin":"150%"},{"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"height":512,"colCount":6,"tags":["ondemand","preload"],"width":3072}]}}],"vfov":180,"hfov":360,"id":"panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA","overlays":["this.overlay_B8496B89_A861_57C0_41C3_2645E826A26B","this.overlay_A7AEC465_A863_5142_41C1_4A5C66940CC9"],"thumbnailUrl":"media/panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA_t.webp","hfovMax":130,"adjacentPanoramas":[{"data":{"overlayID":"overlay_A7AEC465_A863_5142_41C1_4A5C66940CC9"},"distance":2.43,"yaw":160.15,"panorama":"this.panorama_A5A7A77B_A861_DF40_41E0_79824C471656","backwardYaw":-55.64,"class":"AdjacentPanorama","select":"this.overlay_A7AEC465_A863_5142_41C1_4A5C66940CC9.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_B8496B89_A861_57C0_41C3_2645E826A26B"},"distance":100,"yaw":157.31,"panorama":"this.panorama_A3F0A12D_A861_30C0_41B2_40F2919E7C74","backwardYaw":-168.88,"class":"AdjacentPanorama","select":"this.overlay_B8496B89_A861_57C0_41C3_2645E826A26B.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"photo_2_2026-04-20_07-56-12"},"label":trans('panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA.label'),"hfovMin":"150%"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_A518C4B1_A860_D1C0_41D7_F64EAC110718","class":"PanoramaCamera","id":"panorama_A6A60FE2_A860_CF41_41E3_6403DC38E2CA_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"thumbnailUrl":"media/album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C_t.png","data":{"label":"Photo Album photo_2_2026-04-20_07-56-12"},"class":"PhotoAlbum","playList":"this.album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C_AlbumPlayList","label":trans('album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C.label'),"id":"album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_A5E399B3_A861_D3C0_41E0_6EDCBDCB2CE3","class":"PanoramaCamera","id":"panorama_A5A7A77B_A861_DF40_41E0_79824C471656_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_A7E3C2DF_A860_F140_41AF_9A722302F55B","class":"PanoramaCamera","id":"panorama_A7A640DD_A860_F140_41D1_EAFE3A675CDA_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"data":{"label":"photo_2_2026-04-20_07-56-12"},"height":640,"thumbnailUrl":"media/album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C_0_t.webp","class":"Photo","label":trans('album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C_0.label'),"id":"album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C_0","image":{"class":"ImageResource","levels":[{"url":"media/album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C_0.webp","class":"ImageResourceLevel"}]},"duration":5000,"width":1280},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_A2B025F9_A861_3340_41B6_527B6793071B","class":"PanoramaCamera","id":"panorama_A3F0A12D_A861_30C0_41B2_40F2919E7C74_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"data":{"hasPanoramaAction":true,"label":"GoToPhoto_3_2026-04-20_07-56-12"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-10.87,"distance":100,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-15.16,"vfov":4.88,"hfov":6.96,"image":"this.AnimatedImageResource_B9F79B17_A860_D0CF_41DE_C51669345C8D","data":{"label":"GoToPhoto_3_2026-04-20_07-56-12"}}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_B8BCEB94_A87F_57C1_41B9_7E6ADCBDE972"],"useHandCursor":true,"id":"overlay_A78ADDFB_A87F_5347_41DC_2EBCA219C543","enabledInVR":true},{"data":{"hasPanoramaAction":true,"label":"GoToPhoto_2_2026-04-20_07-56-12"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-0.3,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-55.64,"vfov":10.5,"hfov":10.5,"image":"this.AnimatedImageResource_B9F7DB17_A860_D0CF_41C6_88802999EE6F","data":{"label":"GoToPhoto_2_2026-04-20_07-56-12"}}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_B8EB089C_A863_31C0_41B8_4013F9BC18DE"],"useHandCursor":true,"id":"overlay_A7AB4466_A863_5141_41DF_B8BC5F0021E1","enabledInVR":true},{"data":{"hasPanoramaAction":true,"label":"GoToPhoto_4_2026-04-20_07-56-12"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-11.23,"distance":100,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":66.65,"vfov":8.84,"hfov":10.5,"image":"this.AnimatedImageResource_B9F7BB17_A860_D0CF_41DB_E9C70559F629","data":{"label":"GoToPhoto_4_2026-04-20_07-56-12"}}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_B871FE01_A87F_50C0_41E0_F1B774529495"],"useHandCursor":true,"id":"overlay_A7844DFA_A87F_5341_41DA_3288AF996940","enabledInVR":true},{"data":{"hasPanoramaAction":true,"label":"GoToPhoto_2_2026-04-20_07-56-12"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-18.68,"distance":50,"class":"HotspotPanoramaOverlayImage","hfov":7.74,"yaw":-168.88,"data":{"label":"GoToPhoto_2_2026-04-20_07-56-12"},"vfov":9.2,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_B9F47B17_A860_D0CF_41E3_08FE216567BE","roll":2.39}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_A710B2E3_A86F_3140_41E3_FA4E0A42479B"],"useHandCursor":true,"id":"overlay_A68762A0_A86F_31C1_41BB_2DE168D6BA53","enabledInVR":true},{"class":"HotspotPanoramaOverlay","items":[{"pitch":3.22,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":157.31,"data":{"label":"GoToPhoto_1_2026-04-20_07-56-12"},"vfov":8.86,"hfov":13.02,"image":"this.res_B8AA28DE_A861_5141_41CF_6A1093D50592"}],"maps":[],"data":{"label":"GoToPhoto_1_2026-04-20_07-56-12"},"areas":["this.HotspotPanoramaOverlayArea_B8467B91_A861_57C3_41B0_414965A7F9A7"],"useHandCursor":true,"id":"overlay_B8496B89_A861_57C0_41C3_2645E826A26B","enabledInVR":true},{"data":{"hasPanoramaAction":true,"label":"GoToPhoto_3_2026-04-20_07-56-12"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-34.98,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":160.15,"vfov":10.5,"hfov":10.5,"image":"this.AnimatedImageResource_B9F41B17_A860_D0CF_41C4_252B4250ACD2","data":{"label":"GoToPhoto_3_2026-04-20_07-56-12"}}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_A78D446B_A863_5147_418E_16196C1C4DBD"],"useHandCursor":true,"id":"overlay_A7AEC465_A863_5142_41C1_4A5C66940CC9","enabledInVR":true},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_A518C4B1_A860_D1C0_41D7_F64EAC110718"},{"id":"album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C_AlbumPlayList","items":[{"camera":{"initialPosition":{"class":"PhotoCameraPosition"},"targetPosition":{"y":0.53,"x":0.44,"zoomFactor":1.1,"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","duration":5000,"scaleMode":"fit_outside"},"media":"this.album_A6335F1B_A867_F0C0_41C8_EC2DA4A8F23C_0","class":"PhotoPlayListItem"}],"class":"PhotoPlayList"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_A5E399B3_A861_D3C0_41E0_6EDCBDCB2CE3"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_A7E3C2DF_A860_F140_41AF_9A722302F55B"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_A2B025F9_A861_3340_41B6_527B6793071B"},{"rowCount":6,"colCount":4,"class":"AnimatedImageResource","frameCount":24,"finalFrame":"first","frameDuration":41,"id":"AnimatedImageResource_B9F79B17_A860_D0CF_41DE_C51669345C8D","levels":[{"url":"media/res_B8EB3E96_A860_D1C0_41D9_3D124DA9E426_0.webp","class":"ImageResourceLevel","height":264,"width":208}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_B8BCEB94_A87F_57C1_41B9_7E6ADCBDE972"},{"rowCount":3,"colCount":3,"class":"AnimatedImageResource","frameCount":9,"finalFrame":"first","frameDuration":41,"id":"AnimatedImageResource_B9F7DB17_A860_D0CF_41C6_88802999EE6F","levels":[{"url":"media/res_B85752DC_A860_D140_41E1_B6DD8EFB9793_0.webp","class":"ImageResourceLevel","height":156,"width":156}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_B8EB089C_A863_31C0_41B8_4013F9BC18DE"},{"rowCount":6,"colCount":4,"class":"AnimatedImageResource","frameCount":24,"finalFrame":"first","frameDuration":41,"id":"AnimatedImageResource_B9F7BB17_A860_D0CF_41DB_E9C70559F629","levels":[{"url":"media/res_B8EB3E96_A860_D1C0_41D9_3D124DA9E426_0.webp","class":"ImageResourceLevel","height":264,"width":208}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 4)","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_B871FE01_A87F_50C0_41E0_F1B774529495"},{"rowCount":3,"colCount":3,"class":"AnimatedImageResource","frameCount":9,"finalFrame":"first","frameDuration":41,"id":"AnimatedImageResource_B9F47B17_A860_D0CF_41E3_08FE216567BE","levels":[{"url":"media/res_B85752DC_A860_D140_41E1_B6DD8EFB9793_0.webp","class":"ImageResourceLevel","height":156,"width":156}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A710B2E3_A86F_3140_41E3_FA4E0A42479B"},{"id":"res_B8AA28DE_A861_5141_41CF_6A1093D50592","levels":[{"url":"media/res_B8AA28DE_A861_5141_41CF_6A1093D50592_0.webp","class":"ImageResourceLevel","height":44,"width":43}],"class":"ImageResource"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_B8467B91_A861_57C3_41B0_414965A7F9A7"},{"rowCount":3,"colCount":3,"class":"AnimatedImageResource","frameCount":9,"finalFrame":"first","frameDuration":41,"id":"AnimatedImageResource_B9F41B17_A860_D0CF_41C4_252B4250ACD2","levels":[{"url":"media/res_B85752DC_A860_D140_41E1_B6DD8EFB9793_0.webp","class":"ImageResourceLevel","height":156,"width":156}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A78D446B_A863_5147_418E_16196C1C4DBD"}],"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"scrollBarMargin":2,"class":"Player","gap":10,"minHeight":0,"minWidth":0,"propagateClick":false,"height":"100%","children":["this.MainViewer"],"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.8, Mon Apr 20 2026