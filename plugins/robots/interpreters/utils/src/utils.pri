QT += widgets

INCLUDEPATH += \
	$$PWD/../include \
	$$PWD/../../utils/include \
	$$PWD/../../../../../ \

LIBS += -L$$PWD/../../../../../bin/ -lqrkernel -lqrutils

DEFINES += ROBOTS_UTILS_LIBRARY

HEADERS += \
	$$PWD/../include/utils/abstractTimer.h \
	$$PWD/../include/utils/debugHelper.h \
	$$PWD/../include/utils/realTimer.h \
	$$PWD/../include/utils/sensorsConfigurationWidget.h \
	$$PWD/../include/utils/textExpressionProcessor.h \
	$$PWD/../include/utils/tracer.h \

SOURCES += \
	$$PWD/abstractTimer.cpp \
	$$PWD/debugHelper.cpp \
	$$PWD/realTimer.cpp \
	$$PWD/sensorsConfigurationWidget.cpp \
	$$PWD/textExpressionProcessor.cpp \
	$$PWD/tracer.cpp \